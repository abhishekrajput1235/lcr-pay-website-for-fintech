import React from "react";
import { motion } from "framer-motion";

const InfoSection = ({ title, description, align = "center" }) => {
  const isLeft = align === "left";
  const alignmentClass = isLeft
    ? "text-left items-start"
    : "text-center items-center";

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-violet-50 to-yellow-50 overflow-hidden">
      <div
        className={`max-w-6xl mx-auto flex flex-col ${alignmentClass} gap-6 px-6`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-violet-600 via-violet-800 to-yellow-500 text-transparent bg-clip-text drop-shadow-sm"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`h-[3px] w-24 bg-gradient-to-r from-violet-600 to-yellow-500 rounded-full ${
            isLeft ? "self-start" : "self-center"
          }`}
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-neutral-700 leading-relaxed tracking-wide text-justify"
        >
          {description}
        </motion.p>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-violet-200 blur-3xl opacity-40 rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow-100 blur-3xl opacity-40 rounded-full -z-10" />
    </section>
  );
};

export default InfoSection;
