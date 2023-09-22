import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const Planet = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/sVaitUEZ8Cm0eXi0/scene.splinecode');
  }, []);

  return (
    <div>
      <canvas id="canvas3d"></canvas>
    </div>
  );
};

export default Planet;
