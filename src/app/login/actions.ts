'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return {code: 4001, message: error.message }
  }

  return {code: 200,  message: 'login success'}
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return {code: 4002, message: error.message }
  }

  return {code: 200,  message: 'signup success'}
}

export async function logout() {
  const supabase = createClient()

  await supabase.auth.signOut()

  await revalidatePath('/login')
}

export async function resetPassword(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
  }

  const { error } = await supabase.auth.resetPasswordForEmail(data.email)

  if (error) {
    return {code: 4003, message: error.message }
  }

  return {code: 200,  message: 'reset password success'}
}