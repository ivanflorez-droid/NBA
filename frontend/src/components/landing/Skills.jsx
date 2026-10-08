const SKILLS = [
  [
    "Problem definition",
    "Identifying a community problem from evidence rather than assumption",
    "Understanding a brief before executing it",
  ],
  [
    "Collaboration across difference",
    "Mixed teams across Catholic, Jewish and Muslim schools",
    "Working with people unlike you",
  ],
  [
    "Public communication",
    "Presenting a solution to local authorities on the final day",
    "The interview, the client meeting",
  ],
  [
    "Delivery under deadline",
    "Building a viable solution in six days",
    "Shipping on time",
  ],
  [
    "Giving and receiving critique",
    "Assembly debate, voting, defending a proposal",
    "Taking feedback without falling apart",
  ],
  [
    "Self-knowledge and narrative",
    "The stage of working on one's own sense of self and meaning",
    "Explaining who you are in an interview",
  ],
  [
    "Facilitating and teaching others",
    "Alumni return as program guides and peer facilitators",
    "Leading, and onboarding the next person in",
  ],
];

export default function Skills() {
  return (
    <section className="band band--warm" data-testid="skills-section">
      <div className="container">
        <p className="eyebrow">What employers actually screen for</p>
        <h2 className="section-h2">
          Seven skills, taught deliberately and measured.
        </h2>
        <p className="intro">
          Employers rarely reject entry-level candidates for lack of technical
          skill. They reject them for the skills that are hardest to teach in a
          classroom and hardest to evidence on a résumé. Scholas Citizenship
          produces those skills as a by-product of its structure. Career
          Pathways names them, teaches them deliberately and measures them.
        </p>
        <table className="rtable rtable--skills">
          <thead>
            <tr>
              <th scope="col">Skill</th>
              <th scope="col">How the program produces it</th>
              <th scope="col">What it looks like at work</th>
            </tr>
          </thead>
          <tbody>
            {SKILLS.map(([skill, how, work]) => (
              <tr key={skill}>
                <td>{skill}</td>
                <td data-label="How the program produces it">{how}</td>
                <td data-label="What it looks like at work">{work}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="skills-close">
          <p>
            Every participant completes a seven-dimension skills rubric at
            intake and at exit — self-assessment alongside facilitator
            assessment. It converts &ldquo;leadership development&rdquo; into a
            reportable figure. We commit to a measurable gain on at least three
            of the seven dimensions for 75% of participants.
          </p>
        </div>
      </div>
    </section>
  );
}
