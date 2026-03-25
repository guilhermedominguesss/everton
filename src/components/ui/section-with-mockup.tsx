'use client';

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWithMockupProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    primaryImageSrc?: string;
    secondaryImageSrc?: string;
    reverseLayout?: boolean;
    mockupContent?: React.ReactNode;
    className?: string;
    mockupCardClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
    title,
    description,
    primaryImageSrc,
    secondaryImageSrc,
    reverseLayout = false,
    mockupContent,
    className,
    mockupCardClassName,
    titleClassName,
    descriptionClassName,
}) => {

    const containerVariants = {
        hidden: {},
        visible: {
             transition: {
                staggerChildren: 0.3,
            }
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
    };

    const mockupVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 } },
    };

    const layoutClasses = reverseLayout
        ? "md:grid-cols-2 md:grid-flow-col-dense"
        : "md:grid-cols-2";

    const textOrderClass = reverseLayout ? "md:col-start-2" : "";
    const imageOrderClass = reverseLayout ? "md:col-start-1" : "";


    return (
        <section className={cn("relative py-24 md:py-48 bg-[#1c2a3d] overflow-hidden", className)}>
            {/* Animated ambient background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(30,58,138,0.08) 0%, transparent 70%)",
                        top: "-10%",
                        left: "-10%",
                        filter: "blur(80px)",
                    }}
                    animate={{
                        x: [0, 40, -20, 0],
                        y: [0, -30, 20, 0],
                        scale: [1, 1.05, 0.97, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(201,162,39,0.05) 0%, transparent 70%)",
                        bottom: "-15%",
                        right: "-5%",
                        filter: "blur(90px)",
                    }}
                    animate={{
                        x: [0, -30, 15, 0],
                        y: [0, 25, -15, 0],
                        scale: [1, 0.96, 1.04, 1],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(30,58,138,0.04) 0%, transparent 70%)",
                        top: "40%",
                        left: "50%",
                        filter: "blur(70px)",
                    }}
                    animate={{
                        x: [0, -20, 30, 0],
                        y: [0, 15, -25, 0],
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
                <motion.div
                     className={cn("grid grid-cols-1 gap-16 md:gap-12 w-full items-center", layoutClasses)}
                     variants={containerVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.15 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className={cn("flex flex-col items-start gap-6 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0", textOrderClass)}
                        variants={textVariants}
                    >
                         <div className="space-y-4">
                            <h2 className={cn("text-white text-4xl md:text-[56px] font-serif font-bold leading-tight md:leading-[1.1] tracking-tight", titleClassName)}>
                                {title}
                            </h2>
                        </div>

                        <div className={cn("text-[#9CA3AF] text-lg md:text-xl font-sans font-light leading-relaxed", descriptionClassName)}>
                            {description}
                        </div>
                    </motion.div>

                    {/* App mockup/Image Content */}
                    <motion.div
                        className={cn("relative mt-10 md:mt-0 mx-auto w-full max-w-[92vw] md:max-w-[480px]", imageOrderClass)}
                        variants={mockupVariants}
                    >
                        {/* Decorative Background Element */}
                        <motion.div
                             className="absolute w-[300px] h-[320px] md:w-[480px] md:h-[500px] bg-white/[0.02] border border-white/5 rounded-[40px] z-0"
                             style={{
                                top: reverseLayout ? 'auto' : '10%',
                                bottom: reverseLayout ? '10%' : 'auto',
                                left: reverseLayout ? 'auto' : '-15%',
                                right: reverseLayout ? '-15%' : 'auto',
                                transform: reverseLayout ? 'translate(0, 0)' : 'translateY(10%)',
                                filter: 'blur(1px)'
                            }}
                            initial={{ y: 0 }}
                            whileInView={{ y: -30 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {secondaryImageSrc ? (
                                <div
                                    className="relative w-full h-full bg-cover bg-center rounded-[40px]"
                                    style={{
                                        backgroundImage: `url(${secondaryImageSrc})`,
                                    }}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center p-8 opacity-20">
                                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#C9A227]/20 to-transparent" />
                                </div>
                            )}
                        </motion.div>

                        {/* Main Mockup Card */}
                        <motion.div
                            className={cn(
                                "relative w-full h-fit md:min-h-[640px] bg-white/[0.03] rounded-[40px] backdrop-blur-xl border border-white/10 z-10 overflow-visible shadow-2xl shadow-black/50",
                                mockupCardClassName
                            )}
                            initial={{ y: 0 }}
                            whileInView={{ y: 30 }}
                             transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                             viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="px-4 py-8 md:p-12 h-full flex flex-col justify-start">
                                {mockupContent ? mockupContent : (
                                    <div
                                        className="w-full h-full bg-cover bg-center rounded-2xl"
                                        style={{
                                            backgroundImage: `url(${primaryImageSrc})`,
                                        }}
                                    />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Gradient transition to next section (white) */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none z-20" />

            {/* Decorative bottom gradient */}
            <div
                className="absolute w-full h-px bottom-0 left-0 z-0"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(201,162,39,0.15) 0%, rgba(201,162,39,0) 100%)",
                }}
            />
        </section>
    );
};


export default SectionWithMockup;
