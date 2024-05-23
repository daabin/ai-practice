import { useFormStatus } from 'react-dom'
import { useTranslations } from 'next-intl';
import { Loader } from "lucide-react"
import { Button } from "@/components/ui/button"

type UsageType = "login" | "register" | "reset"

export default function Submit({ usage }: { usage: UsageType }) {
  const t = useTranslations('Login');
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="h-12 w-full bg-green-600"
    >
      {pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
      {usage === 'login' && t('login')}
      {usage === 'register' && t('register')}
      {usage === 'reset' && t('reset')}
    </Button>
  );
}