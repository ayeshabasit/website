export default function SkillIcon() {
  return (
    <svg
      className="w-16 h-16"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="fill-current text-athenix-dark-green"
        width="64"
        height="64"
        rx="32"
      />
      <path
        className="stroke-current text-athenix-bright-green"
        d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
        strokeLinecap="square"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
      <path
        className="stroke-current text-athenix-light-green"
        d="M43 42h-9M43 37h-9"
        strokeLinecap="square"
        strokeWidth="2"
      />
    </svg>
  );
}
