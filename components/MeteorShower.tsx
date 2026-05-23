const METEORS: {
  id: number;
  size: number;
  top: string;
  left: string;
  delay: string;
  dur: string;
}[] = [
  { id: 1, size: 160, top: "4%",  left: "78%", delay: "0s",   dur: "4.8s" },
  { id: 2, size: 110, top: "18%", left: "88%", delay: "2.1s", dur: "5.5s" },
  { id: 3, size: 200, top: "2%",  left: "58%", delay: "4.3s", dur: "6.2s" },
  { id: 4, size: 90,  top: "30%", left: "94%", delay: "1.0s", dur: "4.4s" },
  { id: 5, size: 145, top: "10%", left: "68%", delay: "3.5s", dur: "5.2s" },
  { id: 6, size: 120, top: "22%", left: "83%", delay: "6.2s", dur: "4.9s" },
  { id: 7, size: 180, top: "6%",  left: "50%", delay: "1.8s", dur: "7.0s" },
  { id: 8, size: 100, top: "38%", left: "96%", delay: "5.6s", dur: "5.8s" },
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
          style={{
            top: m.top,
            left: m.left,
            width: `${m.size}px`,
            animationDuration: m.dur,
            animationDelay: m.delay,
          }}
        />
      ))}
    </div>
  );
}
