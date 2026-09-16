const ITEMS = [
  "We are in 14 high schools across all five boroughs and Westchester, at no cost to schools or students.",
  "Our facilitators know these students by name before any career conversation begins.",
  "Our network is interfaith and intercultural by design — Catholic, Jewish and Muslim schools work side by side.",
  "Families are engaged through a dedicated parent portal and consent process, not treated as an afterthought.",
  "Our methodology was built and tested across Argentina, Colombia, Peru, Haiti, Mozambique, Italy and Iraq before it arrived in New York.",
];

export default function Advantage() {
  return (
    <section className="band band--light" data-testid="advantage-section">
      <div className="container split">
        <div>
          <p className="eyebrow">Our unfair advantage</p>
          <h2 className="section-h2">We are already inside the building.</h2>
          <p className="intro">
            Career Pathways is not a new program looking for participants. It is
            a career route added to relationships that already exist.
          </p>
        </div>
        <ol className="adv-list">
          {ITEMS.map((text, i) => (
            <li key={i}>
              <span className="adv__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
