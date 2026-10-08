const STATS = [
  ["$17.00", "per hour, NYC minimum wage"],
  ["40", "paid hours per apprentice"],
  ["$680", "earned by each apprentice"],
  ["25", "first W-2s issued"],
];

const ROWS = [
  [
    "Zero opportunity cost.",
    "Instruction runs inside the school day, April through June. No one gives up paid hours to take part.",
  ],
  [
    "The sprint falls in July.",
    "Full availability, and the income matters most to their households in summer.",
  ],
  [
    "Credentials they keep.",
    "Issued in their own name, verifiable without calling us.",
  ],
];

export default function Pay() {
  return (
    <section className="band band--light" data-testid="pay-section">
      <div className="container">
        <p className="eyebrow">Scholas is the employer</p>
        <h2 className="section-h2">A real wage for real work, not a token stipend.</h2>
        <p className="intro">
          Every apprentice is hired onto the Scholas payroll with a W-4 and an
          I-9, covered by workers&rsquo; compensation and New York disability
          insurance, and issued a W-2 in January. For apprentices under 18,
          working papers are filed in April through the partner school they
          already attend. We are not handing young people off to employers we
          do not control. We are the employer.
        </p>
        <div className="pay-stats" data-testid="pay-stats">
          {STATS.map(([num, label]) => (
            <div className="pay-stat" key={label}>
              <p className="pay-stat__num">{num}</p>
              <p className="pay-stat__label">{label}</p>
            </div>
          ))}
        </div>
        <ul className="pay-rows">
          {ROWS.map(([lead, rest]) => (
            <li key={lead}>
              <strong>{lead}</strong> {rest}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
