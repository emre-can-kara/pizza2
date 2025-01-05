import React from "react";
import { colors } from "./colors";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div
      className="AnaSayfaFoto"
      style={{
        width: "100vw", // Tam genişlik
        height: "70vh", // Yükseklik
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Başlık */}
      <h1
        style={{
          fontFamily: "'Chelsea Market', cursive",
          fontSize: "1.8rem",
          color: colors.white,
          position: "absolute",
          top: "10%",
          left: "50%",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        Teknolojik Yemekler
      </h1>

      {/* Alt Başlık */}
      <h2
        style={{
          fontFamily: "'Satisfy', cursive",
          fontSize: "1.5rem",
          color: colors.yellow,
          position: "absolute",
          top: "20%",
          left: "50%",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        Fırsatı Kaçırma
      </h2>

      {/* Açıklama */}
      <h3
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "2rem",
          color: colors.white,
          position: "absolute",
          top: "30%",
          left: "50%",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        Kod Acıktırır, Pizza Doyurur
      </h3>

      {/* Buton */}
      <Link
        to="/OrderPizza"
        style={{
          fontFamily: "'Quattrocento', sans-serif",
          color: colors.black,
          backgroundColor: colors.yellow,
          borderRadius: "5px",
          padding: "0.5rem 1rem",
          fontSize: "14px",
          cursor: "pointer",
          textDecoration: "none",
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 11, 
          textAlign: "center",
        }}
      >
        Acıktım
      </Link>

      {/* Arka Plan Görseli */}
      <img
        src="images/iteration-1-images/home-banner.png"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        alt="Arka Plan"
      />
    </div>
  );
}

export default Banner;
