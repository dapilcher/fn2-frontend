const DropCap = ({letter}) => {
  return (
  <span className="font-display"
    style={{
      float: "left",
      fontSize: "90px",
      lineHeight: "65px",
      padding: "8px",
      fontWeight: "bold",
    }}>{letter}</span>
  );
};

export default DropCap;