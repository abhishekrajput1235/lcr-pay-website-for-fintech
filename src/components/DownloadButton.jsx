import { motion } from "framer-motion";
import { Download } from "lucide-react";

const DownloadButton = () => {
  return (
    <a href="https://play.google.com/store/apps/details?id=com.LcrPay.LcrPay" target="_blank" rel="noopener noreferrer">
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 15px rgba(95, 37, 159, 0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      className="
        px-8 py-3
        rounded-full
        font-semibold tracking-wide
        text-white
        flex items-center justify-center gap-2
        bg-[#5F259F]
        transition-all duration-300
        shadow-md hover:shadow-lg
      "
    >
      <Download className="w-5 h-5 text-white" />
      Download App
    </motion.button>
    </a>
  );
};

export default DownloadButton;
