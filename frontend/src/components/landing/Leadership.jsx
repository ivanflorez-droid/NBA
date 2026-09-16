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
              <Ph>[CONFIRM: two lines of bio]</Ph>
            </p>
          </div>
          <div className="lead-card">
            <h3>Manuel Deza</h3>
            <p className="lead-role">Program Facilitator</p>
            <p className="lead-bio">
              Psychology, University of Buenos Aires. Has implemented Scholas
              programs in thirteen countries across four continents.
            </p>
          </div>
          <div className="lead-card">
            <h3>Yasmin Jones</h3>
            <p className="lead-role">Project Manager, Scholas NY</p>
            <p className="lead-bio">
              Psychology, Penn State. Master&rsquo;s in Mental Health
              Counseling, Fordham. Former classroom teacher.
            </p>
          </div>
          <div className="lead-card">
            <h3>Jorge Valero</h3>
            <p className="lead-role">Program Facilitator</p>
            <p className="lead-bio">
              BFA, University of Florida. Jorge came through this program as a
              student in 2019. He now runs sessions in it.
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
