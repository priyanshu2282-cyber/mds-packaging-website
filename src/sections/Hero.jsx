import { motion } from "framer-motion";
import logo from "../assets/logo/logo-transparent.png";

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-black to-green-950">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6 pt-24 md:pt-0">

        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src={logo}
          alt="MDS Packaging"
          className="w-40 mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-green-300 to-blue-300 bg-clip-text text-transparent leading-tight pb-2"
        >
          MDS Packaging
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 max-w-3xl text-base md:text-2xl text-gray-300 px-4"
        >
          Innovative Corrugated Packaging Solutions
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-4 max-w-2xl text-gray-400"
        >
          Customized • Sustainable • Reliable Packaging For Modern Industries
        </motion.p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 px-4">
            <span className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                FMCG
            </span>
            <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                Pharmaceuticals
            </span>
            <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm text-orange-300">
                E-Commerce
            </span>
            <span className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                Food Processing
            </span>

            <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                Electronics
            </span>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
  href="#contact"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="rounded-full bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600 hover:scale-105 transition duration-300"
>
  Request Custom Quote
</motion.a>

</div>

    </div>
    <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center text-white">
    
        <span className="text-sm tracking-widest uppercase opacity-70">
            Scroll
        </span>

        <div className="mt-2 h-10 w-6 rounded-full border border-white/50 flex justify-center">
        <div className="mt-2 h-2 w-2 rounded-full bg-white animate-bounce"></div>
    </div>

  </div>
</div>
    </section>
  );
}

export default Hero;