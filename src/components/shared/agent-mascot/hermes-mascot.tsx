import "./mascot.css";

interface MascotProps {
  size: number;
}

/** Hermes Agent mascot - Hermes winged messenger motif */
export function HermesMascot({ size }: MascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="24" cy="24" r="22" fill="#1a1a2e" />
      {/* Hermes "H" with wings */}
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fill="#e94560"
        fontSize="22"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        H
      </text>
      {/* Small wing accent */}
      <path
        d="M34 14 C36 10, 40 8, 42 10 C40 12, 38 14, 36 16"
        fill="none"
        stroke="#e94560"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M34 16 C36 13, 39 12, 41 13 C39 15, 37 17, 35 19"
        fill="none"
        stroke="#e94560"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Left wing */}
      <path
        d="M14 14 C12 10, 8 8, 6 10 C8 12, 10 14, 12 16"
        fill="none"
        stroke="#e94560"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 16 C12 13, 9 12, 7 13 C9 15, 11 17, 13 19"
        fill="none"
        stroke="#e94560"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
