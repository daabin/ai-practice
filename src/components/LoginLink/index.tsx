import Link from 'next/link';
import { CircleArrowRight } from 'lucide-react';


export default function LoginLink() {
  return (
    <Link href="/login" className="inline-flex items-center px-6 py-4 font-semibold text-black transition-all duration-200 rounded-full bg-green-300 hover:bg-green-400 focus:bg-green-400" role="button">
      <span className='mr-2'>登录</span>
      <CircleArrowRight></CircleArrowRight>
    </Link>
  );
}