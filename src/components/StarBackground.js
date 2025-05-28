// src/components/StarBackground.jsx
import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars = Array(200).fill().map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2,
      vx: -0.5 + Math.random(),
      vy: -0.5 + Math.random()
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#fff';
      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      move();
      requestAnimationFrame(draw);
    }

    function move() {
      stars.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0 || s.x > width) s.vx *= -1;
        if (s.y < 0 || s.y > height) s.vy *= -1;
      });
    }

    draw();
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
  );
};

export default StarBackground;


