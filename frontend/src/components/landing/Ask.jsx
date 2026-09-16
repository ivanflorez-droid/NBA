import { Ph } from "@/components/landing/Bits";

const LINES = [
  ["Program Manager, Career Pathways (0.5 FTE)", "$32,000"],
  ["Studio facilitator and industry mentors (contract)", "$14,000"],
  ["Youth stipends, 25 paid interns", "$15,000"],
  ["Equipment, software and production licenses", "$9,000"],
  ["Career navigation: employer visits, transit, certifications", "$7,000"],
  ["Evaluation, tracking and reporting", "$4,000"],
  ["Indirect (5%)", "$4,000"],
];

export default function Ask() {
  return (
    <section className="band band--light" data-testid="ask-section">
      <div className="container ask-grid">
        <div>
          <p className="eyebrow">The ask</p>
          <h2 className="section-h2">
            <span className="ask-amt">$85,000</span> to serve 60 young people in
            New York and Brooklyn.
          </h2>
          <p className="ask-text">
            Twenty-five of them in paid digital media internships that end with
            a real portfolio and a real placement. This request represents 12%
            of our FY2026 organizational budget.
          </p>
          <p className="ask-alt">
            A two-year structure at $170,000 is available if the Foundation
            prefers a multi-year commitment; year two funds a second cohort.
          </p>
        </div>
        <div>
          <ul className="budget" data-testid="budget-table">
            {LINES.map(([label, amount]) => (
              <li key={label}>
                <span>{label}</span>
                <span className="amt">{amount}</span>
              </li>
            ))}
            <li className="total">
              <span>Total request</span>
              <span className="amt">$85,000</span>
            </li>
          </ul>
          <p className="note budget-note">
            <Ph>
              [CONFIRM every line. This breakdown must match the program budget
              uploaded to the application to the dollar.]
            </Ph>
          </p>
        </div>
      </div>
    </section>
  );
}
