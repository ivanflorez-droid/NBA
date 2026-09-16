import { Ph } from "@/components/landing/Bits";

export default function Accountability() {
  return (
    <section className="band band--blue" data-testid="accountability-section">
      <div className="container">
        <p className="eyebrow">Accountability</p>
        <h2 className="section-h2">Open books, before you ask.</h2>
        <div className="acct-grid">
          <div className="acct-card">
            <h3>IRS Form 990</h3>
            <p>
              Most recent fiscal year, available on request and uploaded with
              our application.
            </p>
          </div>
          <div className="acct-card">
            <h3>Organizational budget</h3>
            <p>
              FY2026: $700,000. FY2025: $1,100,000.{" "}
              <Ph>[CONFIRM: the one-sentence explanation of the change.]</Ph>
            </p>
          </div>
          <div className="acct-card">
            <h3>Program budget</h3>
            <p>
              Career Pathways, itemized below and matching our application line
              for line.
            </p>
          </div>
          <div className="acct-card">
            <h3>Board of Directors</h3>
            <p>
              <Ph>[CONFIRM: full list with affiliations]</Ph>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
