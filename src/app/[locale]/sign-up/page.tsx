'use client';

import {useLocale, useTranslations} from 'next-intl';
import {FormEvent, useState} from 'react';
import PageLayout from '@/components/PageLayout';
import {Link} from '@/i18n/navigation';

export default function SignUp() {
  const locale = useLocale();
  const t = useTranslations('SignUp');
  const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage(undefined);

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setMessage(t('fillAllFields'));
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage(t('passwordMismatch'));
      setIsLoading(false);
      return;
    }

    // Simulate API call - replace with actual signup logic
    setTimeout(() => {
      setMessage(t('signupSuccess'));
      setIsLoading(false);
    }, 1000);
  }

  return (
    <PageLayout title={t('title')}>
      <form
        onSubmit={onSubmit}
        style={{display: 'flex', flexDirection: 'column', gap: 16, width: 300}}
      >
        <label style={{display: 'flex', flexDirection: 'column', gap: 4}}>
          <span>{t('username')}</span>
          <input 
            name="username" 
            type="text" 
            required
            style={{
              padding: '8px 12px',
              border: '1px solid #e5e5e5',
              borderRadius: '4px'
            }}
          />
        </label>
        
        <label style={{display: 'flex', flexDirection: 'column', gap: 4}}>
          <span>{t('email')}</span>
          <input 
            name="email" 
            type="email" 
            required
            style={{
              padding: '8px 12px',
              border: '1px solid #e5e5e5',
              borderRadius: '4px'
            }}
          />
        </label>
        
        <label style={{display: 'flex', flexDirection: 'column', gap: 4}}>
          <span>{t('password')}</span>
          <input 
            name="password" 
            type="password" 
            required
            style={{
              padding: '8px 12px',
              border: '1px solid #e5e5e5',
              borderRadius: '4px'
            }}
          />
        </label>
        
        <label style={{display: 'flex', flexDirection: 'column', gap: 4}}>
          <span>{t('confirmPassword')}</span>
          <input 
            name="confirmPassword" 
            type="password" 
            required
            style={{
              padding: '8px 12px',
              border: '1px solid #e5e5e5',
              borderRadius: '4px'
            }}
          />
        </label>
        
        {message && (
          <p style={{
            color: message.includes('success') ? '#0070f3' : '#e00',
            fontSize: '14px'
          }}>
            {message}
          </p>
        )}
        
        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            padding: '12px 16px',
            backgroundColor: isLoading ? '#ccc' : '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? t('signingUp') : t('submit')}
        </button>
      </form>
      
      <div style={{marginTop: 24}}>
        <p>{t('alreadyHaveAccount')}</p>
        <Link 
          href="/login"
          style={{
            color: '#0070f3',
            textDecoration: 'none'
          }}
        >
          {t('signInHere')}
        </Link>
      </div>
    </PageLayout>
  );
}