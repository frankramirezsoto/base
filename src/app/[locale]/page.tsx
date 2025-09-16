import {getServerSession} from 'next-auth';
import auth from '@/auth';
import Index from './Index';
import '../globals.css'; 

export default async function IndexPage() {
  const session = await getServerSession(auth);
  return <Index session={session} />;
}
