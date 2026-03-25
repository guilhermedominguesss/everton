import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import NeuralBackground from "@/components/ui/flow-field-background";


interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, ...props }, ref) => {

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 25, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden md:flex-row min-h-[100vh]",
          className
        )}
        style={{ background: '#FAF8F4' }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Flow field background - covers entire hero */}
        <div className="absolute inset-0 z-0">
          <NeuralBackground
            color="#22c55e"
            trailOpacity={0.08}
            particleCount={700}
            speed={0.6}
            bgColor="250, 248, 244"
          />
        </div>

        {/* Left Side: Content */}
        <div className="relative flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 xl:p-20" style={{ zIndex: 2 }}>
          {/* Top Section: Main Content (no logo/description) */}
          <div>
            {/* Spacer to replace removed logo header */}
            <div className="mb-16" />

            <motion.main variants={containerVariants} className="space-y-8">
              {slogan && (
                  <motion.p
                    className="text-[10px] tracking-[0.25em] uppercase text-[#0F1B3D]/40 font-medium"
                    variants={itemVariants}
                  >
                    {slogan}
                  </motion.p>
              )}

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.08] text-[#0F1B3D] tracking-tight"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                variants={itemVariants}
              >
                {title}
              </motion.h1>

              <motion.div
                className="h-[2px] w-16"
                style={{
                    background: 'linear-gradient(90deg, #8B6F30 0%, rgba(139,111,48,0.12) 100%)',
                }}
                variants={itemVariants}
              />

              <motion.p
                  className="max-w-lg text-base md:text-lg text-[#0F1B3D] font-light leading-relaxed"
                  variants={itemVariants}
                >
                {subtitle}
              </motion.p>

              <motion.div variants={itemVariants}>
                <a
                  href={callToAction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 bg-[#16a34a] text-white hover:bg-[#15803d] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(22,163,74,0.15)] hover:shadow-[0_6px_30px_rgba(22,163,74,0.25)]"
                  style={{
                    willChange: "transform",
                  }}
                >
                  {callToAction.text}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </motion.main>
          </div>


        </div>

        {/* Mobile image: no clip-path to avoid head crop */}
        <div className="relative w-full h-[58vh] min-h-[380px] md:hidden" style={{ zIndex: 2 }}>
          <img
            src={backgroundImage}
            alt="Everton Ferrari"
            className="absolute inset-0 w-full h-full object-contain object-top"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Desktop image: clip-path animation */}
        <motion.div
          className="relative hidden md:block w-full min-h-[400px] md:w-1/2 md:min-h-full lg:w-2/5"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ zIndex: 2 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: "center top",
            }}
          />
          {/* Soft overlay gradient blending with off-white left side */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(250,248,244,0.4) 0%, transparent 40%), linear-gradient(0deg, rgba(250,248,244,0.2) 0%, transparent 30%)',
            }}
          />
          {/* Subtle gold edge highlight */}
          <div
            className="absolute top-0 left-0 h-full w-[1px]"
            style={{
                background: 'linear-gradient(180deg, transparent 15%, rgba(139,111,48,0.10) 50%, transparent 85%)',
            }}
          />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
