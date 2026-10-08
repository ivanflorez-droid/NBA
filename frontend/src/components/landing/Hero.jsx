import { ArrowRight } from "@/components/landing/Bits";

export default function Hero() {
  return (
    <section className="band band--blue band--hero" data-testid="hero-section">
      <div className="container">
        <div className="hero__top">
          <span className="wordmark">SCHOLAS USA</span>
          <p className="eyebrow hero__eyebrow">
            Prepared for the NBA Foundation · New York &amp; Brooklyn Markets
          </p>
        </div>
        <div className="rule rule--dark" aria-hidden="true" />
        <div className="hero__grid">
          <div>
            <h1>Trust is the missing infrastructure in youth employment.</h1>
            <p className="hero__sub">
              Scholas NY Career Pathways turns years of trusted relationships
              inside 14 New York City high schools into certified skills,
              published work, and a first paycheck for 120 young people in the
              Bronx and Brooklyn.
            </p>
            <div className="btn-row">
              <a
                className="btn btn--solid"
                href="#program"
                data-testid="hero-cta-program"
              >
                See the program model <ArrowRight />
              </a>
              <a
                className="btn btn--outline-light"
                href="#director"
                data-testid="hero-cta-director"
              >
                Hear from our Executive Director
              </a>
            </div>
          </div>
          <figure className="hero__media">
            <div
              className="dashed-box dashed-box--dark"
              data-testid="hero-photo-placeholder"
            >
              <span>[HERO PHOTO]</span>
            </div>
            <figcaption className="media-caption">
              Communities in Motion session, Bronx or Brooklyn partner school.
              Horizontal, unfiltered, students visible. Signed image release
              required.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
