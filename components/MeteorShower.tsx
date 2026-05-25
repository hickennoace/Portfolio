type Meteor = {
  id: number;
  size: number;
  top: string;
  left: string;
  delay: string;
  dur: string;
  angle: string;
  distance: string;
};

// Sparse, slow shower — fewer streaks, longer gaps, gentler timing.
const METEORS: Meteor[] = [
  { id: 1, size: 170, top: "4%",  left: "78%", delay: "0s",   dur: "6.8s", angle: "-32deg", distance: "-760px" },
  { id: 2, size: 120, top: "18%", left: "88%", delay: "3.4s", dur: "7.2s", angle: "-38deg", distance: "-700px" },
  { id: 3, size: 200, top: "2%",  left: "58%", delay: "6.1s", dur: "8.0s", angle: "-35deg", distance: "-840px" },
  { id: 4, size: 145, top: "12%", left: "68%", delay: "4.8s", dur: "7.0s", angle: "-36deg", distance: "-720px" },
  { id: 5, size: 185, top: "6%",  left: "42%", delay: "2.2s", dur: "8.6s", angle: "-37deg", distance: "-820px" },
  { id: 6, size: 110, top: "28%", left: "94%", delay: "8.4s", dur: "7.4s", angle: "-30deg", distance: "-640px" },
  { id: 7, size: 155, top: "16%", left: "30%", delay: "9.6s", dur: "7.8s", angle: "-39deg", distance: "-760px" },
];

export default function MeteorShower() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {METEORS.map((m) => (
        <span
          key={m.id}
          className="meteor"
          style={
            {
              top: m.top,
              left: m.left,
              width: `${m.size}px`,
              animationDuration: m.dur,
              animationDelay: m.delay,
              "--meteor-angle": m.angle,
              "--meteor-distance": m.distance,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
