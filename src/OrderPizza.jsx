import {colors} from "./colors.js"
import {useState} from 'react';
import Ingredients from "./Ingredients.jsx";
import MyForm from "./Form.jsx";
import NameInput from "./Form.jsx";
import Home from "./Home.jsx";

const malzemeler = ["Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk", "Kanada Jambonu", "Roka", "Ananas", "Tavuk Izgara", "Jalepeno", "Kabak", "Soğan", "Sarımsak"]

function OrderPizza() {
    const [pepperoniChecked, setPepperoniChecked] = useState(false); // her birine bir state tanımmlamak zorunda kaldım ancak tek bir tane tanımlayıp malzemeler list arrayinden alıp map ile function yapabilirim fakat yapamadım
    const [domatesChecked, setDomatesChecked] = useState(false);
    const [biberChecked, setBiberChecked] = useState(false);
    const [sosisChecked, setSosisChecked] = useState(false);
    const [secim, setSecim] = useState(0);
    const [toplam, setToplam] = useState(85.50);
    const [siparisSayisi, setSiparisSayisi] = useState(1); // buranın statei aldığım dataya göre değişecek
   

  
    return (
      <> <div  style={{margin:"0 auto", width:"%80", padding: "20px"}}> 
        <header className="TopScreen" style = {{backgroundColor:colors.red, width:"100vw", height:"15vh", position:"absolute", top:0, left:0, textAlign:"center"}}> 
          
         <img src="images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler logo"style={{padding:"1.5em", zIndex: 1, marginTop:"20px"}}/>
          
        </header> <div className="PizzaNameAndDescription">
     <h4 style={{ fontSize:"24px", height:"15vh", position:"absolute", top:"12rem"}}>Position Absolute Acı Pizza   </h4> 
     <h1 style={{ fontSize:"24px", height:"15vh", position:"relative", top:"10rem", right:585, zIndex:1}} > 85.50₺</h1>
    
     <p // paragraph initial point
 
>
  Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana
  göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha 
  sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
  genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan 
  kökenli lezzetli bir yemektir... Küçük bir pizzaya bazen pizzetta denir.  
</p> 



        <div className="ingredients" > <h3 style={{marginBottom:"10px", display:"flex", flexDirection:"initial"}}>Ek Malzemeler </h3>
        <p style={{marginBottom:"10px", display:"flex", flexDirection:"initial"}}>En fazla 10 malzeme seçebilirsiniz. Her biri 5₺</p>

       <div className= "ingredientsIncrement"style={{marginBottom:"10px", display:"flex", flexDirection:"initial"}} >

        
        <Ingredients label="Pepperoni" checked={pepperoniChecked} // Seçilen malzemeye göre toplam fiyat ve seçim fiyatı 5'er 5'er artıyor
        onChange={() => {setPepperoniChecked(!pepperoniChecked)
          setSecim((prev) => (pepperoniChecked ? prev - 5 : prev + 5))
          setToplam((prev)=> (pepperoniChecked ? prev - 5: prev + 5))
          
        }} />
       
       <Ingredients label="Domates" checked={domatesChecked}
        onChange={() => {setDomatesChecked(!domatesChecked);
          setSecim((prev)=> (domatesChecked ? prev - 5: prev + 5))
          setToplam((prev)=> (domatesChecked ? prev - 5: prev + 5))
        }} />
       
        <Ingredients label="Biber" checked={biberChecked}
        onChange={() => {setBiberChecked(!biberChecked);
          setSecim((prev) => (biberChecked ? prev - 5 : prev + 5));
          setToplam((prev)=> (biberChecked ? prev - 5: prev + 5))
        }} />
       
        <Ingredients label="Sosis" checked={sosisChecked}
        onChange={() => {setSosisChecked(!sosisChecked)
          setSecim((prev) => sosisChecked ? prev - 5: prev + 5);
          setToplam((prev)=> (sosisChecked ? prev - 5: prev + 5))
        }} 
       />
        
          </div> 
        </div>
        <div className="Forms" style={{textAlign:"left"}}>
        <NameInput/>
        </div>


 
<div className="Butonlar" style={{display:"flex", flexDirection:"row", height:"45px", padding:"30px"}}>
        <button Classname="incrementButton" onClick={() => {
    setSiparisSayisi((prev) => {
      const newSiparisSayisi = prev + 1; 
      setToplam((prevToplam) =>
        newSiparisSayisi > 1 ? prevToplam * 2 : prevToplam  //Sipariş sayısı 1'den fazla 2 ile çarpılıyor
      );
      return newSiparisSayisi; 
    });
  }}
    style={{
      backgroundColor: colors.yellow,
      border: "none",
      borderRadius: "4px",
      padding: "10px 15px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
    }}>    +
  </button> 
<p> {siparisSayisi} </p> 
  <button  className="decreementButton" onClick={() => {
    setSiparisSayisi((prev) => {
      
      const newSiparisSayisi = Math.max(prev - 1, 0);

      
      setToplam((prevToplam) =>
        newSiparisSayisi > 1 ? prevToplam / 2 : prevToplam // Burada da sipariş sayısı decreement edildiğinde 2 ile bölünüyor ancak hata var ve düzelteceğim, test ederseniz görebilirsiniz hatayı
      );

    
      return newSiparisSayisi;
    }); 


  }}
   style={{ 
      backgroundColor: colors.yellow,
      border: "none",
      borderRadius: "4px",
      padding: "10px 15px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
    }}>    -
  </button> 
  
  <div className="siparisToplamıArea"
  style={{

    border: "1px solid #ddd", 
    borderRadius: "8px", 
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    height: "200px",
    width: "300px",
    padding: "20px", 
    backgroundColor: "#fff", 
    margin: "20px auto", 
  }}
>
  <h4 style={{ marginBottom: "10px", fontWeight: "bold" }}>Sipariş Toplamı</h4>
  <p style={{ margin: "5px 0" }}>Seçimler: {secim}₺</p>
  <p style={{ margin: "5px 0", color: colors.red, fontWeight: "bold" }}>
    Toplam: {toplam}₺
  </p>
  <button
    style={{
      marginTop: "auto", 
      backgroundColor: colors.yellow,
      border: "none",
      borderRadius: "4px",
      padding: "10px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      textAlign: "center",
    }}
  >
    SİPARİŞ VER
  </button>


</div>
  
  </div>
      </div>
      </div>

      <footer>



        
      </footer>
        </>
      );
  }

  
  

  
  export default OrderPizza;