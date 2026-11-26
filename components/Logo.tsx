import Link from 'next/link';
import { site } from '@/config/site';
export function Logo(){return <Link href="/" aria-label="Sanjeevni Dental home" className="wordmark">{site.wordmark}</Link>}
