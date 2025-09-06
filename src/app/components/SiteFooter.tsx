import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookF, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="[font-family:var(--font-body)] text-sm text-neutral-600">
          © {year} Phoenix Trade Partners. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/phoenixtradepartners/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@phoenixtradepartners" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="Follow us on TikTok"
            >
              <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61579939817033" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
            </a>
            <a 
              href="https://x.com/PhoenixTradeCo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="Follow us on X"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/phoenix-trade-partners/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="Connect with us on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
