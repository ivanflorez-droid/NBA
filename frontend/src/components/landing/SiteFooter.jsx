import { Ph } from "@/components/landing/Bits";

export default function SiteFooter() {
  return (
    <footer className="band--ink footer" data-testid="site-footer">
      <div className="container footer__row">
        <p>
          Scholas USA is a registered 501(c)(3). EIN <Ph>[CONFIRM]</Ph>.
          Contributions are tax-deductible to the extent allowed by law.
        </p>
        <p className="footer__right">
          Prepared for the NBA Foundation · Fall 2026 cycle
        </p>
      </div>
    </footer>
  );
}
