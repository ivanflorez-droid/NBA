export const ArrowRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4 12h15" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const PlayIcon = () => (
  <svg
    width="52"
    height="52"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M8.5 5.8v12.4c0 .6.7 1 1.2.7l9.7-6.2c.5-.3.5-1 0-1.3L9.7 5.1c-.5-.3-1.2.1-1.2.7z" />
  </svg>
);

export const Ph = ({ children }) => <span className="ph">{children}</span>;
