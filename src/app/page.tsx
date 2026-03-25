"use client";

import { motion } from "framer-motion";
import { 
  Check, 
  X, 
  ArrowRight, 
  Sparkles,
  Instagram,
  MessageCircle,
  Shield,
  Focus,
  MapPin,
} from "lucide-react";
import { HeroSection as HeroSection2 } from "@/components/ui/hero-section-2";
import { Navbar } from "@/components/ui/navbar";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Features } from "@/components/blocks/features-1";
import { ParticleButton } from "@/components/ui/particle-button";
import { SparklesCore } from "@/components/ui/sparkles";
import DisplayCards from "@/components/ui/display-cards";
import HighlightCard from "@/components/ui/highlight-card";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import ParticlesBg from "@/components/ui/particles-bg";

const WHATSAPP_NUMBER = "5547991489716";
const WHATSAPP_MSG = "Olá Everton, gostaria de saber mais sobre as sessões e mentorias.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const INSTAGRAM_LINK = "https://instagram.com/everton.ferrari";
const ROYAL_BLUE = "#4169E1";
const LOGO_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c20fa042-f03a-41ff-9d4a-1212f1f96fdc/LOGO-EVERTON-FERRARI_COM-NOME.pdf-1768830015534.png?width=8000&height=8000&resize=contain";

