import { Ph } from "@/components/landing/Bits";

const OUTCOMES = [
  "Increased sense of belonging",
  "Leadership skill development",
  "Program completion rate",
  "Social media internship completion",
];

const COMMITMENTS = [
  ["Young people served, ages 14–24", "60"],
  ["Paid internship completions", "25"],
  ["Completion rate", "80%"],
  ["Studio completers with a published portfolio", "100%"],
  ["Individual career plans completed", "100%"],
  ["Placed in work, internship or post-secondary within 6 months", "60%"],
  ["Six-month follow-up contact rate", "85%"],
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
          <ul className="commit-list" data-testid="commitment-list">
            {COMMITMENTS.map(([label, value]) => (
              <li key={label}>
                <span>{label}</span>
                <span className="val">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
