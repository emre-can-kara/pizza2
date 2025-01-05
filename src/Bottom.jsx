import React from "react";

function Bottom() {
  return (
    <div
      className="Yemekler"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5%",
      }}
    >
      {/* İlk Yemek */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="images/iteration-2-images/pictures/food-1.png"
          alt="Terminal Pizza"
          style={{ width: "200px", height: "200px" }}
        />
        <h4 style={{ marginTop: "10px" }}>Terminal Pizza</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "5px",
          }}
        >
          <p style={{ marginRight: "15px" }}>4.8</p>
          <p style={{ margin: "0 15px" }}>(530)</p>
          <p style={{ marginLeft: "15px" }}>70₺</p>
        </div>
      </div>

      {/* İkinci Yemek */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="images/iteration-2-images/pictures/food-2.png"
          alt="Position Absolute Acı Pizza"
          style={{ width: "200px", height: "200px" }}
        />
        <h4 style={{ marginTop: "10px" }}>Position Absolute Acı Pizza</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "5px",
          }}
        >
          <p style={{ marginRight: "15px" }}>4.7</p>
          <p style={{ margin: "0 15px" }}>(420)</p>
          <p style={{ marginLeft: "15px" }}>80₺</p>
        </div>
      </div>

      {/* Üçüncü Yemek */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="images/iteration-2-images/pictures/food-3.png"
          alt="useEffect Tavuklu Burger"
          style={{ width: "200px", height: "200px" }}
        />
        <h4 style={{ marginTop: "10px" }}>useEffect Tavuklu Burger</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "5px",
          }}
        >
          <p style={{ marginRight: "15px" }}>4.9</p>
          <p style={{ margin: "0 15px" }}>(482)</p>
          <p style={{ marginLeft: "15px" }}>75₺</p>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
