import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-100 via-white to-yellow-100 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center p-6 max-w-md"
      >
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="flex justify-center mb-4"
        >
          <AlertTriangle className="w-24 h-24 text-violet-500 drop-shadow-md" />
        </motion.div>

        <h1 className="text-6xl font-extrabold mb-3 text-violet-700">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The page you’re looking for might have been moved or deleted.
        </p>

        <Link
          to="/"
          className="inline-block bg-violet-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-violet-700 hover:shadow-lg transition-all duration-300"
        >
          ⬅ Back to Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 text-sm text-gray-400"
      >
        © {new Date().getFullYear()} LCR PAY — All Rights Reserved
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
