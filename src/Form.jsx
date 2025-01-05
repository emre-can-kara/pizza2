import { clear } from "@testing-library/user-event/dist/cjs/utility/clear.js";
import { useState } from "react";
import React from "react";

function NameInput() {
  const [ad, setAd] = useState(""); // Kullanıcının adını tutan state
  const [error, setError] = useState(""); // Hata mesajı state
  const [textBolge, setTextBolge] = useState(""); // Textarea için state
  
  

  
  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextBolge(value);

  };

  // Kullanıcının adını güncelle ve doğrula
  const handleNameChange = (event) => {
    const value = event.target.value;
    setAd(value);

    if (value.length < 3) {
      setError("İsim en az 3 karakterden ve Sipariş notu en az 10 karakterden oluşmalıdır.");
    } else {
      setError("");
    }
  };

  // Form gönderimi
  const handleSubmit = (event) => {
    event.preventDefault(); // Sayfa yenilemeyi engelle

    if (ad.length < 3 || textBolge.length<10) {
      alert("Form gönderilemedi. İsminiz 3 karakterden, Sipariş notu 10 karakterden fazla olmalıdır.");
    }  
  
    else {
      alert(`Form başarıyla gönderildi: ${ad}`);
      setAd("");
      setTextBolge("");
    }
   
   
  };

  return (
    <form onSubmit={handleSubmit}>
     {/* Boyut seç  */ }
      <div className="pizzaSize" style={{marginTop:"20px"}}>
      <h3 style={{height:"10px", marginBottom:"10px", display:"flex", flexDirection:"initial", position:"relative",  }}> Boyut Seç </h3>
        <div style={{display:"flex", flexDirection:"column", gap:"10px", position:"relative", right:"2rem", alignItems:"self-start", margin:"2rem", padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: "#fff",
              cursor: "pointer",}}> 
      <label>
        <input type="radio" name="size" value="small" /> Küçük
      </label>
      <label>
        <input type="radio" name="size" value="medium"/> Orta
      </label>
      <label>
        <input type="radio" name="size" value="large" /> Büyük
      </label>
      
        </div>
    </div>

      <label>  {/* Ad Giriş Alanı */}
        Lütfen adınızı giriniz:
        <input
          type="text"
          value={ad}
          onChange={handleNameChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </label>

      {/* Sipariş Notu */}
      <h4 style={{ textAlign: "left", marginTop: "20px" }}>Sipariş Notu</h4>
      <textarea
        name="SiparişNotu"
        id="Siparis"
        value={textBolge}
        onChange={handleTextChange}
        placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
        style={{
          lineHeight: "1.5",
          width: "100%",
          fontSize: "14px",
          fontFamily: "Roboto",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          resize: "none",
        }}
      />

      {/* Hata Mesajı */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Gönder Butonu */}
      <button
        type="submit"
        disabled={ad.length < 3} // Ad 3 karakterden küçükse butonu devre dışı bırak
        style={{
          backgroundColor: ad.length >= 3 ? "green" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "10px 15px",
          fontSize: "16px",
          cursor: ad.length >= 3 ? "pointer" : "not-allowed",
          marginTop: "20px",
        }}
      >
        Gönder
      </button>
    </form>
  );
}

export default NameInput;
