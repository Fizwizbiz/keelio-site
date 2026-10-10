export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand">
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 5v24M15 5v9l12-9M15 20l12 9"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 14v6"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      {!compact && (
        <span>
          keelio<span className="brand-dot">.</span>
        </span>
      )}
    </span>
  );
}
