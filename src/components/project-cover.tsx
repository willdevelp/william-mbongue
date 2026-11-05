import type { CoverVariant } from "@/lib/projects";

const labels: Record<CoverVariant, string> = {
  orb: "FIG. 01 — SYSTÈME",
  stack: "FIG. 02 — FLUX",
  grid: "FIG. 03 — PREUVE",
  wave: "FIG. 04 — MOUVEMENT",
  bars: "FIG. 05 — SIGNAL",
  nodes: "FIG. 06 — MODÈLE",
  pulse: "FIG. 07 — MESURE",
};

export function ProjectCover({
  variant,
  label,
  className,
}: {
  variant: CoverVariant;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface-2 ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 640 420"
        className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        role="img"
        aria-label={label ?? "Illustration abstraite du projet"}
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="640" height="420" fill="var(--surface-2)" />
        <GridLines />
        {variant === "orb" && <Orb />}
        {variant === "stack" && <Stack />}
        {variant === "grid" && <Grid />}
        {variant === "wave" && <Wave />}
        {variant === "bars" && <Bars />}
        {variant === "nodes" && <Nodes />}
        {variant === "pulse" && <Pulse />}

        <text
          x="28"
          y="392"
          fill="var(--subtle)"
          fontSize="8"
          letterSpacing="2.4"
          fontFamily="var(--font-instrument), sans-serif"
        >
          {labels[variant]}
        </text>
        <text
          x="612"
          y="40"
          fill="var(--subtle)"
          fontSize="8"
          letterSpacing="2.4"
          textAnchor="end"
          fontFamily="var(--font-instrument), sans-serif"
        >
          WM / 2026
        </text>
      </svg>
    </div>
  );
}

function GridLines() {
  return (
    <g stroke="var(--grid-line)" strokeWidth="1">
      {[80, 160, 240, 320, 400, 480, 560].map((x) => (
        <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="420" />
      ))}
      {[70, 140, 210, 280, 350].map((y) => (
        <line key={`h-${y}`} x1="0" y1={y} x2="640" y2={y} />
      ))}
    </g>
  );
}

function Orb() {
  return (
    <g>
      <circle cx="320" cy="210" r="150" fill="var(--accent-soft)" opacity="0.55" />
      <circle
        cx="320"
        cy="210"
        r="128"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.35"
      />
      <circle
        cx="320"
        cy="210"
        r="98"
        fill="none"
        stroke="var(--border-strong)"
        strokeDasharray="2 7"
      />
      <circle cx="320" cy="210" r="62" fill="var(--surface)" stroke="var(--border)" />
      <circle cx="320" cy="210" r="38" fill="var(--accent)" opacity="0.92" />
      <circle cx="320" cy="210" r="14" fill="var(--accent-contrast)" opacity="0.9" />
      <circle cx="448" cy="210" r="7" fill="var(--accent)" />
      <circle cx="210" cy="126" r="4" fill="var(--text)" opacity="0.55" />
      <circle cx="430" cy="90" r="3" fill="var(--subtle)" />
      <line
        x1="70"
        y1="350"
        x2="570"
        y2="70"
        stroke="var(--border-strong)"
        strokeDasharray="1 8"
        opacity="0.55"
      />
      <rect
        x="248"
        y="338"
        width="144"
        height="26"
        rx="13"
        fill="var(--surface)"
        stroke="var(--border)"
      />
      <circle cx="264" cy="351" r="3" fill="var(--accent)" />
      <text
        x="276"
        y="355"
        fill="var(--muted)"
        fontSize="8"
        letterSpacing="1.6"
        fontFamily="var(--font-instrument), sans-serif"
      >
        EVENTZA / SAAS
      </text>
    </g>
  );
}

