import React, { useEffect } from 'react';
import '../stylesheets/stars.css';
import Planet from './Planet';
import Header from './Header';
import Footer from './Footer';

const Stars = () => {
  useEffect(() => {
    const stars = () => {
      const count = 400;
      const section = document.querySelector('section');
      let i = 0;

      while (i < count) {
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);

        const size = Math.random() * 0.75;
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        const duration = Math.random() * 15;

        star.style.animationDuration = 2 + duration + 's';
        star.style.animationDelay = duration + 's';

        section.appendChild(star);
        i++;
      }
    };

    stars();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <Planet />
      <section></section>
      {/* <Footer /> */}
      
      
    </div>
  );
};

export default Stars;
