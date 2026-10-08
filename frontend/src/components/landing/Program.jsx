const STEPS = [
  "Scholas Citizenship",
  "Career Navigation",
  "Apprenticeship & certification",
  "Paid client sprint",
  "W-2, credential, portfolio, reference",
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
        <p className="intro program-intro">
          Career Pathways is a single pipeline, not a set of parallel programs.
          Everyone who enters the apprenticeship came through Scholas
          Citizenship first. We only apprentice young people we have already
          spent six days with, which is why our retention is not a hope but a
          consequence.
        </p>
        <div className="tracks">
          <div className="track-card" data-testid="track-01-card">
            <p className="track__tag">TRACK 01 · AGES 15–24 · 120 PARTICIPANTS</p>
            <h3>Scholas Citizenship</h3>
            <p>
              Our founding program, and it already runs in New York: the last
              city-wide edition brought together more than 80 students from 8
              New York high schools. It runs in two stages, and both serve
              young people the Foundation funds.
            </p>
            <p>
              <strong>
                Stage one — Guide training, ages 18–24, 20 participants.
              </strong>{" "}
              University-age young adults are trained in the Citizenship
              methodology: theoretical learning, structured reflection and
              supervised practice facilitating sessions with younger
              participants. They leave with facilitation experience, a
              supervisory reference, and the ability to run a room.
            </p>
            <p>
              <strong>
                Stage two — Immersion, ages 15–17, 100 participants.
              </strong>{" "}
              Students from different schools spend six days together, identify
              the problems that affect them daily, choose one by assembly vote,
              and build a concrete solution they present to local authorities
              on the final day. Youth unemployment is among the problems
              students have historically chosen.
            </p>
            <p className="track__close">
              Not a workshop about leadership. A team delivering a real project
              to a real audience under a hard deadline.
            </p>
          </div>
          <div className="track-card" data-testid="track-02-card">
            <p className="track__tag">TRACK 02 · AGES 16–24 · 25 SEATS</p>
            <h3>Digital Media Apprenticeship</h3>
            <p>
              Two cohorts per year. Fourteen weeks of instruction, then a
              three-week paid client sprint.
            </p>
            <ul>
              <li>
                Seats are open only to Scholas Citizenship participants —
                immersion students and guides. No separate recruitment, no cold
                applications.
              </li>
              <li>
                Social strategy, content production, video editing, brand
                voice, client communication
              </li>
              <li>Two proctored industry certification exams per apprentice</li>
              <li>
                Exit deliverable: a published portfolio of real client work
                with audience metrics
              </li>
            </ul>
          </div>
          <div className="track-card" data-testid="track-03-card">
            <p className="track__tag">TRACK 03 · AGES 15–24 · ALL PARTICIPANTS</p>
            <h3>Career Navigation</h3>
            <p>
              The connective layer that turns participation into employability.
            </p>
            <ul>
              <li>An individual career plan for every participant</li>
              <li>Résumé, LinkedIn and interview preparation</li>
              <li>
                Employer site visits and mock interviews with working
                professionals
              </li>
              <li>
                The invisible curriculum: professional email, invoicing,
                following up, negotiating pay
              </li>
              <li>Six-month follow-up on every participant</li>
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
