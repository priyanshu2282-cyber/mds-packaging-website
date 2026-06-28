import { motion } from "framer-motion";
import video from "../assets/videos/company-video.mp4";

function VideoSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Packaging Innovation In Action
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Discover how MDS Packaging is building innovative,
            sustainable and high-performance corrugated packaging
            solutions for modern industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full"
          >
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>

      </div>
    </section>
  );
}

export default VideoSection;