'use client'
import { login } from './actions'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import EmailInput from '@/components/EmailInput';
import PasswordInput from '@/components/PasswordInput';
import Submit from '@/components/Submit';

export default function LoginPage() {
  const t = useTranslations('Login');

  async function handleAction(formData: FormData) {
    const { code, message } = await login(formData)
    if (code === 200) {
      alert('login success')
    } else {
      alert(message)
    }
  }

  return <div className="w-2/3">
    <h2 className="text-3xl font-bold leading-tight text-black">{t('login')}</h2>

    <form className="mt-8" action={handleAction}>
      <div className="space-y-5">
        <EmailInput />
        <PasswordInput />
        <Submit usage='login'></Submit>
      </div>
    </form>
    <div className="mt-8 flex justify-between">
      <Link href="/login/signup" title="" className="font-medium text-green-600 transition-all duration-200 hover:text-green-700 hover:underline"> {t('tipToRegister')}
      </Link>
      <Link href="/login/reset" title="" className="font-medium text-green-600 transition-all duration-200 hover:text-green-700 hover:underline"> {t('tipReset')}
      </Link>
    </div>
  </div>
}
