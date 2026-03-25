"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacitySpeed: number;
  opacityDirection: number;
}

/* Canvas-based sparkle particles */
export function SparklesCore(props: ParticlesProps) {
  const {
    className,
    background,
    minSize = 1,
    maxSize = 3,
    speed = 4,
    particleColor = "#ffffff",
    particleDensity = 120,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    controls.start({ opacity: 1, transition: { duration: 1 } });

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      initParticles(rect.width, rect.height);
    };

    const initParticles = (w: number, h: number) => {
      const area = (w * h) / (400 * 400);
      const count = Math.floor(particleDensity * area);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: minSize + Math.random() * (maxSize - minSize),
          speedX: (Math.random() - 0.5) * (speed * 0.15),
          speedY: (Math.random() - 0.5) * (speed * 0.15),
          opacity: 0.1 + Math.random() * 0.9,
          opacitySpeed: (0.5 + Math.random() * 0.5) * (speed * 0.01),
          opacityDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > w) p.speedX *= -1;
        if (p.y < 0 || p.y > h) p.speedY *= -1;

        p.opacity += p.opacitySpeed * p.opacityDirection;
        if (p.opacity >= 1) {
          p.opacity = 1;
          p.opacityDirection = -1;
        } else if (p.opacity <= 0.1) {
          p.opacity = 0.1;
          p.opacityDirection = 1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, [mounted, minSize, maxSize, speed, particleColor, particleDensity, controls]);

  return (
    <motion.div
      ref={containerRef}
      animate={controls}
      className={cn("opacity-0", className)}
      style={{ background: background || "transparent" }}
    >
      {mounted && (
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={{ display: "block" }}
        />
      )}
    </motion.div>
  );
};
