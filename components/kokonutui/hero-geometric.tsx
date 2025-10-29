"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-blue-200/30",
            "shadow-[0_8px_32px_0_rgba(59,130,246,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric({
  title1 = "En Parlak Günleri",
  title2 = "Geri Getiriyoruz",
}: {
  title1?: string
  title2?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-indigo-100 blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={400}
          height={100}
          rotate={12}
          gradient="from-blue-200"
          className="left-[-10%] sm:left-[-5%] md:left-[0%] top-[15%] sm:top-[20%] md:top-[25%] lg:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={350}
          height={90}
          rotate={-15}
          gradient="from-indigo-200"
          className="right-[-5%] sm:right-[0%] md:right-[5%] top-[70%] sm:top-[75%] md:top-[80%] lg:top-[75%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={-8}
          gradient="from-cyan-200"
          className="left-[5%] sm:left-[10%] md:left-[15%] bottom-[5%] sm:bottom-[10%] md:bottom-[15%] lg:bottom-[10%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={20}
          gradient="from-blue-100"
          className="right-[15%] sm:right-[20%] md:right-[25%] top-[10%] sm:top-[15%] md:top-[20%] lg:top-[15%]"
        />

        <ElegantShape
          delay={0.8}
          width={120}
          height={30}
          rotate={-25}
          gradient="from-indigo-100"
          className="left-[20%] sm:left-[25%] md:left-[35%] top-[5%] sm:top-[10%] md:top-[15%] lg:top-[10%]"
        />
      </div>

      <div className="relative z-10 container-mobile">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="heading-responsive font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600">{title1}</span>
              <br className="hidden sm:block" />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 ",
                  pacifico.className,
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-responsive text-gray-500 mb-6 sm:mb-8 leading-relaxed font-light tracking-wide max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-6">
              Yenilikçi tasarım ve ileri teknoloji ile laboratuvar ekipmanları alanında mükemmel çözümler sunuyoruz.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <button className="btn-touch px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              Ürünleri Keşfet
            </button>
            <button className="btn-touch px-4 sm:px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300">
              İletişime Geç
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-gray-50/80 pointer-events-none" />
    </div>
  )
}
