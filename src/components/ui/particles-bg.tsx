"use client";

import { useEffect, useRef, useState } from "react";

interface ParticlesBgProps {
  className?: string;
  particleCount?: number;
  color?: string;
  lineColor?: string;
  opacity?: number;
  speed?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export default function ParticlesBg({
  className = "",
  particleCount = 120,
  color = "#1E3A8A",
  lineColor = "#1E3A8A",
  opacity = 0.6,
  speed = 1.5,
}: ParticlesBgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const particles: Particle[] = [];

    function resize() {
      w = container!.offsetWidth;
      h = container!.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    }

    function hexToRgb(hex: string) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * 2 + 0.8,
        alpha: Math.random() * opacity * 0.6 + opacity * 0.2,
      });
    }

    const linkDist = 150;
    const rgb = hexToRgb(color);
    const lineRgb = hexToRgb(lineColor);

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${p.alpha})`;
        ctx!.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const a = (1 - dist / linkDist) * 0.25;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(${lineRgb.r},${lineRgb.g},${lineRgb.b},${a})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      canvas.remove();
    };
  }, [mounted, particleCount, color, lineColor, opacity, speed]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
