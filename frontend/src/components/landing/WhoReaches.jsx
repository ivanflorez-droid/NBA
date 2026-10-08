import { Ph } from "@/components/landing/Bits";

const REACH_STATS = [
  ["Apprentices", "25"],
  ["Ages", "16–24"],
  ["Black youth", "[%]"],
  ["Latino youth", "[%]"],
  ["Cost to participants", "$0"],
];

export default function WhoReaches() {
  return (
    <section className="band band--light" data-testid="reach-section">
      <div className="container">
        <p className="eyebrow">Who this reaches</p>
        <h2 className="section-h2">
          Twenty-five young people, five schools, two boroughs.
        </h2>
        <p className="reach-schools" data-testid="reach-schools">
          Cardinal Hayes (Bronx) · Mount Saint Michael Academy (Bronx) ·
          Monsignor Scanlan (Bronx) · St. Raymond (Bronx) · Nazareth Regional
          (Brooklyn)
        </p>
        <p className="intro" style={{ marginTop: "22px" }}>
          These five schools in our network serve predominantly Black and
          Afro-Caribbean communities, in the two boroughs where youth
          unemployment is highest. Participation is open to any student at
          those schools. We are describing the community we serve rather than
          setting a demographic requirement.
        </p>
        <ul className="reach-stats" data-testid="reach-stats">
          {REACH_STATS.map(([label, value]) => (
            <li key={label}>
              <span className="rs-label">{label}</span>
              <span className="rs-val">
                {value.startsWith("[") ? <Ph>{value}</Ph> : value}
              </span>
            </li>
          ))}
        </ul>
        <p className="note section-note">
          Scholas works with 14 schools across all five boroughs and
          Westchester; Career Pathways recruits from five of them.
        </p>
      </div>
    </section>
  );
}
