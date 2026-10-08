const STAFF = [
  ["Program Manager, Career Pathways (0.5 FTE)", "$27,000"],
  ["Scholas Facilitator — Citizenship and Career Navigation (0.4 FTE)", "$17,000"],
  [
    "Media Facilitator — apprenticeship instruction and certification preparation (0.4 FTE)",
    "$18,000",
  ],
];

const DIRECT = [
  ["Apprentice wages: 25 × 24 hrs at $17.00/hr, plus employer payroll taxes", "$11,500"],
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
            <span className="ask-amt">$100,000</span> to reach{" "}
            <span className="ask-amt">120</span> young people in New York and
            Brooklyn.
          </h2>
          <p className="ask-text">
            Roughly 12.5% of our projected annual operating budget. $833 per
            young person reached, $4,000 per apprentice completing the full
            pathway.
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
        </div>
      </div>
    </section>
  );
}
