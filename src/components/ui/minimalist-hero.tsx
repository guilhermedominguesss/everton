import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DottedSurface } from './dotted-surface';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logo?: React.ReactNode;
  logoText?: string;
  navLinks: { label: string; href: string }[];
  mainText: React.ReactNode;
  readMoreLink?: string;
  imageSrc: string;
  imageAlt: string;
    overlayText: {
      part1: string;
      part2: string;
      part2Color?: string;
    };
    socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-white/60 transition-colors hover:text-white uppercase"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors hover:text-white">
    <Icon className="h-5 w-5" />
  </a>
);

  // The main reusable Hero Section component
    export const MinimalistHero = ({
      logo,
      logoText,
      navLinks,
    mainText,
    readMoreLink,
    imageSrc,
    imageAlt,
    overlayText,
    socialLinks,
    locationText,
    className,
  }: MinimalistHeroProps) => {
      const [isMobile, setIsMobile] = React.useState(false);

      React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
      }, []);

      return (
          <div
            className={cn(
              'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden p-4 font-sans md:p-12',

            className
          )}
        >
        {/* Base Background and Gradients */}
        <div className="absolute inset-0 -z-20 bg-[#050505]" />
        <DottedSurface className="absolute inset-0 -z-10 opacity-80" dotColor={[0.8, 0.8, 0.8]} />
        
        {/* Cinematographic Overlay Gradients */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(201,162,39,0.08)_0%,transparent_70%)]" />
        </div>
        
        {/* Header */}
        <header className="z-30 flex w-full max-w-7xl items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              {logo || (
                <span className="text-xl font-serif font-bold tracking-wider text-white">
                  {logoText}
                </span>
              )}
            </motion.div>
          <div className="hidden items-center space-x-12 md:flex">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} href={link.href} icon={link.icon} />
              ))}
            </div>
          </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-5 bg-white"></span>
        </motion.button>
      </header>

        {/* Main Content Area */}
        <div className="relative grid w-full max-w-5xl flex-grow grid-cols-3 items-center gap-0">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
              className="z-20 order-1 text-left"
            >
                <div className="max-w-[120px] text-[11px] leading-tight text-white/70 md:max-w-[320px] md:text-base lg:text-xl md:leading-relaxed font-medium">

                {mainText}
              </div>
              {readMoreLink && (
                <a href={readMoreLink} className="mt-2 inline-block text-[10px] font-bold text-white uppercase tracking-widest underline decoration-from-font md:mt-4 md:text-xs">
                  Saiba mais
                </a>
              )}
            </motion.div>

              <div className="relative order-2 flex justify-center items-center h-full">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="absolute z-0 h-[100px] w-[100px] rounded-full bg-[#C9A227]/10 blur-[80px] md:h-[240px] md:w-[240px] lg:h-[280px] lg:w-[280px]"
                  ></motion.div>
                    <motion.img
                      src={imageSrc}
                      alt={imageAlt}
                      className="relative z-10 h-auto w-[110px] max-w-none object-cover transition-all duration-700 md:w-36 lg:w-[160px] md:max-w-full brightness-[1.1] contrast-[1.2]"
                          style={{
                            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                            objectPosition: 'center 15%'
                          }}
                            initial={{ opacity: 0, y: isMobile ? 20 : 180, scale: isMobile ? 1.4 : 3.8 }}
                            animate={{ opacity: 1, y: isMobile ? 40 : 280, scale: isMobile ? 1.8 : 5.2 }}

                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://placehold.co/400x600/14532d/ffffff?text=Mentor`;
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="z-20 order-3 flex items-center justify-end text-right md:justify-start md:text-left"
            >
                <h1 className="text-[1.3rem] font-serif font-bold text-white md:text-4xl lg:text-6xl leading-[0.9] tracking-tighter md:tracking-normal md:whitespace-normal">
                  {overlayText.part1}
                  <br />
                  <span 
                    className="italic" 
                    style={{ color: overlayText.part2Color || '#C9A227' }}
                  >
                    {overlayText.part2}
                  </span>
                </h1>
            </motion.div>

        </div>

        {/* Footer Elements */}
        <footer className="z-30 flex w-full max-w-7xl flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center space-x-6 order-2 md:order-1"
          >
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} href={link.href} icon={link.icon} />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-[10px] font-medium text-white/40 tracking-[0.3em] uppercase order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            {locationText}
          </motion.div>

          <div className="hidden md:block md:w-[100px] md:order-3"></div>
        </footer>
      </div>
    );
  };

