const MONTHS = [
  [
    "March 2027",
    "Three program staff in post. Mentors confirmed. Certiport testing arrangements finalized with partner schools. Client roster confirmed. Recruitment across the five Bronx and Brooklyn schools. Payroll, workers' compensation and disability coverage established.",
  ],
  [
    "Late March",
    "Scholas Citizenship: guide training, then the six-day immersion. Skills rubric at intake.",
  ],
  [
    "April",
    "Cohort of 25 selected from Citizenship participants. Working papers filed for every apprentice under 18. Apprenticeship weeks 1–4. Career Navigation opens.",
  ],
  [
    "May",
    "Weeks 5–8. Employer site visits and mock interviews. Individual career plans completed.",
  ],
  [
    "June",
    "Weeks 9–13. Adobe and Meta certification exams in the final two weeks.",
  ],
  [
    "July",
    "Paid client sprint. Apprentices onboarded as Scholas employees. 40 paid hours each. Campaigns delivered, portfolios published.",
  ],
  [
    "August",
    "Exit interviews, reference letters, mentor introductions, exit rubrics. Mid-year report.",
  ],
  ["September", "Career Navigation continues. Certification retakes."],
  ["October", "Three-month follow-up with every apprentice."],
  [
    "November–December",
    "Alumni peer facilitation at the next Citizenship session. Portfolio updates.",
  ],
  ["January 2028", "Six-month follow-up. W-2 forms issued to all 25."],
  [
    "February 2028",
    "Final report. Renewal case prepared on the strength of the results.",
  ],
];

export default function Calendar() {
  return (
    <section className="band band--warm" data-testid="calendar-section">
      <div className="container">
        <p className="eyebrow">The year, month by month</p>
        <h2 className="section-h2">March 2027 to February 2028.</h2>
        <table className="rtable rtable--cal" data-testid="calendar-table">
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Activity</th>
            </tr>
          </thead>
          <tbody>
            {MONTHS.map(([month, activity]) => (
              <tr key={month}>
                <td>{month}</td>
                <td data-label="Activity">{activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