const GrainOverlay = () => (
  <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay hidden md:block">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

export function HeroSection() {
  return (
    <div className="relative">
        <HeroSection2
          logo={{
            url: LOGO_URL,
            alt: "Everton Ferrari Logo",
          }}
          slogan="TRAINER EM PNL & MENTOR DE COMPORTAMENTO HUMANO"
          title={
            <>
              Eu te devolvo algo que o mundo tentou tirar de você:<br />
              <span className="text-[#8B6F30]">Clareza.</span>
            </>
          }
          subtitle={
            <div className="space-y-4 max-w-lg">
              <p className="text-base md:text-lg text-[#0F1B3D] leading-relaxed">
                <strong>Você não precisa de mais informação.</strong><br />
                <strong>Você precisa de decisão.</strong><br />
                <strong>E decisão exige coragem.</strong>
              </p>
              <p className="text-base md:text-lg text-[#0F1B3D]/80 leading-relaxed">
                Estou aqui para conduzir você de volta ao lugar onde suas decisões nascem com verdade, clareza e poder.
              </p>
            </div>
          }
          callToAction={{
            text: "Começar minha transformação",
            href: WHATSAPP_LINK,
          }}
            backgroundImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/5e91c788-830e-448a-a4d1-f8d9314960f8/sdsd-1767635629212.png?width=1200&height=1200&resize=contain"
          />
    </div>
  );
}

export function PainSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* ── PARTICLES: Top-right cluster (connects Point 1 → Point 2) ── */}
      <div className="absolute top-0 right-0 w-[55%] h-[35%] pointer-events-none z-[1] opacity-40 hidden md:block">
        <ParticlesBg
          particleCount={60}
          color="#1E3A8A"
          lineColor="#1E3A8A"
          opacity={0.5}
          speed={0.8}
        />
      </div>

      {/* ── PARTICLES: Center diagonal cluster (Point 3 core — the loop) ── */}
      <div className="absolute top-[28%] left-[15%] w-[70%] h-[44%] pointer-events-none z-[1] opacity-50 hidden md:block">
        <ParticlesBg
          particleCount={100}
          color="#1E3A8A"
          lineColor="#0F1B3D"
          opacity={0.65}
          speed={1.8}
        />
      </div>

      {/* ── PARTICLES: Bottom-left cluster (connects Point 4 → Point 5) ── */}
      <div className="absolute bottom-0 left-0 w-[55%] h-[35%] pointer-events-none z-[1] opacity-35 hidden md:block">
        <ParticlesBg
          particleCount={50}
          color="#1E3A8A"
          lineColor="#1E3A8A"
          opacity={0.4}
          speed={0.6}
        />
      </div>

      {/* ── Z-PATH GUIDE LINE (diagonal from top-right to bottom-left, hidden on mobile) ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-[2]" preserveAspectRatio="none">
        <motion.line
          x1="10%" y1="8%" x2="88%" y2="8%"
          stroke="rgba(30,58,138,0.04)" strokeWidth="1"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }} viewport={{ once: true }}
        />
        <motion.line
          x1="88%" y1="8%" x2="12%" y2="92%"
          stroke="rgba(30,58,138,0.04)" strokeWidth="1"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }} viewport={{ once: true }}
        />
        <motion.line
          x1="12%" y1="92%" x2="90%" y2="92%"
          stroke="rgba(30,58,138,0.04)" strokeWidth="1"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 3, ease: "easeInOut" }} viewport={{ once: true }}
        />
      </svg>

      {/* ═══════ POINT 1 — TOP LEFT (Perception) ═══════ */}
      <div className="relative min-h-[55vh] md:min-h-[60vh] flex items-start pt-24 md:pt-32 pb-12">
        {/* Calm, nearly static glow */}
        <div className="absolute top-[8%] left-[3%] w-[400px] h-[400px] rounded-full bg-[#1E3A8A]/[0.025] blur-[120px] pointer-events-none" />

        <div className="container max-w-[1220px] mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-lg md:max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-[#1E3A8A]/30 text-[10px] md:text-xs tracking-[0.35em] uppercase font-sans block mb-6"
            >
              01 — Percepção
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-[#0F1B3D] text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.08] tracking-tight mb-8"
            >
              Você funciona bem<br />
              <span className="italic text-[#1E3A8A]/50">para o mundo.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-[#0F1B3D]/35 text-lg md:text-xl font-sans font-light leading-relaxed max-w-md"
            >
              As metas estão lá. Os resultados aparecem. De fora, tudo funciona.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ═══════ POINT 2 — TOP RIGHT (Discomfort) ═══════ */}
      <div className="relative min-h-[55vh] md:min-h-[60vh] flex items-start pt-12 md:pt-20 pb-12">
        {/* Slight tension glow — warmer, shifting */}
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(30,58,138,0.05) 0%, transparent 70%)",
            top: "5%",
            right: "0%",
            filter: "blur(90px)",
          }}
          animate={{ x: [0, -25, 10, 0], y: [0, 15, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="container max-w-[1220px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex justify-end">
            <div className="max-w-lg md:max-w-xl text-right">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="text-[#8B6F30]/40 text-[10px] md:text-xs tracking-[0.35em] uppercase font-sans block mb-6"
              >
                02 — Desconforto
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="text-[#0F1B3D] text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.12] tracking-tight mb-6"
              >
                Mas por dentro,<br />
                <span className="text-[#1E3A8A]">algo não encaixa.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="text-[#0F1B3D]/45 text-lg md:text-xl font-serif font-light italic leading-relaxed"
              >
                O ruído que não para. O vazio que o sucesso não preenche.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ POINT 3 — CENTER DIAGONAL (Loop / Automatic Mode) ═══════ */}
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-16 md:py-24">
        {/* Animated loop gradients — visual tension at the core */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(30,58,138,0.06) 0%, transparent 65%)",
            top: "10%",
            left: "20%",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.92, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(139,111,48,0.04) 0%, transparent 65%)",
            bottom: "15%",
            right: "25%",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, -35, 20, 0],
            y: [0, 25, -15, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Rotating loop line — suggests repetition */}
        <motion.div
          className="absolute hidden md:block pointer-events-none"
          style={{
            width: "280px",
            height: "280px",
            border: "1px solid rgba(30,58,138,0.06)",
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            marginTop: "-140px",
            marginLeft: "-140px",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute hidden md:block pointer-events-none"
          style={{
            width: "180px",
            height: "180px",
            border: "1px solid rgba(139,111,48,0.05)",
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            marginTop: "-90px",
            marginLeft: "-90px",
          }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <div className="container max-w-[1220px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex justify-center">
            <div className="max-w-3xl text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="text-[#1E3A8A]/30 text-[10px] md:text-xs tracking-[0.35em] uppercase font-sans block mb-8"
              >
                03 — Modo Automático
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="text-[#0F1B3D] text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-medium leading-[1.15] tracking-tight mb-10"
              >
                O mesmo ciclo.<br />
                As mesmas respostas.<br />
                <span className="text-[#1E3A8A]/70 italic font-light">O mesmo lugar.</span>
              </motion.h2>

              <div className="space-y-5 mb-10">
                {[
                  { text: "Você tenta mudar — mas o padrão se repete.", delay: 0.3 },
                  { text: "O medo disfarçado de prudência paralisa.", delay: 0.6 },
                  { text: "O peso de sustentar quem você não é.", delay: 0.9 },
                  { text: "O piloto automático que governa suas escolhas.", delay: 1.2 },
                ].map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: item.delay, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-[#0F1B3D]/45 text-lg md:text-2xl font-serif font-light italic leading-relaxed"
                  >
                    {item.text}
                  </motion.p>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                viewport={{ once: true }}
                className="text-[#0F1B3D]/25 text-sm md:text-base font-sans font-light tracking-wide"
              >
                Você reconhece esse ciclo?
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ POINT 4 — BOTTOM LEFT (Break / Awareness Trigger) ═══════ */}
      <div className="relative min-h-[55vh] md:min-h-[60vh] flex items-end pb-12 md:pb-20 pt-12">
        {/* Stronger presence — background reacts */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(30,58,138,0.08) 0%, transparent 60%)",
            bottom: "0%",
            left: "-5%",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container max-w-[1220px] mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-lg md:max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="text-[#8B6F30]/50 text-[10px] md:text-xs tracking-[0.35em] uppercase font-sans block mb-6"
            >
              04 — Ruptura
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-[#0F1B3D] text-3xl md:text-5xl lg:text-6xl font-serif font-semibold leading-[1.1] tracking-tight mb-6"
            >
              Chega.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-[#0F1B3D]/55 text-xl md:text-2xl font-serif font-light leading-relaxed mb-4"
            >
              O desalinhamento cobra um preço alto demais.<br />
              <span className="font-medium text-[#0F1B3D]/70">Você sabe disso.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-[#0F1B3D]/30 text-base md:text-lg font-sans font-light"
            >
              Algo dentro de você já decidiu. Falta só ouvir.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ═══════ POINT 5 — BOTTOM RIGHT (Clarity / Direction) ═══════ */}
      <div className="relative min-h-[55vh] md:min-h-[60vh] flex items-center py-16 md:py-24">
        {/* Soft relief glow — visual calm */}
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#1E3A8A]/[0.02] blur-[120px] pointer-events-none" />
        <motion.div
          className="absolute w-[250px] h-[250px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(139,111,48,0.03) 0%, transparent 70%)",
            bottom: "25%",
            right: "12%",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container max-w-[1220px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex justify-end">
            <div className="max-w-lg md:max-w-xl text-right md:pr-8">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-[#8B6F30]/35 text-[10px] md:text-xs tracking-[0.35em] uppercase font-sans block mb-6"
              >
                05 — Clareza
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="text-[#0F1B3D] text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.12] tracking-tight mb-8"
              >
                E se o problema não fosse{" "}
                <span className="italic text-[#0F1B3D]/50">falta de força</span>
                <br />
                — mas falta de{" "}
                <span className="text-[#8B6F30] font-medium">clareza?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="text-[#0F1B3D]/35 text-lg md:text-xl font-sans font-light leading-relaxed mb-12"
              >
                Você não precisa de mais motivação.<br />
                Precisa reconectar com quem você realmente é.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="flex justify-end"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <ParticleButton
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-10 py-6 text-lg rounded-full shadow-lg shadow-green-600/15"
                  >
                    Quero recuperar minha clareza
                  </ParticleButton>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none z-20" />
    </section>
  );
}

export function MethodSection() {
  return (
    <section id="metodo" className="relative bg-[#FAF8F4] overflow-hidden">
      
      <BackgroundPaths title="Menos esforço, mais verdade.">
        <div className="relative z-20 w-full">
          <Features />

          <div className="mt-10 md:mt-20 h-[18rem] md:h-[30rem] w-full flex items-center justify-center">
            <PinContainer 
              title="Inicie sua jornada" 
              href={WHATSAPP_LINK}
            >
              <div className="flex flex-col p-4 w-[14rem] sm:w-[18rem] md:w-[22rem] justify-center text-center bg-black/40 rounded-2xl backdrop-blur-sm border border-white/5">
                <p className="text-base md:text-2xl font-serif font-light leading-relaxed text-white relative z-10">
                  "A mudança real não é se transformar em outra pessoa. <br className="hidden md:block" />
                  <span className="text-[#C9A227] italic font-medium">É finalmente ter coragem de parar de se abandonar."</span>
                </p>
              </div>
            </PinContainer>
          </div>
        </div>
      </BackgroundPaths>

    </section>
  );
}

export function FilterSection() {
  const filterCards = [
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Clareza",
      description: "Para quem busca clareza, não máscaras.",
      date: "Essencial",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className: "[grid-area:stack] -translate-x-6 sm:-translate-x-12 hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Shield className="size-4 text-blue-300" />,
      title: "Liberdade",
      description: "Para quem quer liberdade, não fórmulas.",
      date: "Profundo",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className: "[grid-area:stack] translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Focus className="size-4 text-blue-300" />,
      title: "Essência",
      description: "Para quem valoriza o tempo e a própria essência.",
      date: "Real",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className: "[grid-area:stack] translate-x-6 sm:translate-x-12 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <section className="px-6 py-48 relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #EEF2FF 0%, #F7F9FC 35%, #F0F4FF 70%, #E8EEFF 100%)" }}>

      {/* SVG grain texture — spiritual depth */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.032 }}>
        <filter id="filter-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#filter-grain)"/>
      </svg>

      {/* Indigo light orb — top-left */}
      <div className="absolute pointer-events-none"
        style={{ top: "-8%", left: "-6%", width: "55%", height: "55%",
          background: "radial-gradient(ellipse at 30% 30%, rgba(99,102,241,0.13) 0%, rgba(139,92,246,0.07) 40%, transparent 70%)",
          filter: "blur(60px)" }} />

      {/* Blue-teal light — center-right */}
      <div className="absolute pointer-events-none"
        style={{ top: "20%", right: "-5%", width: "45%", height: "50%",
          background: "radial-gradient(ellipse at 70% 40%, rgba(56,189,248,0.10) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)",
          filter: "blur(70px)" }} />

      {/* Warm amber glow — bottom-right */}
      <div className="absolute pointer-events-none"
        style={{ bottom: "0%", right: "10%", width: "40%", height: "40%",
          background: "radial-gradient(ellipse at 60% 80%, rgba(139,111,48,0.08) 0%, transparent 65%)",
          filter: "blur(55px)" }} />

      {/* Shadow depth — bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(0deg, rgba(99,102,241,0.06) 0%, transparent 100%)" }} />

      {/* ── VESICA PISCIS — top-right ─────────────────────────────── */}
      <svg className="absolute pointer-events-none"
        style={{ top: "-60px", right: "-60px", width: "420px", height: "420px", opacity: 0.38 }}
        viewBox="0 0 420 420" fill="none">
        <defs>
          <linearGradient id="vp-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B6F30" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        {/* Left circle of vesica */}
        <circle cx="185" cy="210" r="110" stroke="url(#vp-gold)" strokeWidth="0.8"/>
        {/* Right circle of vesica */}
        <circle cx="235" cy="210" r="110" stroke="url(#vp-gold)" strokeWidth="0.8"/>
        {/* Outer containing circle */}
        <circle cx="210" cy="210" r="148" stroke="#8B6F30" strokeWidth="0.5" strokeOpacity="0.45"/>
        {/* Inner small circle at center */}
        <circle cx="210" cy="210" r="55" stroke="#8B6F30" strokeWidth="0.6" strokeOpacity="0.5"/>
        {/* Vesica lens vertical axis */}
        <line x1="210" y1="62" x2="210" y2="358" stroke="#8B6F30" strokeWidth="0.5" strokeOpacity="0.30"/>
        {/* Horizontal axis */}
        <line x1="62" y1="210" x2="358" y2="210" stroke="#8B6F30" strokeWidth="0.5" strokeOpacity="0.30"/>
        {/* Triangle inscribed in vesica */}
        <polygon points="210,100 318,265 102,265" stroke="#8B6F30" strokeWidth="0.6" strokeOpacity="0.28" fill="none"/>
        {/* Tiny center point */}
        <circle cx="210" cy="210" r="3" fill="#8B6F30" fillOpacity="0.5"/>
        {/* 12 radial ticks on outer ring */}
        {Array.from({length: 12}, (_, i) => {
          const angle = (i * 30 - 90) * Math.PI / 180;
          const r1 = 148, r2 = 156;
          return <line key={i}
            x1={210 + r1 * Math.cos(angle)} y1={210 + r1 * Math.sin(angle)}
            x2={210 + r2 * Math.cos(angle)} y2={210 + r2 * Math.sin(angle)}
            stroke="#8B6F30" strokeWidth="0.7" strokeOpacity="0.55"/>;
        })}
      </svg>

      {/* ── COSMIC ORBITS — bottom-left ───────────────────────────── */}
      <svg className="absolute pointer-events-none"
        style={{ bottom: "-80px", left: "-80px", width: "480px", height: "480px", opacity: 0.34 }}
        viewBox="0 0 480 480" fill="none">
        <defs>
          <linearGradient id="orbit-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#8B6F30" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        {/* Tilted orbit ellipses — three at different rotations */}
        <ellipse cx="240" cy="240" rx="180" ry="80" stroke="url(#orbit-blue)" strokeWidth="0.7"
          transform="rotate(-30 240 240)"/>
        <ellipse cx="240" cy="240" rx="180" ry="80" stroke="#8B6F30" strokeWidth="0.6" strokeOpacity="0.45"
          transform="rotate(30 240 240)"/>
        <ellipse cx="240" cy="240" rx="180" ry="80" stroke="#6366F1" strokeWidth="0.5" strokeOpacity="0.30"
          transform="rotate(90 240 240)"/>
        {/* Center circle */}
        <circle cx="240" cy="240" r="28" stroke="#8B6F30" strokeWidth="0.8" strokeOpacity="0.55"/>
        <circle cx="240" cy="240" r="10" stroke="#6366F1" strokeWidth="0.6" strokeOpacity="0.50"/>
        <circle cx="240" cy="240" r="3" fill="#8B6F30" fillOpacity="0.6"/>
        {/* Outer boundary ring */}
        <circle cx="240" cy="240" r="190" stroke="#6366F1" strokeWidth="0.5" strokeOpacity="0.22"/>
        {/* 8 cardinal ticks */}
        {Array.from({length: 8}, (_, i) => {
          const angle = (i * 45 - 90) * Math.PI / 180;
          return <line key={i}
            x1={240 + 190 * Math.cos(angle)} y1={240 + 190 * Math.sin(angle)}
            x2={240 + 200 * Math.cos(angle)} y2={240 + 200 * Math.sin(angle)}
            stroke="#6366F1" strokeWidth="0.8" strokeOpacity="0.45"/>;
        })}
      </svg>

      {/* ── SMALL SPIRAL CIRCLES — mid-left ──────────────────────── */}
      <svg className="absolute pointer-events-none hidden lg:block"
        style={{ top: "38%", left: "2%", width: "120px", height: "120px", opacity: 0.33 }}
        viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="55" stroke="#8B6F30" strokeWidth="0.7" strokeOpacity="0.6"/>
        <circle cx="60" cy="60" r="42" stroke="#6366F1" strokeWidth="0.6" strokeOpacity="0.5"/>
        <circle cx="60" cy="60" r="28" stroke="#8B6F30" strokeWidth="0.6" strokeOpacity="0.5"/>
        <circle cx="60" cy="60" r="14" stroke="#6366F1" strokeWidth="0.6" strokeOpacity="0.55"/>
        <circle cx="60" cy="60" r="4"  fill="#8B6F30" fillOpacity="0.55"/>
        {/* Cross */}
        <line x1="60" y1="5"  x2="60" y2="115" stroke="#8B6F30" strokeWidth="0.5" strokeOpacity="0.35"/>
        <line x1="5"  y1="60" x2="115" y2="60" stroke="#8B6F30" strokeWidth="0.5" strokeOpacity="0.35"/>
      </svg>

      {/* ── SMALL VESICA — mid-right ──────────────────────────────── */}
      <svg className="absolute pointer-events-none hidden xl:block"
        style={{ top: "55%", right: "3%", width: "100px", height: "100px", opacity: 0.28 }}
        viewBox="0 0 100 100" fill="none">
        <circle cx="42" cy="50" r="32" stroke="#8B6F30" strokeWidth="0.8" strokeOpacity="0.7"/>
        <circle cx="58" cy="50" r="32" stroke="#6366F1" strokeWidth="0.8" strokeOpacity="0.6"/>
        <circle cx="50" cy="50" r="46" stroke="#8B6F30" strokeWidth="0.5" strokeOpacity="0.35"/>
        <circle cx="50" cy="50" r="3"  fill="#6366F1" fillOpacity="0.6"/>
      </svg>

      {/* ── TOP ORNAMENTAL LINE ───────────────────────────────────── */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-3" style={{ opacity: 0.48 }}>
        <div style={{ width: "120px", height: "1px", background: "linear-gradient(90deg, transparent, #8B6F30 60%, rgba(139,111,48,0.3))" }}/>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5" stroke="#8B6F30" strokeWidth="0.8"/>
          <circle cx="7" cy="7" r="2" stroke="#6366F1" strokeWidth="0.7"/>
          <circle cx="7" cy="7" r="1" fill="#8B6F30"/>
        </svg>
        <div style={{ width: "120px", height: "1px", background: "linear-gradient(90deg, rgba(139,111,48,0.3), #8B6F30 40%, transparent)" }}/>
      </div>

      {/* ── BOTTOM ORNAMENTAL LINE ────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-3" style={{ opacity: 0.42 }}>
        <div style={{ width: "80px", height: "1px", background: "linear-gradient(90deg, transparent, #6366F1 60%, rgba(99,102,241,0.3))" }}/>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="5" stroke="#6366F1" strokeWidth="0.8"/>
          <circle cx="6" cy="6" r="2" stroke="#8B6F30" strokeWidth="0.7"/>
          <circle cx="6" cy="6" r="1" fill="#6366F1"/>
        </svg>
        <div style={{ width: "80px", height: "1px", background: "linear-gradient(90deg, rgba(99,102,241,0.3), #6366F1 40%, transparent)" }}/>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-[#0F1B3D] mb-4 leading-tight tracking-tighter">
            Este é um convite para poucos.
          </h2>
          <p className="italic font-light text-2xl md:text-3xl text-[#0F1B3D] mb-10">
            Esta mentoria não é para todos.<br />
            Mas pode ser exatamente para você.
          </p>

          <div className="space-y-5 text-[#6B7280] text-base md:text-lg font-sans font-light leading-relaxed text-left max-w-2xl mx-auto">
            <p>A Mentoria é para pessoas que chegaram a um momento de transição na vida. Pessoas que já construíram muito, mas que começaram a perceber que algo dentro delas está pedindo uma nova direção.</p>

            <p>Quer faturar mais, estruturar o seu negócio, sua carreira...</p>

            <div className="space-y-1 pl-4 border-l-2 border-[#8B6F30]/40">
              <p>Talvez você esteja repensando sua carreira.</p>
              <p>Talvez tenha passado por uma ruptura inesperada.</p>
              <p>Ou talvez apenas tenha percebido que a vida que construiu já não representa mais quem você realmente é.</p>
            </div>

            <p>No fundo, existe uma pergunta que não sai da sua mente:</p>
            <p className="text-[#0F1B3D] font-serif text-xl md:text-2xl font-medium italic text-center py-2">"Como eu faço?"</p>

            <p><strong className="text-[#0F1B3D] font-medium">Essa mentoria é para quem quer mudar de verdade.</strong> Para quem deseja recuperar clareza, reorganizar decisões importantes e voltar a conduzir a própria vida com consciência.</p>

            <p className="text-[#0F1B3D]/70">Essa mentoria não é para quem busca atalhos ou respostas superficiais.<br />
            <strong className="text-[#0F1B3D] font-medium">É para quem sente que chegou a hora de assumir a liderança da própria história.</strong></p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div className="relative pb-20 flex justify-center">
            <div className="relative w-full max-w-md flex justify-center">
              <DisplayCards cards={filterCards} />
              <div className="absolute -bottom-10 left-0 right-0 h-40 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)] blur-2xl pointer-events-none" />
            </div>
          </div>
          <div className="grid gap-12">
            <div className="transform hover:-translate-y-2 transition-transform duration-500">
              <HighlightCard 
                title="Sim, se você..."
                description={[
                  "Deseja parar de se adaptar a ambientes tóxicos",
                  "e começar a respeitar sua própria essência e liberdade."
                ]}
                icon={<Check className="w-8 h-8 text-emerald-500" />}
              />
            </div>
            <div className="transform hover:-translate-y-2 transition-transform duration-500">
              <HighlightCard 
                title="Não, se você..."
                description={[
                  "Espera uma pílula mágica ou que alguém te \"conserte\"",
                  "sem que você assuma a autorresponsabilidade pelo seu processo de mudança."
                ]}
                icon={<X className="w-8 h-8 text-rose-500" />}
              />
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-8">
          <div className="text-center space-y-1">
            <p className="text-[#6B7280] text-base md:text-lg font-sans font-light italic">
              Algumas pessoas passam a vida reagindo ao que acontece.
            </p>
            <p className="text-[#0F1B3D] text-base md:text-lg font-sans font-medium">
              Outras decidem assumir o comando.
            </p>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
            <ParticleButton
              className="bg-[#4169E1] hover:bg-[#3158c9] text-white px-10 py-6 text-lg md:px-12 md:py-8 md:text-xl rounded-full shadow-lg shadow-blue-500/20 w-full md:w-auto"
            >
              Quero assumir o comando da minha vida
            </ParticleButton>
          </a>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Realizei uma sessão de valores com o Everton Ferrari, o Anjo! Foi muito incrível e transformadora. Iniciei completamente perdida e confusa, sai uma nova mulher. Transbordando confiança para realizar tudo que eu quiser, com poder e liberdade porque eu sou livre. Everton querido Anjo, Ser de Luz, gratidão pela paciência, dedicação e leveza para conduzir a sessão de uma forma tão esclarecedora e libertadora. Deus ilumine a sua caminhada cada vez mais. Gratidão!",
      name: "Marilene Crencas",
      designation: "Sessão",
      src: "/depoimento-1.jpeg",
    },
    {
      quote:
        "Passando aqui pra deixar meu depoimento sobre a sessão de valores realizada hoje com Everton Ferrari. A sessão foi maravilhosa, identificamos valores como autovalor pessoal, amor próprio, permissão, poder, competência. O Everton foi leve, rimos, me emocionei, ele foi atento, didático, preciso e sensível. Gratidão pela sessão. Amei.",
      name: "Andréia Teixeira",
      designation: "Sessão",
      src: "/depoimento-3.jpg",
    },
    {
      quote:
        "Gostaria de expressar minha profunda gratidão pela sessão de valores que acabei de concluir com o Everton. Ele é realmente uma pessoa incrível, leve, divertido e absolutamente cativante. Durante nossa conversa, consegui desbloquear várias questões internas e reconhecer valores em mim mesma que, até então, não sabia serem tão maravilhosos e fundamentais em minha vida.",
      name: "Rita Crencas",
      designation: "Sessão",
      src: "/depoimento-2.jpg",
    },
  ];

  return (
    <section id="depoimentos" className="bg-[#f7f7fa] py-20 md:py-32 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center mb-16 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-light text-[#111827] mb-6 leading-tight">
          Resultados Reais de quem assumiu o comando
        </h2>
        <p className="text-[#6B7280] text-lg font-sans font-light">
          Relatos de quem escolheu encarar a própria verdade através da Terapia e Mentoria com PNL.
        </p>
      </div>
      <div
        className="items-center justify-center relative flex w-full"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#111827",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#1E3A8A",
          }}
          fontSizes={{
            name: "28px",
            designation: "18px",
            quote: "18px",
          }}
        />
      </div>
    </section>
  );
}

export function AuthoritySection() {
  return (
    <section id="sobre" className="px-6 py-32 overflow-hidden relative"
      style={{ background: "linear-gradient(160deg, #ffffff 0%, #f9f7f2 45%, #f0f3ff 100%)" }}>

      {/* ── Textura grain espiritual ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.028 }} xmlns="http://www.w3.org/2000/svg">
        <filter id="mentor-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#mentor-grain)"/>
      </svg>

      {/* ── Luz dourada – canto superior direito ── */}
      <div className="absolute top-0 right-0 w-[640px] h-[640px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(201,162,39,0.16) 0%, rgba(201,162,39,0.04) 45%, transparent 70%)" }}/>

      {/* ── Luz azul-esverdeada – canto superior esquerdo ── */}
      <div className="absolute top-0 left-0 w-[520px] h-[480px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(34,197,94,0.07) 0%, rgba(59,130,246,0.05) 40%, transparent 70%)" }}/>

      {/* ── Luz verde suave – centro esquerdo ── */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[360px] h-[360px] pointer-events-none hidden md:block"
        style={{ background: "radial-gradient(ellipse at left, rgba(34,197,94,0.06) 0%, transparent 65%)" }}/>

      {/* ── Sombra sutil na base ── */}
      <div className="absolute bottom-0 inset-x-0 h-[160px] pointer-events-none"
        style={{ background: "linear-gradient(0deg, rgba(15,27,61,0.05) 0%, transparent 100%)" }}/>

      {/* ══ Círculo sagrado grande – canto superior direito ══ */}
      <svg className="absolute top-[-110px] right-[-110px] w-[500px] h-[500px] pointer-events-none opacity-45" viewBox="0 0 500 500" fill="none">
        {/* Anéis concêntricos */}
        <circle cx="250" cy="250" r="240" stroke="#C9A227" strokeWidth="1.2" strokeDasharray="6 10"/>
        <circle cx="250" cy="250" r="210" stroke="#C9A227" strokeWidth="0.7"/>
        <circle cx="250" cy="250" r="178" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="2 7"/>
        <circle cx="250" cy="250" r="148" stroke="#8B6F30" strokeWidth="0.4"/>
        {/* Eixos cardinais */}
        <line x1="250" y1="10" x2="250" y2="490" stroke="#C9A227" strokeWidth="0.4" opacity="0.45"/>
        <line x1="10" y1="250" x2="490" y2="250" stroke="#C9A227" strokeWidth="0.4" opacity="0.45"/>
        {/* Diagonais */}
        <line x1="80" y1="80" x2="420" y2="420" stroke="#C9A227" strokeWidth="0.25" opacity="0.3"/>
        <line x1="420" y1="80" x2="80" y2="420" stroke="#C9A227" strokeWidth="0.25" opacity="0.3"/>
        {/* Marcas cardinais */}
        <line x1="250" y1="10" x2="250" y2="26" stroke="#C9A227" strokeWidth="2"/>
        <line x1="250" y1="474" x2="250" y2="490" stroke="#C9A227" strokeWidth="2"/>
        <line x1="10" y1="250" x2="26" y2="250" stroke="#C9A227" strokeWidth="2"/>
        <line x1="474" y1="250" x2="490" y2="250" stroke="#C9A227" strokeWidth="2"/>
        {/* Marcas intermediárias */}
        <line x1="250" y1="40" x2="250" y2="50" stroke="#C9A227" strokeWidth="1"/>
        <line x1="250" y1="450" x2="250" y2="460" stroke="#C9A227" strokeWidth="1"/>
        <line x1="40" y1="250" x2="50" y2="250" stroke="#C9A227" strokeWidth="1"/>
        <line x1="450" y1="250" x2="460" y2="250" stroke="#C9A227" strokeWidth="1"/>
        {/* Ponto central */}
        <circle cx="250" cy="250" r="10" stroke="#C9A227" strokeWidth="1.2"/>
        <circle cx="250" cy="250" r="4" fill="#C9A227" opacity="0.85"/>
      </svg>

      {/* ══ Círculo sagrado médio – canto inferior esquerdo ══ */}
      <svg className="absolute bottom-[-90px] left-[-90px] w-[380px] h-[380px] pointer-events-none opacity-40" viewBox="0 0 380 380" fill="none">
        <circle cx="190" cy="190" r="178" stroke="#C9A227" strokeWidth="1.1" strokeDasharray="5 9"/>
        <circle cx="190" cy="190" r="150" stroke="#C9A227" strokeWidth="0.6"/>
        <circle cx="190" cy="190" r="120" stroke="#C9A227" strokeWidth="0.4" strokeDasharray="2 6"/>
        <circle cx="190" cy="190" r="90"  stroke="#8B6F30" strokeWidth="0.3"/>
        <line x1="190" y1="12" x2="190" y2="368" stroke="#C9A227" strokeWidth="0.35" opacity="0.4"/>
        <line x1="12"  y1="190" x2="368" y2="190" stroke="#C9A227" strokeWidth="0.35" opacity="0.4"/>
        <line x1="190" y1="12"  x2="190" y2="26"  stroke="#C9A227" strokeWidth="1.8"/>
        <line x1="12"  y1="190" x2="26"  y2="190" stroke="#C9A227" strokeWidth="1.8"/>
        <line x1="354" y1="190" x2="368" y2="190" stroke="#C9A227" strokeWidth="1.8"/>
        <line x1="190" y1="354" x2="190" y2="368" stroke="#C9A227" strokeWidth="1.8"/>
        <circle cx="190" cy="190" r="8"  stroke="#C9A227" strokeWidth="1"/>
        <circle cx="190" cy="190" r="3"  fill="#8B6F30" opacity="0.8"/>
      </svg>

      {/* ══ Bússola decorativa – lateral esquerda média ══ */}
      <svg className="absolute top-[22%] left-[4%] pointer-events-none opacity-35 hidden md:block" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="47" stroke="#C9A227" strokeWidth="1" strokeDasharray="3 6"/>
        <circle cx="50" cy="50" r="36" stroke="#C9A227" strokeWidth="0.6"/>
        <circle cx="50" cy="50" r="23" stroke="#C9A227" strokeWidth="0.4" strokeDasharray="2 4"/>
        <circle cx="50" cy="50" r="10" stroke="#C9A227" strokeWidth="0.5"/>
        <line x1="50" y1="3"  x2="50" y2="97" stroke="#C9A227" strokeWidth="0.4" opacity="0.45"/>
        <line x1="3"  y1="50" x2="97" y2="50" stroke="#C9A227" strokeWidth="0.4" opacity="0.45"/>
        {/* 8 ticks */}
        <line x1="50" y1="3"  x2="50" y2="12" stroke="#C9A227" strokeWidth="1.5"/>
        <line x1="50" y1="88" x2="50" y2="97" stroke="#C9A227" strokeWidth="1.5"/>
        <line x1="3"  y1="50" x2="12" y2="50" stroke="#C9A227" strokeWidth="1.5"/>
        <line x1="88" y1="50" x2="97" y2="50" stroke="#C9A227" strokeWidth="1.5"/>
        <line x1="20" y1="20" x2="26" y2="26" stroke="#C9A227" strokeWidth="0.9"/>
        <line x1="74" y1="74" x2="80" y2="80" stroke="#C9A227" strokeWidth="0.9"/>
        <line x1="74" y1="20" x2="80" y2="26" stroke="#C9A227" strokeWidth="0.9"/>
        <line x1="20" y1="74" x2="26" y2="80" stroke="#C9A227" strokeWidth="0.9"/>
        {/* Centro */}
        <circle cx="50" cy="50" r="4" stroke="#C9A227" strokeWidth="0.8"/>
        <circle cx="50" cy="50" r="1.5" fill="#C9A227" opacity="0.9"/>
      </svg>

      {/* ══ Bússola decorativa – lateral direita baixo ══ */}
      <svg className="absolute bottom-[20%] right-[4%] pointer-events-none opacity-30 hidden md:block" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="37" stroke="#C9A227" strokeWidth="0.9" strokeDasharray="3 5"/>
        <circle cx="40" cy="40" r="28" stroke="#8B6F30" strokeWidth="0.6"/>
        <circle cx="40" cy="40" r="18" stroke="#C9A227" strokeWidth="0.4" strokeDasharray="2 4"/>
        <circle cx="40" cy="40" r="8"  stroke="#C9A227" strokeWidth="0.5"/>
        <line x1="40" y1="3"  x2="40" y2="77" stroke="#C9A227" strokeWidth="0.35" opacity="0.4"/>
        <line x1="3"  y1="40" x2="77" y2="40" stroke="#C9A227" strokeWidth="0.35" opacity="0.4"/>
        <line x1="40" y1="3"  x2="40" y2="11" stroke="#C9A227" strokeWidth="1.4"/>
        <line x1="40" y1="69" x2="40" y2="77" stroke="#C9A227" strokeWidth="1.4"/>
        <line x1="3"  y1="40" x2="11" y2="40" stroke="#C9A227" strokeWidth="1.4"/>
        <line x1="69" y1="40" x2="77" y2="40" stroke="#C9A227" strokeWidth="1.4"/>
        <line x1="15" y1="15" x2="20" y2="20" stroke="#C9A227" strokeWidth="0.8"/>
        <line x1="60" y1="60" x2="65" y2="65" stroke="#C9A227" strokeWidth="0.8"/>
        <line x1="60" y1="15" x2="65" y2="20" stroke="#C9A227" strokeWidth="0.8"/>
        <line x1="15" y1="60" x2="20" y2="65" stroke="#C9A227" strokeWidth="0.8"/>
        <circle cx="40" cy="40" r="3" stroke="#C9A227" strokeWidth="0.8"/>
        <circle cx="40" cy="40" r="1" fill="#C9A227" opacity="0.8"/>
      </svg>

      {/* ── Ornamento superior – linha longa com círculo de ticks ── */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 pointer-events-none" style={{ opacity: 0.52 }}>
        <div className="w-36 h-[1.5px]" style={{ background: "linear-gradient(90deg, transparent, #C9A227 80%)" }}/>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="10"  stroke="#C9A227" strokeWidth="1.2"/>
          <circle cx="11" cy="11" r="6"   stroke="#C9A227" strokeWidth="0.6" strokeDasharray="1.5 3"/>
          <circle cx="11" cy="11" r="2.5" fill="#C9A227" opacity="0.85"/>
          <line x1="11" y1="1"  x2="11" y2="4.5" stroke="#C9A227" strokeWidth="1.4"/>
          <line x1="11" y1="17.5" x2="11" y2="21" stroke="#C9A227" strokeWidth="1.4"/>
          <line x1="1"  y1="11" x2="4.5" y2="11" stroke="#C9A227" strokeWidth="1.4"/>
          <line x1="17.5" y1="11" x2="21" y2="11" stroke="#C9A227" strokeWidth="1.4"/>
        </svg>
        <div className="w-36 h-[1.5px]" style={{ background: "linear-gradient(90deg, #C9A227 20%, transparent)" }}/>
      </div>

      {/* ── Ornamento inferior – linha longa com losango ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 pointer-events-none" style={{ opacity: 0.52 }}>
        <div className="w-36 h-[1.5px]" style={{ background: "linear-gradient(90deg, transparent, #C9A227 80%)" }}/>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="10" width="11.3" height="11.3" transform="rotate(-45 10 2)" stroke="#C9A227" strokeWidth="1.2" fill="none"/>
          <circle cx="10" cy="10" r="2.5" fill="#C9A227" opacity="0.8"/>
        </svg>
        <div className="w-36 h-[1.5px]" style={{ background: "linear-gradient(90deg, #C9A227 20%, transparent)" }}/>
      </div>

      {/* ── Linha vertical lateral – esquerda ── */}
      <div className="absolute left-7 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 pointer-events-none" style={{ opacity: 0.42 }}>
        <div className="w-[1.5px] h-32" style={{ background: "linear-gradient(180deg, transparent, #C9A227)" }}/>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7"   stroke="#C9A227" strokeWidth="1.2"/>
          <circle cx="8" cy="8" r="4"   stroke="#C9A227" strokeWidth="0.6" strokeDasharray="1.5 3"/>
          <circle cx="8" cy="8" r="1.5" fill="#C9A227" opacity="0.9"/>
        </svg>
        <div className="w-[1.5px] h-32" style={{ background: "linear-gradient(180deg, #C9A227, transparent)" }}/>
      </div>

      {/* ── Conteúdo principal ── */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 relative">
            {/* Glow suave atrás da foto */}
            <div className="absolute -inset-4 rounded-[70px] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.10) 0%, rgba(34,197,94,0.04) 50%, transparent 75%)" }}/>

            <div className="aspect-[4/5] rounded-[60px] bg-neutral-900 relative overflow-hidden group border border-white/5"
              style={{ boxShadow: "0 12px 70px rgba(201,162,39,0.16), 0 4px 24px rgba(0,0,0,0.18), 0 0 0 1px rgba(201,162,39,0.08)" }}>
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c20fa042-f03a-41ff-9d4a-1212f1f96fdc/Fotos-1767707749223.png?width=8000&height=8000&resize=contain"
                alt="Everton Ferrari"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/40 to-transparent opacity-60"/>
              <div className="absolute inset-0 rounded-[60px]"
                style={{ boxShadow: "inset 0 0 0 1px rgba(201,162,39,0.20)" }}/>
            </div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#C9A227] rounded-full flex items-center justify-center text-white p-6 text-center"
              style={{ boxShadow: "0 0 50px rgba(201,162,39,0.45), 0 8px 30px rgba(0,0,0,0.2)" }}>
              <p className="font-serif italic text-lg">+500 horas de impacto real</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            {/* Label com linha */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1.5px]" style={{ background: "linear-gradient(90deg, #C9A227, rgba(201,162,39,0.3))" }}/>
              <span className="text-[#1E3A8A] text-xs tracking-[0.2em] uppercase">Seu Mentor: Everton Ferrari – Trainer em PNL</span>
            </div>

            <div className="flex flex-col items-start mb-8">
              <GradualSpacing
                text="Everton"
                className="text-5xl md:text-7xl font-serif font-light text-[#111827] justify-start"
              />
              <GradualSpacing
                text="Ferrari"
                className="text-5xl md:text-7xl font-serif font-light text-[#111827] justify-start"
              />
            </div>

            {/* Separador ornamental – após nome */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-[1.5px]" style={{ background: "linear-gradient(90deg, #C9A227, rgba(201,162,39,0.08))" }}/>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7"   stroke="#C9A227" strokeWidth="1.2"/>
                <circle cx="8" cy="8" r="3.5" stroke="#C9A227" strokeWidth="0.6" strokeDasharray="1.5 2.5"/>
                <circle cx="8" cy="8" r="2"   fill="#C9A227" opacity="0.75"/>
              </svg>
            </div>

            <p className="text-[#1E3A8A] font-serif italic text-xl mb-8">Especialista em Comportamento Humano e Quebra de Crenças.</p>

            <div className="space-y-5 text-[#6B7280] text-base md:text-lg font-sans font-light leading-relaxed mb-12">
              <p>Se você chegou até aqui, talvez esteja procurando mais do que respostas.<br/>Talvez esteja procurando clareza.</p>
              <p>Eu sou Everton Ferrari, trainer em Programação Neurolinguística (PNL), especialista em crenças e valores humanos, mentor de transição de carreira e negócios e criador da técnica <strong className="text-[#0F1B3D] font-medium">Volta Pra Casa</strong>.</p>
              <p><strong className="text-[#0F1B3D] font-medium">Meu trabalho não é motivar pessoas.</strong><br/>É ajudá-las a enxergar com clareza os padrões invisíveis que influenciam suas escolhas e conduzi-las de volta ao lugar onde identidade, valores e decisões caminham na mesma direção.</p>
              <p>Ao longo de mais de 500 horas conduzindo processos de transformação humana, tenho acompanhado pessoas que já conquistaram muito por fora, mas sabem que existe algo dentro delas pedindo mais verdade, mais alinhamento e mais sentido.</p>
              <p className="text-[#0F1B3D] font-medium italic">Você não está travado. Está confortável.</p>
            </div>

            {/* Separador ornamental – antes dos stats */}
            <div className="flex items-center gap-3 mb-8">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7"   stroke="#C9A227" strokeWidth="1.2"/>
                <circle cx="8" cy="8" r="3.5" stroke="#C9A227" strokeWidth="0.6" strokeDasharray="1.5 2.5"/>
                <circle cx="8" cy="8" r="2"   fill="#C9A227" opacity="0.75"/>
              </svg>
              <div className="flex-1 h-[1.5px]" style={{ background: "linear-gradient(90deg, rgba(201,162,39,0.7), rgba(201,162,39,0.04))" }}/>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif text-[#1E3A8A] mb-1">+10 anos</p>
                <p className="text-xs uppercase tracking-widest text-[#9CA3AF]">Experiência</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-[#1E3A8A] mb-1">Puro PNL</p>
                <p className="text-xs uppercase tracking-widest text-[#9CA3AF]">Metodologia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="px-6 py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0 hidden md:block">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl md:text-6xl font-serif font-light text-white leading-tight">
            Assuma agora o comando da sua
          </h2>
          <p className="italic text-4xl md:text-6xl font-serif font-light text-[#4169E1] leading-tight">
            própria existência.
          </p>
        </div>
        <p className="text-[#9CA3AF] text-xl font-sans font-light mb-16 max-w-2xl mx-auto leading-relaxed">
          O primeiro passo é um breve contato via WhatsApp para entendermos se este é o seu momento e se eu sou o mentor certo para você.
        </p>
        <div className="flex flex-col items-center gap-8">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex justify-center"
          >
            <ParticleButton 
              className="bg-[#4169E1] hover:bg-[#3158c9] text-white px-10 py-6 text-lg md:px-16 md:py-8 md:text-2xl rounded-full shadow-2xl shadow-blue-600/20 w-full md:w-auto"
            >
              Iniciar meu Realinhamento
            </ParticleButton>
          </a>
          <p className="text-[#9CA3AF] text-sm font-sans tracking-[0.2em] uppercase opacity-50">
            Apenas para quem busca verdade
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { label: "O Método", href: "#metodo" },
        { label: "Sobre Mim", href: "#sobre" },
        { label: "Contato", href: WHATSAPP_LINK },
      ],
    },
    {
      title: "Especialidades",
      links: [
        { label: "PNL", href: "#metodo" },
        { label: "Crenças", href: "#metodo" },
        { label: "Valores", href: "#metodo" },
        { label: "Mentoria", href: WHATSAPP_LINK, pulse: true },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Instagram size={18} className="text-[#4169E1]" />,
      text: "@everton.ferrari",
      href: INSTAGRAM_LINK,
    },
    {
      icon: <MessageCircle size={18} className="text-[#4169E1]" />,
      text: "+55 47 99148-9716",
      href: WHATSAPP_LINK,
    },
    {
      icon: <MapPin size={18} className="text-[#4169E1]" />,
      text: "Atendimento Online & Presencial",
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: INSTAGRAM_LINK },
    { icon: <MessageCircle size={20} />, label: "WhatsApp", href: WHATSAPP_LINK },
  ];

  return (
    <footer className="bg-black relative h-fit overflow-hidden">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <img 
                src={LOGO_URL} 
                alt="Everton Ferrari Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Trainer em PNL e Mentor de Comportamento Humano. Devolvendo clareza e propósito através da quebra de crenças.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#4169E1] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#4169E1] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-[#4169E1] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-800 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-gray-400">
          {/* Social icons */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#4169E1] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Everton Ferrari. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="EVERTON" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

const NAV_LINKS = [
  { label: "Início", href: "#" },
  { label: "O Método", href: "#metodo" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-[#1E3A8A] selection:text-white overflow-x-hidden">
      <GrainOverlay />
      <Navbar
        logoUrl={LOGO_URL}
        logoAlt="Everton Ferrari Logo"
        links={NAV_LINKS}
        ctaLabel="Fale Comigo"
        ctaHref={WHATSAPP_LINK}
      />
      <div className="pt-[64px]">
      <HeroSection />
      <AuthoritySection />
      <PainSection />
      <MethodSection />
      <FilterSection />
      <TestimonialsSection />
      <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
