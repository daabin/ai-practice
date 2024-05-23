import { SquareAsterisk } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PasswordInput() {
  const t = useTranslations('Login');


  return <div>
    <label className="text-base font-medium text-gray-900"> {t('password')} </label>
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
}