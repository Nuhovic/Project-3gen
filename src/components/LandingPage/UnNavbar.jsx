const UnNavbar = () => {
  return (
    <div
      id="ispod-navbar"
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: "orange ",
        display: "flex",
      }}
    >
      <div
        id="desni-ispod-navbar"
        style={{
          width: "50%",
          height: "70px",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "25px",
        }}
      ></div>
      <div
        id="levi-ispod-navbar"
        style={{ width: "50%", height: "70px" }}
      ></div>
    </div>
  );
};

export default UnNavbar;
