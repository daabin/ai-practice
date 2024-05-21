'use client'
import { login } from './actions'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AtSign, SquareAsterisk } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';


export default function LoginPage() {
  const router = useRouter()
  const loadingRef = useRef(false)
  const t = useTranslations('Login');

  async function onLogin(formData: FormData) {
    if (loadingRef.current) {
      return
    }
    loadingRef.current = true
    const { message } = await login(formData)
    loadingRef.current = false
    if (message === 'success') {
      router.push('/private')
    } else {
      alert(message)
    }
  }

  return <div className="w-2/3">
    <h2 className="text-3xl font-bold leading-tight text-black">{t('login')}</h2>

    <form className="mt-8">
      <div className="space-y-5">
        <div>
          <label className="text-base font-medium text-gray-900"> {t('email')} </label>
          <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <AtSign />
            </div>

            <input
              id="email" name="email" type="email" required
              placeholder={t('email')}
              className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-green-600 focus:bg-white caret-blue-600"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="text-base font-medium text-gray-900"> {t('password')} </label>

            <Link href="/login/reset" title="" className="text-sm font-medium text-green-600 transition-all duration-200 hover:text-green-700 focus:text-green-700 hover:underline"> {t('tipReset')} </Link>
          </div>
          <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SquareAsterisk />
            </div>

            <input
              id="password" name="password" type="password" required
              placeholder={t('password')}
              className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-green-600 focus:bg-white caret-green-600"
            />
          </div>
        </div>

        <div>
          <button
            formAction={onLogin}
            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-green-600 focus:outline-none hover:opacity-80 focus:opacity-80"
          >
            {t('login')}
          </button>
        </div>
      </div>
    </form>
    <p className="mt-8 text-center text-base text-gray-600">
      <span>{t('tipRegister')}</span>
      <Link href="/login/signup" title="" className="font-medium text-green-600 transition-all duration-200 hover:text-green-700 focus:text-green-700 hover:underline"> {t('tipToRegister')}
      </Link>
    </p>
  </div>
}
