import { Ph } from "@/components/landing/Bits";

const STEPS = [
  "Communities in Motion",
  "Scholas Club",
  "Career Navigation",
  "Paid studio internship",
  "Job, internship or post-secondary placement",
];

export default function Program() {
  return (
    <section
      className="band band--blue"
      id="program"
      data-testid="program-section"
    >
      <div className="container">
        <p className="eyebrow">The program</p>
        <h2 className="section-h2">Scholas NY Career Pathways</h2>
        <p className="program-sub">Three tracks. One pipeline. Twelve months.</p>
        <div className="tracks">
          <div className="track-card" data-testid="track-01-card">
            <p className="track__tag">TRACK 01 · AGES 16–21</p>
            <h3>Digital Media &amp; Content Studio</h3>
            <p>
              Scales our existing social media internship from 4–5 seats to 25
              paid seats a year across two cohorts. Participants produce real
              work for Scholas and community partners, with a stipend.
            </p>
            <ul>
              <li>25 paid interns per year, two cohorts</li>
              <li>
                14 weeks per cohort, <Ph>[CONFIRM: hours per week]</Ph>
              </li>
              <li>
                Social strategy, content production, video editing, brand
                voice, client communication
              </li>
              <li>
                Exit deliverable: a portfolio of published work with real
                audience metrics
              </li>
              <li>
                One industry mentor matched per participant —{" "}
                <Ph>[CONFIRM: 3 committed mentors by name]</Ph>
              </li>
            </ul>
          </div>
          <div className="track-card" data-testid="track-02-card">
            <p className="track__tag">TRACK 02 · AGES 18–24</p>
            <h3>Fratelli Tutti Leadership School</h3>
            <p>
              Our existing young-adult program, positioned as the
              durable-skills layer employers say they cannot find:
              communication, conflict resolution, collaboration, speaking with
              authority in a room.
            </p>
            <ul>
              <li>
                <Ph>[CONFIRM: cohort size]</Ph>
              </li>
              <li>
                <Ph>[CONFIRM: duration and meeting frequency]</Ph>
              </li>
              <li>
                Community-based curriculum built on practical learning and
                dialogue
              </li>
            </ul>
          </div>
          <div className="track-card" data-testid="track-03-card">
            <p className="track__tag">TRACK 03 · AGES 14–24</p>
            <h3>Career Navigation</h3>
            <p>
              The connective layer that turns participation into placement.
              Every young person in either track gets it.
            </p>
            <ul>
              <li>An individual career plan for every participant</li>
              <li>Résumé, LinkedIn and interview preparation</li>
              <li>
                Employer site visits — <Ph>[CONFIRM: 2–3 host employers]</Ph>
              </li>
              <li>Post-secondary and certification navigation</li>
              <li>Six-month follow-up on every participant after exit</li>
            </ul>
          </div>
        </div>
        <div className="path-wrap">
          <p className="path-label">The path a young person takes</p>
          <ol className="path">
            {STEPS.map((step, i) => (
              <li key={i}>
                <span className="path__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="program-close">
            Entry through belonging. Exit through employment.
          </p>
        </div>
      </div>
    </section>
  );
}
