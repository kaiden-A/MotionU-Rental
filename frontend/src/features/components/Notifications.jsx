import { useEffect, useState } from "react";

function Notifications({ message, onClose, success, popup }) {
  const [visible, setVisible] = useState(false);

  const bgColor = success
    ? "#10b981"
    : popup
    ? "#5d6afb"
    : "#b91010ff";

  useEffect(() => {
    // show notification
    setVisible(true);

    // auto close after 3s
    const timer = setTimeout(() => {
      setVisible(false);

      // wait for slide-out animation before unmount
      setTimeout(onClose, 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  const containerStyle = {
    position: "fixed",
    top: "80px",
    right: "20px",
    backgroundColor: bgColor,
    color: "white",
    padding: "15px 25px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    zIndex: 10000,
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    transform: visible ? "translateX(0)" : "translateX(120%)",
    opacity: visible ? 1 : 0,
    transition: "all 0.3s ease",
    minWidth: "250px",
  };

  const buttonStyle = {
    padding: 0,
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div>{message}</div>
      <button
        style={buttonStyle}
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
      >
        ×
      </button>
    </div>
  );
}

export default Notifications;