function Stack() {
  return (
    <g>
      <rect
        x="190"
        y="132"
        width="270"
        height="158"
        rx="18"
        fill="var(--surface)"
        stroke="var(--border)"
        transform="rotate(-7 325 211)"
      />
      <rect
        x="206"
        y="112"
        width="270"
        height="158"
        rx="18"
        fill="var(--surface-3)"
        stroke="var(--border-strong)"
        transform="rotate(3 341 191)"
      />
      <rect x="222" y="96" width="270" height="158" rx="18" fill="var(--surface)" stroke="var(--border)" />
      <rect x="244" y="120" width="52" height="10" rx="5" fill="var(--accent)" />
      <rect x="244" y="144" width="174" height="6" rx="3" fill="var(--border-strong)" />
      <rect x="244" y="160" width="132" height="6" rx="3" fill="var(--border)" />
      <rect x="244" y="188" width="104" height="34" rx="8" fill="var(--surface-2)" stroke="var(--border)" />
      <rect x="360" y="188" width="104" height="34" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" strokeOpacity="0.45" />
      <circle cx="428" cy="205" r="4" fill="var(--accent)" />
      <rect x="244" y="234" width="220" height="2" rx="1" fill="var(--border)" />
      <text x="244" y="248" fill="var(--subtle)" fontSize="7" letterSpacing="1.5" fontFamily="var(--font-instrument), sans-serif">
        EN ATTENTE → EN PRÉPARATION → PRÊTE
      </text>
      <circle cx="505" cy="330" r="30" fill="var(--accent-soft)" />
      <path d="M492 330l9 9 18-19" fill="none" stroke="var(--accent-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function Grid() {
  const cells = [
    [244, 124], [272, 124], [300, 124], [356, 124], [384, 124],
    [244, 152], [300, 152], [328, 152], [384, 152],
    [244, 180], [272, 180], [328, 180], [356, 180],
    [272, 208], [300, 208], [356, 208], [384, 208],
    [244, 236], [300, 236], [328, 236], [384, 236],
    [244, 264], [272, 264], [328, 264], [356, 264], [384, 264],
  ];
  return (
    <g>
      <rect x="228" y="108" width="184" height="184" rx="20" fill="var(--surface)" stroke="var(--border)" />
      {cells.map(([x, y], index) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="14"
          height="14"
          rx="2.5"
          fill={index % 5 === 0 ? "var(--accent)" : "var(--border-strong)"}
          opacity={index % 5 === 0 ? 0.95 : 0.6}
        />
      ))}
      <circle cx="448" cy="300" r="42" fill="var(--surface)" stroke="var(--border)" />
      <circle cx="448" cy="300" r="30" fill="var(--accent)" />
      <path d="M435 300l8 8 18-19" fill="none" stroke="var(--accent-contrast)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M412 300h-56" stroke="var(--accent)" strokeDasharray="2 6" />
      <text x="448" y="360" fill="var(--muted)" fontSize="8" letterSpacing="1.8" textAnchor="middle" fontFamily="var(--font-instrument), sans-serif">
        CERTIFICAT VÉRIFIÉ
      </text>
      <rect x="470" y="142" width="74" height="18" rx="9" fill="var(--accent-soft)" stroke="var(--accent)" strokeOpacity="0.4" />
      <text x="507" y="154" fill="var(--accent-strong)" fontSize="7" letterSpacing="1.3" textAnchor="middle" fontFamily="var(--font-instrument), sans-serif">
        QR / UNIQUE
      </text>
    </g>
  );
}

function Wave() {
  return (
    <g fill="none" strokeLinecap="round">
      {[0, 1, 2, 3].map((index) => (
        <path
          key={index}
          d={`M-20 ${210 + index * 34} C 90 ${120 - index * 12}, 170 ${300 + index * 8}, 280 ${210 + index * 22} S 470 ${90 + index * 18}, 660 ${200 + index * 28}`}
          stroke={index === 1 ? "var(--accent)" : "var(--border-strong)"}
          strokeWidth={index === 1 ? 2.4 : 1.2}
          opacity={index === 1 ? 0.95 : 0.55}
        />
      ))}
      <circle cx="280" cy="210" r="7" fill="var(--accent)" stroke="none" />
      <circle cx="280" cy="210" r="16" fill="none" stroke="var(--accent)" opacity="0.45" />
      <rect x="72" y="82" width="118" height="30" rx="15" fill="var(--surface)" stroke="var(--border)" />
      <text x="92" y="101" fill="var(--muted)" fontSize="8" letterSpacing="1.6" fontFamily="var(--font-instrument), sans-serif">
        AUTONOMIE / 420 KM
      </text>
      <line x1="72" y1="330" x2="568" y2="330" stroke="var(--border)" strokeDasharray="2 6" />
      {[120, 220, 320, 420, 520].map((x) => (
        <circle key={x} cx={x} cy="330" r="2.5" fill="var(--subtle)" />
      ))}
    </g>
  );
}

