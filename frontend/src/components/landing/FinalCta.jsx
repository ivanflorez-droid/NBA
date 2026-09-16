import { ArrowRight, Ph } from "@/components/landing/Bits";

export default function FinalCta() {
  return (
    <section className="band band--blue" data-testid="final-cta-section">
      <div className="container">
        <h2 className="cta-h2">Come see it.</h2>
        <p className="cta-text">
          Two hours, any school in our network, on short notice. There is a
          Communities in Motion session in the Bronx on{" "}
          <Ph>[CONFIRM: date]</Ph>.
        </p>
        <div className="btn-row">
          <a
            className="btn btn--solid"
            href="mailto:[CONFIRM EMAIL]"
            data-testid="cta-schedule-visit"
          >
            Schedule a site visit <ArrowRight />
          </a>
          <a
            className="btn btn--outline-light"
            href="#full-proposal"
            data-testid="cta-download-proposal"
          >
            Download the full proposal
          </a>
          <a
            className="btn btn--outline-light"
            href="mailto:[CONFIRM EMAIL]"
            data-testid="cta-contact-jimena"
          >
            Contact Jimena Florez
          </a>
        </div>
        <p className="note cta-note">
          Email buttons use <Ph>[CONFIRM EMAIL]</Ph> until the contact address
          is confirmed.
        </p>
      </div>
    </section>
  );
}
