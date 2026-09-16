import { Ph } from "@/components/landing/Bits";

const SCHOOLS = [
  "Cardinal Hayes High School",
  "Mount Saint Michael Academy",
  "Monsignor Scanlan High School",
  "St. Raymond High School for Boys",
  "St. Raymond High School for Girls",
  "The Academy of Mount St. Ursula",
  "Nazareth Regional High School",
  "Brooklyn Amity High School",
  "Christ the King High School",
  "Notre Dame Academy",
  "Abraham Joshua Heschel School",
  "The Leffell School",
  "Archbishop Stepinac High School",
  "Regina High School",
];

export default function Network() {
  return (
    <section className="band band--light" data-testid="network-section">
      <div className="container">
        <p className="eyebrow">The network</p>
        <h2 className="section-h2">
          Fourteen schools. Five boroughs. Two NBA markets.
        </h2>
        <ul className="school-grid">
          {SCHOOLS.map((school) => (
            <li key={school}>{school}</li>
          ))}
        </ul>
        <p className="note section-note">
          <Ph>
            [CONFIRM: enrollment and demographic composition per partner
            school.]
          </Ph>
        </p>
      </div>
    </section>
  );
}
