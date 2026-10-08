const STAFF = [
  ["Program Manager, Career Pathways (0.4 FTE)", "$22,000"],
  ["Scholas Facilitator — Citizenship and Career Navigation (0.4 FTE)", "$17,000"],
  [
    "Media Facilitator — apprenticeship instruction and certification preparation (0.35 FTE)",
    "$15,300",
  ],
];

const DIRECT = [
  [
    "Apprentice wages and employer costs: 25 × 40 hrs at $17.00/hr, plus payroll taxes, workers' compensation and disability insurance",
    "$19,200",
  ],
  ["Industry certifications: 50 exam vouchers, practice tests, retake reserve", "$6,500"],
  ["Employer engagement: mentor stipends, site visits, mock interviews", "$4,000"],
  ["Participation supports: transit and meals", "$4,000"],
  ["Equipment, software and production licenses", "$3,500"],
  ["Evaluation: skills rubric, tracking and six-month follow-up", "$3,500"],
  ["Indirect (5%)", "$5,000"],
];

export default function Ask() {
  return (
    <section className="band band--light" data-testid="ask-section">
      <div className="container ask-grid">
        <div>
          <p className="eyebrow">The ask</p>
          <h2 className="section-h2">
            <span className="ask-amt">$100,000</span> to put{" "}
            <span className="ask-amt">25</span> young people through the full
            pathway.
          </h2>
          <p className="ask-text">
            Roughly 12.5% of our projected annual operating budget. $4,000 per
            apprentice. At that figure this is a depth program, not a reach
            program — a semester at a New York community college costs roughly
            the same and ends with credits. This ends with a credential
            recognized by New York State, a published portfolio, a professional
            reference, an employment record and a paycheck.
          </p>
          <p className="ask-alt">
            This is a single-year request. If we meet the commitments above, we
            would welcome the chance to apply for renewal — and we would rather
            make that case on the strength of our final report than in advance
            of it.
          </p>
        </div>
        <div>
          <ul className="budget" data-testid="budget-table">
            <li className="budget__group">Program delivery staff</li>
            {STAFF.map(([label, amount]) => (
              <li key={label}>
                <span>{label}</span>
                <span className="amt">{amount}</span>
              </li>
            ))}
            <li className="budget__group">Direct program costs</li>
            {DIRECT.map(([label, amount]) => (
              <li key={label}>
                <span>{label}</span>
                <span className="amt">{amount}</span>
              </li>
            ))}
            <li className="total">
              <span>Total request</span>
              <span className="amt">$100,000</span>
            </li>
          </ul>
          <p className="note budget-note">
            Staff costs are 54% of this request. $19,200 goes directly into
            wages and $6,500 into credentials the apprentices keep.
          </p>
        </div>
      </div>
    </section>
  );
}
