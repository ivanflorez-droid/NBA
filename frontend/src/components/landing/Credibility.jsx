import { Ph } from "@/components/landing/Bits";

export default function Credibility() {
  return (
    <section
      className="band band--ink band--bar"
      aria-label="Organizational credibility"
      data-testid="credibility-section"
    >
      <div className="container">
        <div className="cred__grid">
          <div className="cred__item">
            <p className="cred__lead">Founded by Pope Francis, 2013</p>
            <p className="cred__sub">Operating under Vatican guidance</p>
          </div>
          <div className="cred__item">
            <p className="cred__lead">
              501(c)(3) · EIN <Ph>[CONFIRM EIN]</Ph>
            </p>
            <p className="cred__sub">Current IRS Form 990 on file</p>
          </div>
          <div className="cred__item">
            <p className="cred__lead">Archdiocese of New York</p>
            <p className="cred__sub">Official program partner</p>
          </div>
          <div className="cred__item">
            <p className="cred__lead">14 partner high schools</p>
            <p className="cred__sub">All five boroughs and Westchester</p>
          </div>
          <div className="cred__item">
            <p className="cred__lead">Free to every school</p>
            <p className="cred__sub">No cost to students or families</p>
          </div>
        </div>
      </div>
    </section>
  );
}
