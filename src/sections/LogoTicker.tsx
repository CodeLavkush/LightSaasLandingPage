'use client'
import acmeLogo from "@/assets/logo-acme.png"
import apexLogo from "@/assets/logo-apex.png"
import celestialLogo from "@/assets/logo-celestial.png"
import echoLogo from "@/assets/logo-echo.png"
import pulseLogo from "@/assets/logo-pulse.png"
import quantumLogo from "@/assets/logo-quantum.png"
import Image from "next/image"
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden masked-logo-ticker">
          <motion.div className="flex gap-14 flex-none pr-14" animate={{
            translateX: "-50%",
          }}
            transition={{
              repeatType: "loop",
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}>
            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker" />
            <Image src={apexLogo} alt="Apex Logo" className="logo-ticker" />
            <Image src={celestialLogo} alt="Celestial Logo" className="logo-ticker" />
            <Image src={echoLogo} alt="Echo Logo" className="logo-ticker" />
            <Image src={pulseLogo} alt="Pulse Logo" className="logo-ticker" />
            <Image src={quantumLogo} alt="Quantum Logo" className="logo-ticker" />

            {/* second set of logos */}
            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker" />
            <Image src={apexLogo} alt="Apex Logo" className="logo-ticker" />
            <Image src={celestialLogo} alt="Celestial Logo" className="logo-ticker" />
            <Image src={echoLogo} alt="Echo Logo" className="logo-ticker" />
            <Image src={pulseLogo} alt="Pulse Logo" className="logo-ticker" />
            <Image src={quantumLogo} alt="Quantum Logo" className="logo-ticker" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};