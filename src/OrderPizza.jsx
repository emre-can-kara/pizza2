import React, { useState } from "react";
import Ingredients from "./Ingredients";
import { colors } from "./colors.js";
import NameInput from "./Form.jsx";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

const malzemeler = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Roka",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Kabak",
  "Soğan",
  "Sarımsak",
];

function OrderPizza() {
  const [selectedIngredients, setSelectedIngredients] = useState({});
  const [toplam, setToplam] = useState(85.5);
  const [siparisSayisi, setSiparisSayisi] = useState(1);

  const handleIngredientChange = (ingredient) => {
    setSelectedIngredients((prev) => {
      const isSelected = prev[ingredient];
      const newSelectedIngredients = {
        ...prev,
        [ingredient]: !isSelected,
      };

      setToplam((prevToplam) => (isSelected ? prevToplam - 5 : prevToplam + 5));
      return newSelectedIngredients;
    });
  };

  const handleSiparisSayisiArtir = () => {
    setSiparisSayisi((prev) => {
      const newSiparisSayisi = prev + 1;
      setToplam((prevToplam) => prevToplam + 85.5);
      return newSiparisSayisi;
    });
  };

  const handleSiparisSayisiAzalt = () => {
    setSiparisSayisi((prev) => {
      if (prev > 1) {
        const newSiparisSayisi = prev - 1;
        setToplam((prevToplam) => prevToplam - 85.5);
        return newSiparisSayisi;
      }
      return prev;
    });
  };
  

  return (
    <div
      className="OrderPizzaContainer"
      style={{
        margin: "0 auto",
        maxWidth: "1000px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
     
      <header
        style={{
          backgroundColor: colors.red,
          width: "100%",
          height: "10vh",
          textAlign: "center",
          borderRadius: "8px",
          marginBottom: "10px",
          margin:0
        }}
      >
        <img
          src="images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler logo"
          style={{
            padding: "1.5em",
          }}
        />
      </header>

     
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h4 style={{ fontSize: "24px", marginBottom: "1rem", display:"flex",justifyItems:"flex-start"}}>
          Position Absolute Acı Pizza
        </h4>
        <h1 style={{ fontSize: "24px", color: colors.red, display:"flex",justifyItems:"flex-start"}}>85.50₺</h1>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
          geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak, düzleştirilmiş mayalı buğday
          bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir... Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>

   
      <div>
        <h3 style={{ marginBottom: "10px" }}>Ek Malzemeler</h3>
        <p style={{ marginBottom: "10px" }}>
          En fazla 10 malzeme seçebilirsiniz. Her biri 5₺
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {malzemeler.map((malzeme) => (
            <Ingredients
              key={malzeme}
              label={malzeme}
              checked={!!selectedIngredients[malzeme]}
              onChange={() => handleIngredientChange(malzeme)}
            />
          ))}
        </div>
      </div>

    
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        
        {/* Form */}
        <div style={{ width: "100%", maxWidth: "500px" }}>
          <NameInput />
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleSiparisSayisiArtir}
            style={{
              backgroundColor: colors.yellow,
              border: "none",
              borderRadius: "4px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            +
          </button>
          <p>{siparisSayisi}</p>
          <button
            onClick={handleSiparisSayisiAzalt}
            style={{
              backgroundColor: colors.yellow,
              border: "none",
              borderRadius: "4px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            -
          </button>
        </div>
      </div>

   
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "300px",
          textAlign: "left",
          alignSelf: "center",
        }}
      >
        <h4>Sipariş Toplamı</h4>
        <p>
          Seçimler:{" "}
          {Object.keys(selectedIngredients).filter(
            (key) => selectedIngredients[key]
          ).length * 5}
          ₺
        </p>
        <p style={{ color: colors.red }}>Toplam: {toplam}₺</p>
        <button
          style={{
            backgroundColor: colors.yellow,
            border: "none",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        > 
        <Link to="/success"> 
          SİPARİŞ VER
          </Link>
        </button>
      </div>
    </div>
  );
}

export default OrderPizza;
