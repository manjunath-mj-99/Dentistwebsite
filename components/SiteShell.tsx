import {Navbar} from './Navbar';import {Footer} from './Footer';import {WhatsAppButton} from './WhatsAppButton';
export function SiteShell({children}:{children:React.ReactNode}){return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar/><main id="main-content">{children}</main><Footer/><WhatsAppButton/></>}
