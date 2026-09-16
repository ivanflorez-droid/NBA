import { Ph } from "@/components/landing/Bits";

export default function WhyFit() {
  return (
    <section className="band band--light" data-testid="why-fit-section">
      <div className="container">
        <p className="eyebrow">Why this fits</p>
        <h2 className="section-h2">Built against your criteria, line by line.</h2>
        <table className="rtable rtable--fit">
          <thead>
            <tr>
              <th scope="col">NBA Foundation requirement</th>
              <th scope="col">Scholas NY Career Pathways</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>School-to-career employment opportunities</td>
              <td data-label="Scholas NY Career Pathways">
                A paid digital media studio, industry mentorship, a published
                portfolio per participant, and an employer placement pipeline.
              </td>
            </tr>
            <tr>
              <td>Under-resourced youth, ages 14–24</td>
              <td data-label="Scholas NY Career Pathways">
                <Ph>[CONFIRM: N]</Ph> young people served in FY2026 across our
                New York network — <Ph>[CONFIRM: %]</Ph> ages 14–24,{" "}
                <Ph>[CONFIRM: %]</Ph> Black youth, by school.
              </td>
            </tr>
            <tr>
              <td>Minimum 25 youth served annually</td>
              <td data-label="Scholas NY Career Pathways">
                60 young people in the Career Pathways cohort alone;{" "}
                <Ph>[CONFIRM: N]</Ph> across all New York programming.
              </td>
            </tr>
            <tr>
              <td>Programming inside an NBA market</td>
              <td data-label="Scholas NY Career Pathways">
                New York and Brooklyn. Schools in the Bronx, Brooklyn, Queens,
                Manhattan and Staten Island.
              </td>
            </tr>
            <tr>
              <td>Funded industry verticals</td>
              <td data-label="Scholas NY Career Pathways">
                Sports, Tech &amp; Media. Arts &amp; Entertainment. Education
                &amp; College Access.
              </td>
            </tr>
            <tr>
              <td>
                Systemically excluded from networks, opportunity and capital
              </td>
              <td data-label="Scholas NY Career Pathways">
                Our students attend tuition-assisted Catholic high schools in
                the Bronx and Brooklyn with no family or alumni pipeline into
                media, tech or creative industries. The ambition is already
                there. The introduction is not.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
