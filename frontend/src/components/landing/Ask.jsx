const YEAR_ONE = [
  ["Program Manager, Career Pathways (0.75 FTE)", "$45,000"],
  ["Studio Facilitator (0.25 FTE)", "$15,000"],
];

const YEAR_ONE_DIRECT = [
  ["Apprentice wages: 25 × 24 hrs at $17.00/hr, plus payroll taxes", "$11,500"],
  ["Industry certifications: 50 vouchers, practice tests, retakes", "$6,500"],
  ["Employer engagement: mentors, site visits, mock interviews", "$5,000"],
  ["Participation supports: transit and meals", "$4,000"],
  ["Equipment, software and production licenses", "$4,000"],
  ["Evaluation, tracking and six-month follow-up", "$4,000"],
  ["Indirect (5%)", "$5,000"],
];

const YEAR_TWO = [
  ["Program Manager, Career Pathways (0.75 FTE)", "$45,000"],
  ["Studio Facilitator (0.25 FTE)", "$15,000"],
];

const YEAR_TWO_DIRECT = [
  ["Apprentice wages: 25 × 24 hrs at $17.00/hr", "$11,500"],
  ["Alumni peer facilitator wages: 5 × 40 hrs at $17.00/hr", "$4,000"],
  ["Industry certifications: 50 vouchers, practice tests, retakes", "$6,500"],
  ["Employer engagement: mentors, site visits, mock interviews", "$5,000"],
  ["Participation supports: transit and meals", "$4,000"],
  ["Equipment and software renewal", "$1,000"],
  ["Evaluation and twelve-month longitudinal follow-up", "$3,000"],
  ["Indirect (5%)", "$5,000"],
];

const BudgetTable = ({ title, staff, direct, total, testid }) => (
  <div className="budget-table">
    <p className="budget__title">{title}</p>
    <ul className="budget" data-testid={testid}>
      <li className="budget__group">Program delivery staff</li>
      {staff.map(([label, amount]) => (
        <li key={label}>
          <span>{label}</span>
          <span className="amt">{amount}</span>
        </li>
      ))}
      <li className="budget__group">Direct program costs</li>
      {direct.map(([label, amount]) => (
        <li key={label}>
          <span>{label}</span>
          <span className="amt">{amount}</span>
        </li>
      ))}
      <li className="total">
        <span>{total}</span>
        <span className="amt">$100,000</span>
      </li>
    </ul>
  </div>
);

export default function Ask() {
  return (
    <section className="band band--light" data-testid="ask-section">
      <div className="container ask-grid">
        <div>
          <p className="eyebrow">The ask</p>
          <h2 className="section-h2">
            <span className="ask-amt">$100,000</span> for year one.{" "}
            <span className="ask-amt">$200,000</span> to run the full two-year
            program.
          </h2>
          <p className="ask-text">
            We are requesting $100,000 for the first program year, with a second
            year of equal size to reach a second pair of cohorts. Each annual
            request represents roughly 12.5% of our projected annual operating
            budget. Year two is presented for planning purposes and would be
            subject to renewal.
          </p>
          <p className="ask-alt">
            Sixty percent funds program delivery staff. Our staff do not
            administer this from a distance — they teach it, and the continuity
            of relationship is the mechanism that makes it work.
          </p>
          <p className="ask-alt">
            Two-year totals: 120 young people served, 50 apprenticeships
            completed, 50 first W-2s issued, 80 industry certifications earned.
            Cost per participant served: $1,667.
          </p>
        </div>
        <div>
          <BudgetTable
            title="Year one · $100,000"
            staff={YEAR_ONE}
            direct={YEAR_ONE_DIRECT}
            total="Total, year one"
            testid="budget-year-one"
          />
          <BudgetTable
            title="Year two · $100,000 · subject to renewal"
            staff={YEAR_TWO}
            direct={YEAR_TWO_DIRECT}
            total="Total, year two"
            testid="budget-year-two"
          />
          <p className="note budget-note">
            Equipment is a year-one cost. Year two redirects it into paid
            alumni peer facilitators and longer-term outcome tracking.
          </p>
        </div>
      </div>
    </section>
  );
}
