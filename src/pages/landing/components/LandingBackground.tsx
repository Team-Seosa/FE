const LandingBackground = () => (
  <div className="pointer-events-none absolute inset-0 z-0">
    <div className="absolute inset-0 animate-[uibowl-fadein_400ms_var(--ease-out-expo)_both] bg-bg-base" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(60vw 60vw at 30% 20%, rgba(99,102,241,0.12), transparent 70%), radial-gradient(50vw 50vw at 70% 65%, rgba(34,211,238,0.08), transparent 70%)",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
    <svg
      className="absolute inset-0 h-full w-full mix-blend-overlay opacity-[0.04]"
      aria-hidden
    >
      <filter id="uibowl-landing-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} />
      </filter>
      <rect width="100%" height="100%" filter="url(#uibowl-landing-noise)" />
    </svg>
  </div>
);

export default LandingBackground;
