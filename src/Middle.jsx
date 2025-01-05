import React from "react";
import { colors } from "./colors";

function Middle() {
  
return (
    <div className="Total"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        overflow:"hidden"
      }}
    >
      {/* Kartların Üst Kısmı */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* Kart 1 */}
        <div style={{ position: "relative" }}>
          <img
            src="images/iteration-2-images/cta/kart-1.png"
            alt="Kart 1"
            style={{
              width: "400px",
              height: "300px",
              borderRadius: "5%",
              objectFit: "cover",
            }}
          />
          <h3
            style={{
              fontFamily: '"Arial", sans-serif',
              fontSize: "24px",
              color: colors.white,
              position: "absolute",
              top: "10%",
              left: "10%",
              zIndex: 11,
            }}
          >
            Özel{" "}
            <span style={{ fontWeight: "bold" }}>Lezzetus</span>
            <br />
            <span
              style={{
                fontSize: "14px",
              }}
            >
              Position Absolute Acı Burger
            </span>
          </h3>
        </div>

        {/* Kart 2 ve Kart 3 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* Kart 2 */}
          <div style={{ position: "relative", width: "350px", height: "150px" }}>
            <img
              src="images/iteration-2-images/cta/kart-2.png"
              alt="Kart 2"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5%",
               
              }}
            />
            <h3
              style={{
                fontFamily: '"Arial", sans-serif',
                fontSize: "20px",
                color: colors.white,
                position: "absolute",
                top: "20%",
                left: "10%",
                zIndex: 11,
              }}
            >
              Hackathlon <br /> Burger Menü
            </h3>
          </div>

          {/* Kart 3 */}
          <div style={{ position: "relative", width: "350px", height: "150px" }}>
            <img
              src="images/iteration-2-images/cta/kart-3.png"
              alt="Kart 3"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5%",
                objectFit: "cover",
              }}
            />
            <h3
              style={{
                fontFamily: '"Arial", sans-serif',
                fontSize: "20px",
                color: colors.black,
                position: "absolute",
                top: "20%",
                left: "10%",
                zIndex: 11,
              }}
            >
              <span style={{ color: colors.red }}>Çoooook</span> hızlı
              <br />
              npm gibi kurye
            </h3>
          </div>
        </div>
      </div>
   

      {/* Alt Başlık */}
      <h3
        style={{
          fontFamily: "'Satisfy', cursive",
          textAlign: "center",
          color: colors.red,
        }}
      >
        En çok paketlenen menüler
        <br />
        <span
          style={{
            fontFamily: '"Roboto Condensed", sans-serif',
            color: colors.black,
          }}
        >
          Acıktıran Kodlara Doyuran Lezzetler
        </span>
      </h3>
    </div>
)

}

export default Middle;
