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

// Spread across the upper sky, varied angles and speeds so the shower
// doesn't read as a single repeating loop.
const METEORS: Meteor[] = [
  { id: 1,  size: 180, top: "4%",  left: "78%", delay: "0s",   dur: "5.0s", angle: "-32deg", distance: "-760px" },
  { id: 2,  size: 130, top: "18%", left: "88%", delay: "2.1s", dur: "5.6s", angle: "-38deg", distance: "-700px" },
  { id: 3,  size: 210, top: "2%",  left: "58%", delay: "4.3s", dur: "6.4s", angle: "-35deg", distance: "-840px" },
  { id: 4,  size: 95,  top: "30%", left: "94%", delay: "1.0s", dur: "4.6s", angle: "-30deg", distance: "-620px" },
  { id: 5,  size: 155, top: "10%", left: "68%", delay: "3.5s", dur: "5.2s", angle: "-36deg", distance: "-720px" },
  { id: 6,  size: 120, top: "22%", left: "82%", delay: "6.4s", dur: "5.0s", angle: "-33deg", distance: "-660px" },
  { id: 7,  size: 195, top: "6%",  left: "44%", delay: "1.8s", dur: "7.1s", angle: "-37deg", distance: "-820px" },
  { id: 8,  size: 105, top: "38%", left: "96%", delay: "5.6s", dur: "5.8s", angle: "-34deg", distance: "-640px" },
  { id: 9,  size: 165, top: "14%", left: "30%", delay: "7.4s", dur: "6.0s", angle: "-39deg", distance: "-760px" },
  { id: 10, size: 115, top: "26%", left: "74%", delay: "8.2s", dur: "5.3s", angle: "-31deg", distance: "-650px" },
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
