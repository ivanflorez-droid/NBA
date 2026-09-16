import { Ph } from "@/components/landing/Bits";

export default function Problem() {
  return (
    <section className="band band--warm" data-testid="problem-section">
      <div className="container">
        <p className="eyebrow">The reality in the Bronx and Brooklyn</p>
        <h2 className="section-h2">Talent without a door.</h2>
        <div className="prob-grid">
          <div className="prob-card">
            <p className="prob__stat">
              <Ph>[STAT]</Ph>
            </p>
            <p className="prob__label">Disconnected youth</p>
            <p className="prob__desc">
              Young people ages 16–24 in the Bronx and Brooklyn who are neither
              in school nor working.
            </p>
            <p className="prob__src">
              <Ph>
                [SOURCE: Measure of America or NYC Center for an Urban Future —
                cite year and geography]
              </Ph>
            </p>
          </div>
          <div className="prob-card">
            <p className="prob__stat">
              <Ph>[STAT]</Ph>
            </p>
            <p className="prob__label">The employment gap</p>
            <p className="prob__desc">
              Unemployment among young Black New Yorkers compared with the
              citywide youth average.
            </p>
            <p className="prob__src">
              <Ph>[SOURCE: NYS Department of Labor or BLS — cite year]</Ph>
            </p>
          </div>
          <div className="prob-card">
            <p className="prob__stat">
              <Ph>[STAT]</Ph>
            </p>
            <p className="prob__label">The network gap</p>
            <p className="prob__desc">
              Students in our own network who do not personally know anyone
              working in the industry they want to enter.
            </p>
            <p className="prob__src">
              <Ph>[SOURCE: Scholas NY student survey]</Ph>
            </p>
          </div>
        </div>
        <p className="pull-quote">
          The programs built to close this gap lose young people at the door.
          Retention, not curriculum, is the bottleneck. That is where years
          inside these schools change the math.
        </p>
      </div>
    </section>
  );
}
