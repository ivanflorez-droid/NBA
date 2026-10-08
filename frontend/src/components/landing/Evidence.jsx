import { Ph } from "@/components/landing/Bits";

const OUTCOMES = [
  "Increased sense of belonging",
  "Leadership skill development",
  "Program completion rate",
  "Social media internship completion",
];

const COMMITMENTS = [
  ["Young people reached, ages 15–24", "120"],
  ["Citizenship immersion participants", "100"],
  ["Citizenship guides trained", "20"],
  ["Apprentices drawn from Citizenship", "100%"],
  ["Apprenticeship completions", "25"],
  ["Apprentices finishing with paid work and a W-2", "25"],
  ["Certification exams sat", "50"],
  ["Total certifications earned", "40"],
  ["Published client portfolios", "100% of completers"],
  ["Skills rubric completed at intake and exit", "100%"],
  ["Measurable gain on 3+ of 7 skill dimensions", "75%"],
  ["Professional introductions made", "25"],
  ["Six-month follow-up with a documented next step", "85%"],
];

export default function Evidence() {
  return (
    <section className="band band--light" data-testid="evidence-section">
      <div className="container">
        <p className="eyebrow">Evidence</p>
        <h2 className="section-h2">What we measure, and how.</h2>
        <p className="intro">
          Every figure below carries its instrument, sample size and period. A
          percentage without a source is not evidence.
        </p>
        <table className="rtable rtable--evid">
          <thead>
            <tr>
              <th scope="col">Outcome to date</th>
              <th scope="col">Result</th>
              <th scope="col">Instrument</th>
              <th scope="col">n</th>
              <th scope="col">Period</th>
            </tr>
          </thead>
          <tbody>
            {OUTCOMES.map((outcome) => (
              <tr key={outcome}>
                <td>{outcome}</td>
                <td data-label="Result">
                  <Ph>[CONFIRM]</Ph>
                </td>
                <td data-label="Instrument">
                  <Ph>[CONFIRM]</Ph>
                </td>
                <td data-label="n">
                  <Ph>[CONFIRM]</Ph>
                </td>
                <td data-label="Period">
                  <Ph>[CONFIRM]</Ph>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="commit-panel">
          <div>
            <h3>What we will commit to in the grant year</h3>
            <p className="body-copy">
              These are contractual. Mid-year and final impact reports are
              submitted for every grant we receive, and every participant is
              tracked for six months after exit.
            </p>
            <p className="note">
              <Ph>[CONFIRM with the Executive Director before publishing.]</Ph>
            </p>
          </div>
          <div>
            <ul className="commit-list" data-testid="commitment-list">
              {COMMITMENTS.map(([label, value]) => (
                <li key={label}>
                  <span>{label}</span>
                  <span className="val">{value}</span>
                </li>
              ))}
            </ul>
            <p className="commit-close">
              We are a delivery organization, not a staffing agency, and we do
              not report a job-placement figure we cannot control.
              &ldquo;Documented next step&rdquo; means an application
              submitted, an interview secured, an enrolment completed or a
              referral made — activity we can verify rather than a number we
              would have to hope for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
