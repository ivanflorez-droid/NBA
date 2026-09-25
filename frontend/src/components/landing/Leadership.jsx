import { Ph } from "@/components/landing/Bits";

export default function Leadership() {
  return (
    <section className="band band--warm" data-testid="leadership-section">
      <div className="container">
        <p className="eyebrow">Who delivers this</p>
        <h2 className="section-h2">The team already on the ground.</h2>
        <div className="lead-grid">
          <div className="lead-card">
            <h3>María Jimena Florez</h3>
            <p className="lead-role">President &amp; Executive Director</p>
            <p className="lead-bio">
              <Ph>[Bio, two lines]</Ph>
            </p>
          </div>
          <div className="lead-card">
            <h3>The Scholas Internship Team</h3>
            <p className="lead-role">
              Facilitation and project management, New York
            </p>
            <p className="lead-bio">
              Credentials in psychology, mental health counseling, education and
              the creative professions, with Scholas implementation experience
              across four continents. <Ph>[N]</Ph> years inside our partner
              schools, which means our facilitators know participating students
              by name before the program begins.
            </p>
            <div className="lead-divider" aria-hidden="true" />
            <p className="lead-bio">
              One member of the team entered Scholas as a student participant
              and now facilitates the program that formed them. The ladder
              already exists. Career Pathways widens it.
            </p>
          </div>
        </div>
        <p className="note section-note">
          <Ph>
            [CONFIRM: who leads Career Pathways. If it is a new hire, say so
            with the role profile.]
          </Ph>
        </p>
      </div>
    </section>
  );
}
