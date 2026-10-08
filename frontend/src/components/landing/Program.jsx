const STEPS = [
  "Scholas Citizenship",
  "Apprenticeship instruction",
  "Industry certification",
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
        <p className="program-sub">Three stages. One pipeline. Twelve months.</p>
        <p className="intro program-intro">
          One cohort of 25, one pipeline, twelve months. Everyone who enters
          the apprenticeship came through Scholas Citizenship first. We only
          apprentice young people we have already spent six days with, which is
          why our retention is not a hope but a consequence.
        </p>
        <div className="tracks">
          <div className="track-card" data-testid="stage-01-card">
            <p className="track__tag">STAGE 01 · MARCH · AGES 15–24</p>
            <h3>Scholas Citizenship</h3>
            <p>
              Our founding program, and it already runs in New York: the last
              city-wide edition brought together more than 80 students from 8
              New York high schools. It runs in two parts.
            </p>
            <p>
              <strong>Guide training, ages 18–24.</strong> University-age young
              adults are trained in the Citizenship methodology — theoretical
              learning, structured reflection and supervised practice
              facilitating sessions. They leave with facilitation experience, a
              supervisory reference, and the ability to run a room.
            </p>
            <p>
              <strong>Immersion, ages 15–17.</strong> Students from the five
              partner schools spend six days together, identify the problems
              that affect them daily, choose one by assembly vote, and build a
              solution they present to local authorities on the final day.
              Youth unemployment is among the problems students have
              historically chosen.
            </p>
            <p className="track__close">
              This edition is the entry point for the apprenticeship.
            </p>
          </div>
          <div className="track-card" data-testid="stage-02-card">
            <p className="track__tag">
              STAGE 02 · APRIL–JULY · AGES 16–24 · 25 PARTICIPANTS
            </p>
            <h3>Digital Media Apprenticeship</h3>
            <p>
              Selected by application and interview from Citizenship
              participants only. No separate recruitment funnel, no cold
              applications.
            </p>
            <ul>
              <li>
                Weeks 1–13: social strategy, content production, video editing,
                brand voice, client communication
              </li>
              <li>Two proctored industry certification exams per apprentice</li>
              <li>
                July: a four-week paid client sprint delivering a real campaign
                for a real community client
              </li>
            </ul>
          </div>
          <div className="track-card" data-testid="stage-03-card">
            <p className="track__tag">
              STAGE 03 · MARCH–FEBRUARY · ALL PARTICIPANTS
            </p>
            <h3>Career Navigation</h3>
            <ul>
              <li>An individual career plan for every apprentice</li>
              <li>Résumé, LinkedIn and interview preparation</li>
              <li>
                Employer site visits and mock interviews with working
                professionals
              </li>
              <li>
                The invisible curriculum: professional email, invoicing,
                following up, negotiating pay
              </li>
              <li>Follow-up at three and six months after the sprint</li>
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
