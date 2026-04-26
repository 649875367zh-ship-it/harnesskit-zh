import "./mascot.css";

interface MascotProps {
  size: number;
}

/** OpenClaw mascot - Claw motif */
export function OpenClawMascot({ size }: MascotProps) {
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
      {/* Claw shape */}
      <path
        d="M24 10 C18 10, 14 14, 14 20 C14 26, 18 32, 24 36"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 10 C30 10, 34 14, 34 20 C34 26, 30 32, 24 36"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Inner "O" */}
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fill="#f59e0b"
        fontSize="14"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        O
      </text>
    </svg>
  );
}
