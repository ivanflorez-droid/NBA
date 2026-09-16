import { Ph } from "@/components/landing/Bits";

export default function Testimonials() {
  return (
    <section className="band band--ink" data-testid="testimonials-section">
      <div className="container">
        <p className="eyebrow">In their words</p>
        <h2 className="section-h2">Four perspectives on the same program.</h2>
        <p className="intro">
          A student voice alone reads as marketing. A student, a parent, a
          principal and an institutional partner read as evidence.
        </p>
        <div className="testi-grid">
          <div className="testi-card">
            <p className="testi__cat">THE STUDENT</p>
            <p className="testi__quote">
              “
              <Ph>
                [QUOTE TO RECORD — what they could not do before, and can do
                now]
              </Ph>
              ”
            </p>
            <p className="testi__attr">
              <Ph>[NAME]</Ph>, <Ph>[AGE]</Ph>
              <br />
              Digital Media Studio intern, <Ph>[SCHOOL]</Ph>
            </p>
          </div>
          <div className="testi-card">
            <p className="testi__cat">THE PRINCIPAL</p>
            <p className="testi__quote">
              “
              <Ph>
                [QUOTE TO RECORD — what Scholas facilitators do that their own
                staff cannot replicate]
              </Ph>
              ”
            </p>
            <p className="testi__attr">
              <Ph>[NAME]</Ph>
              <br />
              Principal, <Ph>[SCHOOL]</Ph>
            </p>
          </div>
          <div className="testi-card">
            <p className="testi__cat">THE PARENT</p>
            <p className="testi__quote">
              “
              <Ph>
                [QUOTE TO RECORD — what changed at home, and what their child
                talks about now]
              </Ph>
              ”
            </p>
            <p className="testi__attr">
              <Ph>[NAME]</Ph>
              <br />
              Parent, <Ph>[SCHOOL]</Ph>
            </p>
          </div>
          <div className="testi-card">
            <p className="testi__cat">THE INSTITUTIONAL PARTNER</p>
            <p className="testi__quote">
              “<Ph>[QUOTE TO RECORD — why they keep the partnership]</Ph>”
            </p>
            <p className="testi__attr">
              <Ph>[NAME]</Ph>, <Ph>[TITLE]</Ph>
              <br />
              <Ph>[ORGANIZATION]</Ph>
            </p>
          </div>
        </div>
        <p className="note testi-foot">
          Production notes: vertical video, 60–90 seconds, burned-in subtitles.
          Signed image and voice release required for every participant, with
          parental consent for anyone under 18.
        </p>
      </div>
    </section>
  );
}
