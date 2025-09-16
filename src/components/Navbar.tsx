import {useSession} from 'next-auth/react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function Navbar() {
  const {data: session} = useSession();
  const t = useTranslations('Navbar');

  return (
    <nav className="px-6 py-4 border-b border-gray-200 bg-white flex justify-between items-center">
      <div>
        <Link 
          href="/" 
          className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors no-underline"
        >
          {t('logo')}
        </Link>
      </div>
      
      <div className="flex gap-4 items-center">
        {!session ? (
          <>
            <Link 
              href="/login"
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors no-underline"
            >
              {t('signIn')}
            </Link>
            <Link 
              href="/signup"
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors no-underline"
            >
              {t('signUp')}
            </Link>
          </>
        ) : (
          <span className="text-gray-600">
            {t('welcome', {username: session.user?.name || 'User'})}
          </span>
        )}
      </div>
    </nav>
  );
}