function Bars() {
  const bars = [62, 84, 74, 108, 96, 132, 120, 158, 146, 186, 172, 210];
  return (
    <g>
      {[100, 150, 200, 250, 300].map((y) => (
        <line key={y} x1="92" y1={y} x2="548" y2={y} stroke="var(--grid-line)" />
      ))}
      {bars.map((height, index) => {
        const x = 112 + index * 35;
        return (
          <rect
            key={index}
            x={x}
            y={320 - height}
            width="18"
            height={height}
            rx="4"
            fill={index > 8 ? "var(--accent)" : "var(--border-strong)"}
            opacity={index > 8 ? 0.95 : 0.55}
          />
        );
      })}
      <path
        d="M120 252 L156 230 L191 240 L226 206 L261 218 L296 184 L331 193 L366 158 L401 170 L436 134 L471 144 L506 108"
        fill="none"
        stroke="var(--accent-strong)"
        strokeWidth="1.6"
        strokeDasharray="3 5"
        opacity="0.75"
      />
      <circle cx="506" cy="108" r="5" fill="var(--accent)" />
      <circle cx="506" cy="108" r="13" fill="none" stroke="var(--accent)" opacity="0.4" />
      <rect x="92" y="344" width="456" height="1" fill="var(--border-strong)" />
      <text x="92" y="370" fill="var(--subtle)" fontSize="8" letterSpacing="1.6" fontFamily="var(--font-instrument), sans-serif">
        AVANT
      </text>
      <text x="548" y="370" fill="var(--accent-strong)" fontSize="8" letterSpacing="1.6" textAnchor="end" fontFamily="var(--font-instrument), sans-serif">
        APRÈS
      </text>
    </g>
  );
}

function Nodes() {
  const nodes = [
    [180, 128, 7], [300, 100, 5], [420, 150, 8], [240, 220, 5],
    [352, 210, 12], [490, 240, 6], [180, 310, 6], [310, 320, 5],
    [440, 330, 7],
  ];
  const links = [
    [0, 1], [1, 2], [0, 3], [1, 3], [3, 4], [2, 4], [4, 5], [3, 6],
    [6, 7], [7, 4], [7, 8], [4, 8], [5, 8],
  ];
  return (
    <g>
      {links.map(([from, to], index) => (
        <line
          key={index}
          x1={nodes[from][0]}
          y1={nodes[from][1]}
          x2={nodes[to][0]}
          y2={nodes[to][1]}
          stroke="var(--border-strong)"
          strokeWidth={index % 4 === 0 ? 1.4 : 0.9}
          opacity="0.7"
        />
      ))}
      {nodes.map(([x, y, r], index) => (
        <g key={index}>
          {index === 4 && (
            <circle cx={x} cy={y} r={r + 16} fill="var(--accent-soft)" />
          )}
          <circle
            cx={x}
            cy={y}
            r={r}
            fill={index === 4 ? "var(--accent)" : "var(--surface)"}
            stroke={index === 4 ? "var(--accent)" : "var(--border-strong)"}
            strokeWidth="1.5"
          />
        </g>
      ))}
      <text x="352" y="214" fill="var(--accent-contrast)" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="var(--font-instrument), sans-serif">
        ML
      </text>
      <rect x="72" y="72" width="104" height="24" rx="12" fill="var(--surface)" stroke="var(--border)" />
      <text x="88" y="88" fill="var(--muted)" fontSize="7" letterSpacing="1.4" fontFamily="var(--font-instrument), sans-serif">
        FEATURES / LABELS
      </text>
    </g>
  );
}

function Pulse() {
  return (
    <g>
      <line x1="60" y1="210" x2="580" y2="210" stroke="var(--border)" strokeDasharray="2 7" />
      <path
        d="M60 210 H170 L190 210 L206 172 L226 250 L246 146 L266 256 L286 196 L302 210 H420 L438 210 L452 186 L468 234 L484 210 H580"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="246" cy="146" r="6" fill="var(--accent)" />
      <circle cx="246" cy="146" r="18" fill="none" stroke="var(--accent)" opacity="0.35" />
      <rect x="60" y="92" width="132" height="54" rx="14" fill="var(--surface)" stroke="var(--border)" />
      <text x="78" y="114" fill="var(--subtle)" fontSize="7" letterSpacing="1.4" fontFamily="var(--font-instrument), sans-serif">
        TEMPÉRATURE
      </text>
      <text x="78" y="134" fill="var(--text)" fontSize="17" fontWeight="600" fontFamily="var(--font-bricolage), sans-serif">
        24,8 °C
      </text>
      <rect x="452" y="270" width="128" height="54" rx="14" fill="var(--surface)" stroke="var(--border)" />
      <text x="470" y="292" fill="var(--subtle)" fontSize="7" letterSpacing="1.4" fontFamily="var(--font-instrument), sans-serif">
        HUMIDITÉ
      </text>
      <text x="470" y="312" fill="var(--text)" fontSize="17" fontWeight="600" fontFamily="var(--font-bricolage), sans-serif">
        61 %
      </text>
      <circle cx="560" cy="92" r="22" fill="var(--accent-soft)" />
      <circle cx="560" cy="92" r="5" fill="var(--accent)" />
    </g>
  );
}
