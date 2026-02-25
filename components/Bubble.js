export default function Bubble({ size = 180, top, left, right, bottom }) {
  const style = {
    position: "absolute",
    width: size,
    height: size,
    top,
    left,
    right,
    bottom,
    pointerEvents: "none",
  };

  return (
    <div style={style}>
      {/* Outer ring */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(196, 196, 196, 0) 85.42%, rgba(168, 213, 226, 0.4) 100%)",
        }}
      />
      {/* Highlight arc */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "16%",
          width: "67%",
          height: "40%",
          borderRadius: "50%",
          background:
            "linear-gradient(180deg, rgba(168, 213, 226, 0.3) 0%, rgba(168, 213, 226, 0) 70%)",
          transform: "matrix(1, 0.02, -0.02, 1, 0, 0)",
        }}
      />
      {/* Glare dot */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "25%",
          width: "20%",
          height: "10%",
          borderRadius: "50%",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.88) 76.04%, rgba(255, 255, 255, 0) 100%)",
          transform: "matrix(0.93, -0.37, 0.37, 0.93, 0, 0)",
        }}
      />
    </div>
  );
}
