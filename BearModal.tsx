import { motion, AnimatePresence } from "motion/react";

// Bear mascot image - Custom bear from Imgur (used for both main and vibrating bear)
const bearImage = "https://i.imgur.com/DuvwmDi.png";

interface BearModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BearModal({ isOpen, onClose }: BearModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-white/20 shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white text-xl transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>

              {/* Vibrating Bear in Corner */}
              <motion.div
                className="absolute bottom-4 right-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: [-0.5, 0.5, -0.5, 0.5, 0],
                  y: [-0.3, 0.3, -0.3, 0.3, 0],
                }}
                transition={{
                  opacity: { delay: 0.8, duration: 0.3 },
                  scale: { delay: 0.8, duration: 0.3 },
                  x: {
                    delay: 0.8,
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                  y: {
                    delay: 0.8,
                    duration: 0.25,
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }}
              >
                <img
                  src={bearImage}
                  alt="Vibrating bear mascot"
                  className="w-8 h-8 drop-shadow-lg opacity-80"
                />
              </motion.div>

              {/* Bear Image */}
              <div className="text-center mb-6">
                <img
                  src={bearImage}
                  alt="Bear mascot"
                  className="w-20 h-20 mx-auto drop-shadow-lg border-2 border-white/30 rounded-full p-1"
                />
              </div>

              {/* Content */}
              <div className="text-center text-white">
                <motion.h2
                  className="text-2xl mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Voltairenoel Encarnacion
                </motion.h2>

                <motion.div
                  className="space-y-3 text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="leading-relaxed">
                    About me, I’m Voltaire. I love running,
                    playing piano, and always trying new things.
                    One day I’ll be an aerospace engineer
                  </p>

                  <div className="bg-white/5 rounded-lg p-4 mt-4">
                    <p className="text-sm text-blue-300">
                      <strong>Contact Me:</strong>{" "}
                      voltemf@gmail.com
                    </p>
                  </div>

                  <div className="flex justify-center mt-6">
                    <motion.button
                      onClick={onClose}
                      className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-lg transition-colors border border-purple-400/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}