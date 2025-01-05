import React from 'react';
import { colors } from './colors';

function NavBarsSecond () {
return (

    
    <nav style={{ display: 'flex', justifyContent: 'center', padding: '1rem', background: '#fff',}}>
    <a href="/" style={{ display:'flex', margin: '0 1rem', justifyContent:'space-evenly', color:colors.black, backgroundColor:colors.bej, borderRadius:"15px"}}> <img src="images\iteration-2-images\icons\1.svg"  alt="ramen" style={{height:'1em', marginRight:'0.5rem'}}/>Ramen</a>
    <a href="/" style={{ display:'flex',  margin: '0 1rem', justifyContent:'space-evenly', color:colors.black, backgroundColor:colors.bej, borderRadius:"15px"}}> <img src="images\iteration-2-images\icons\2.svg" alt="pizzaSecond" style={{height:'1em', marginRight:'0.5rem'}} /> Pizza</a>
    <a href="/" style={{ display:'flex',  margin: '0 1rem' , justifyContent:'space-evenly', color:colors.black, backgroundColor:colors.bej, borderRadius:"15px"}}> <img src="images\iteration-2-images\icons\3.svg" alt="burgerSecond" style={{height:'1em', marginRight:'0.5rem'}} />Burger</a>
    <a href="/" style={{ display:'flex',  margin: '0 1rem' , justifyContent:'space-evenly', color:colors.black, backgroundColor:colors.bej, borderRadius:"15px"}}> <img src="images\iteration-2-images\icons\4.svg" alt="frenchFries" style={{height:'1em', marginRight:'0.5rem'}} />FrenchFries</a>
    <a href="/" style={{ display:'flex',  margin: '0 1rem' , justifyContent:'space-evenly', color:colors.black, backgroundColor:colors.bej, borderRadius:"15px"}}> <img src="images\iteration-2-images\icons\5.svg" alt="fastFoodSecond" style={{height:'1em', marginRight:'0.5rem'}} />Fast food</a>
    <a href="/" style={{ display:'flex',  margin: '0 1rem', justifyContent:'space-evenly', color:colors.black }}> <img src="images\iteration-2-images\icons\6.svg" alt="softDrinks" style={{height:'1em', marginRight:'0.5rem'}} />Soft Drinks</a>
    </nav>

)





}

export default NavBarsSecond;