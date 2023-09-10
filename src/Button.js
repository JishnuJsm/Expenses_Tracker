export default function Button({ children, color, bgColor = "white" }) {
  return (
    <button
      style={{
        border: `1px solid ${color}`,
        width: "100px",
        height: "30px",
        color: `${color}`,
        fontSize: "1rem",
        borderRadius: "5px",
        backgroundColor: `${bgColor}`,
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
