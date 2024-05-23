import { AtSign } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function EmailInput() {
  const t = useTranslations('Login');

  return (
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
  );
}