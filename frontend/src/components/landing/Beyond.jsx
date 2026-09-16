import { Ph } from "@/components/landing/Bits";

export default function Beyond() {
  return (
    <section className="band band--warm" data-testid="beyond-section">
      <div className="container beyond-grid">
        <div>
          <p className="eyebrow">Beyond the grant</p>
          <h2 className="section-h2">What happens in year two.</h2>
        </div>
        <div className="beyond-copy">
          <p>
            <Ph>
              [CONFIRM: the diversification plan — which other institutional
              funders, what earned revenue, what support from the Archdiocese.]
            </Ph>
          </p>
          <p>
            The model is replicable without new infrastructure. The school
            network and the methodology already exist in Los Angeles, also an
            NBA market.
          </p>
          <p>
            All three tracks were designed to run inside the school day and
            inside partner school facilities, which keeps the marginal cost per
            young person low as cohorts grow.
          </p>
        </div>
      </div>
    </section>
  );
}
