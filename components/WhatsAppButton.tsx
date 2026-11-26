import {site} from '@/config/site';
import {MessageCircle} from 'lucide-react';
export function WhatsAppButton(){return <a className="whatsapp-float" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Book an appointment on WhatsApp" title="Book an appointment"><MessageCircle/><span>Book an appointment</span></a>}
