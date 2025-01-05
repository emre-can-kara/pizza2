import React from "react";
import { colors } from "./colors";

function Success({ hamur, boyut, ekMalzemeler, secimToplami, toplam }) {
  return (
    <div
      style={{
        backgroundColor: colors.red,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        color: "#fff",
      }}
    >
    
      <h3 style={{ color: colors.yellow, fontSize: "1.5rem", margin: "10px 0",  fontFamily: '"Satisfy", regular', }}>
        lezzetin yolda
      </h3>
      <h1 style={{ fontSize: "2.5rem", margin: "10px 0", fontFamily: '"roboto Mono", serif', fontWeight:"300"}}>
        SİPARİŞ ALINDI!
      </h1>

    
      <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
       Boyut: {boyut}
      </p>
      <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
       Hamur:{hamur}
      </p>
      <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
        Ek Malzemeler: {ekMalzemeler}
      </p>
      <div
        style={{
          border: "1px solid #fff",
          borderRadius: "5px",
          padding: "20px",
          marginTop: "20px",
          width: "300px",
          backgroundColor: "transparent",
          textAlign: "left",
          lineHeight: "1.6",
          display:"flex",
          flexDirection:"column",

        }}
      >
        <h4 style={{ color: colors.white, marginBottom: "15px" }}>Sipariş Toplamı</h4>
        <p style={{ color: colors.white, display: "flex", justifyContent: "space-between" }}>
          <span>Seçimler:</span>
          <span>{secimToplami}₺</span>
        </p>
        <p style={{ color: colors.white, display: "flex", justifyContent: "space-between" }}>
          <span>Toplam:</span>
          <span>{toplam}₺</span>
        </p>
      </div>
    </div>
  );
}

export default Success;
