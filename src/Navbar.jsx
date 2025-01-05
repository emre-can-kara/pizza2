import React from 'react';
import { colors } from './colors';

function NavBars () {
return (

    <nav style={{ display: 'flex', justifyContent: 'center', padding: '1rem', background: '#fff' }}>
    <a href="/" style={{ display:'flex', margin: '0 1rem', justifyContent:'space-evenly', color:colors.black, backgroundColor:colors.bej, borderRadius:"15px"}}> <img src="images\iteration-2-images\icons\1.svg"  alt="yeniKore" style={{height:'1em', marginRight:'0.5rem'}}/>Yeni Kore</a>
    <a href="/" style={{ display:'flex',  margin: '0 1rem', justifyContent:'space-evenly', color:colors.black, backgroundColor:colors.bej, borderRadius:"15px" }}> <img src="images\iteration-2-images\icons\2.svg" alt="pizza" style={{height:'1em', marginRight:'0.5rem'}} /> Pizza</a>
    <a href="/" style={{ display:'flex',  margin: '0 1rem' , justifyContent:'space-evenly', color:colors.black, backgroundColor:colors.bej, borderRadius:"15px"}}> <img src="images\iteration-2-images\icons\3.svg" alt="burger" style={{height:'1em', marginRight:'0.5rem'}} />Burger</a>
    <a href="/" style={{ display:'flex',  margin: '0 1rem' , justifyContent:'space-evenly', color:colors.black, backgroundColor:colors.bej, borderRadius:"15px"}}> <img src="images\iteration-2-images\icons\4.svg" alt="kizartmalar" style={{height:'1em', marginRight:'0.5rem'}} />Kızartmalar</a>
    <a href="/" style={{ display:'flex',  margin: '0 1rem' , justifyContent:'space-evenly', color:colors.black, backgroundColor:colors.bej, borderRadius:"15px"}}> <img src="images\iteration-2-images\icons\5.svg" alt="fastFood" style={{height:'1em', marginRight:'0.5rem'}} />Fast Food</a>
    <a href="/" style={{ display:'flex',  margin: '0 1rem', justifyContent:'space-evenly' , color:colors.black, backgroundColor:colors.bej, borderRadius:"15px"}}> <img src="images\iteration-2-images\icons\6.svg" alt="gazliIcecek" style={{height:'1em', marginRight:'0.5rem'}} />Gazlı İçecek</a>
  </nav>

)





}

export default NavBars;