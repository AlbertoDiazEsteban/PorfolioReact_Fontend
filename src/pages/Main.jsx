
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Stars from './Stars';



const Main = () => {
    const [marginTop, setMarginTop] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const additionalMargin = scrollPosition > 0 ? 300 : 0;
        setMarginTop(additionalMargin);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div>
      <Header />
      
      <section className="bg-dark">
        <div className="row">
        </div>
        <div className="row">

              <div style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '100px auto',
                  paddingTop: `${marginTop}px`,
                  boxShadow: 'inset 0 0 0 5px white',
                  borderRadius: '50px',
                  width: '800px',
                  height: '600px',
                }}>
                    <Stars/>
              </div>
             

        </div>
        <div className="row">
        </div>
    </section>

    <Footer />
            </div>
        );
    }


export default Main



