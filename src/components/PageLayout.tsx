import {ReactNode} from 'react';
import {SessionProvider} from 'next-auth/react';
import Navbar from './Navbar';
import LocaleSwitcher from './LocaleSwitcher';

type Props = {
  children?: ReactNode;
  title: string;
};

export default function PageLayout({children, title}: Props) {
  return (
    <SessionProvider>
      <div style={{minHeight: '100vh', backgroundColor: '#fafafa'}}>
        <Navbar />
        <div
          style={{
            padding: 24,
            fontFamily: 'system-ui, sans-serif',
            lineHeight: 1.5,
            boxSizing: 'border-box'
          }}
        >
          <div style={{maxWidth: 510}}>
            <h1>{title}</h1>
            {children}
            <div style={{marginTop: 24}}>
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}