import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#333', color: '#fff', padding: '3rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
     
      <div style={{ textAlign: 'center', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
           
            <h3 style={{ fontSize: '1.5rem', margin: 0, whiteSpace:'pre-line', fontFamily:"'Chelsea Market', cursive"}}>Teknolojik {"\n"} Yemekler</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="icon 2" style={{ width: '32px', height: '32px' }} />
            <p style={{ fontSize: '1rem', margin: 0 }}>341 Londonderry Road, İstanbul Türkiye</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="icon 3" style={{ width: '32px', height: '32px' }} />
            <p style={{ fontSize: '1rem', margin: 0 }}>aciktim@teknolojikyemekler.com</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="icon 3" style={{ width: '32px', height: '32px' }} />
            <p style={{ fontSize: '1rem', margin: 0 }}>+90 216 123 45 67</p>
          </div>
        </div>
      </div>

    
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sıcaklık Menüler</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1rem', lineHeight: '2rem' }}>
          <li>Terminal Pizza</li>
          <li>5 Kişilik Hackathon Pizza</li>
          <li>useEffect Tavuklu Pizza</li>
          <li>Beyaz Console Frosty</li>
          <li>Tester Geçti Multi Burger</li>
          <li>Position Absolute Ac Burger</li>
        </ul>
      </div>

    
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Instagram</h3>
        <div style={{ display: 'flex', flexWrap: 'no-wrap', justifyContent: 'center', gap: '0.3rem', }}>
          <span style={{display:'flex', flexDirection:'column'}}> <img src="/fsweb-s8-challenge-pizza/images/iteration-2-images/footer/insta/li-0.png" alt="Instagram 1" style={{ width: '60px', height: '60px' }} />
          <img src="/fsweb-s8-challenge-pizza/images/iteration-2-images/footer/insta/li-1.png" alt="Instagram 2" style={{ width: '60px', height: '60px' }} />
          <img src="/fsweb-s8-challenge-pizza/images/iteration-2-images/footer/insta/li-2.png" alt="Instagram 3" style={{ width: '60px', height: '60px' }} /> </span>
         <span style={{display:'flex', flexDirection:'column'}}> <img src="/fsweb-s8-challenge-pizza/images/iteration-2-images/footer/insta/li-3.png" alt="Instagram 4" style={{ width: '60px', height: '60px' }} />
          <img src="/fsweb-s8-challenge-pizza/images/iteration-2-images/footer/insta/li-4.png" alt="Instagram 5" style={{ width: '60px', height: '60px' }} />
          <img src="/fsweb-s8-challenge-pizza/images/iteration-2-images/footer/insta/li-5.png" alt="Instagram 6" style={{ width: '60px', height: '60px' }} /> </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
