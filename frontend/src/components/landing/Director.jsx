import { Ph, PlayIcon } from "@/components/landing/Bits";

export default function Director() {
  return (
    <section
      className="band band--light"
      id="director"
      data-testid="director-section"
    >
      <div className="container dir-grid">
        <div>
          <p className="eyebrow">From our Executive Director</p>
          <h2 className="section-h2">Why New York, and why now.</h2>
          <p className="dir-quote">
            “I would rather you see it than read about it. Come to a session in
            the Bronx. Two hours, any school in our network. You will know
            within twenty minutes whether this is worth funding.”
          </p>
          <p className="dir-attr">
            <strong>María Jimena Florez</strong>, President &amp; Executive
            Director, Scholas USA
          </p>
          <p className="note dir-note">
            <Ph>
              [90–120 second video. Shoot in a school or during a session, not
              an office. English, subtitled.]
            </Ph>
          </p>
        </div>
        <figure>
          <div
            className="dashed-box dashed-box--video"
            data-testid="director-video-placeholder"
          >
            <PlayIcon />
            <span>[EXECUTIVE DIRECTOR VIDEO]</span>
          </div>
          <figcaption className="media-caption" style={{ color: "var(--caption)" }}>
            Poster frame should show her mid-sentence with students visible
            behind her.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
