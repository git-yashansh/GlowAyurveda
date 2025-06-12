"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-rose-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium"
          >
            <Sparkles size={16} />
            New Collection Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              Ayurvedic
            </span>
            <br />
            <span className="text-gray-800">Beauty</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-600 leading-relaxed max-w-lg"
          >
            Discover our premium collection of natural Ayurvedic cosmetics designed to enhance your natural beauty using
            ancient Indian beauty secrets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-6 text-lg group"
            >
              Shop Collection
              <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <ArrowRight size={20} />
              </motion.div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">50K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">100%</div>
              <div className="text-sm text-gray-600">Ayurvedic Ingredients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">4.9★</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Product Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <motion.div animate={floatingAnimation} className="relative z-10">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20 scale-110" />
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Premium Cosmetic Products"
                width={500}
                height={600}
                className="relative z-10 w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-20 -left-10 bg-white rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Premium Quality</div>
                <div className="text-sm text-gray-600">Certified Organic</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-20 -right-10 bg-white rounded-2xl p-4 shadow-xl"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">24h</div>
              <div className="text-sm text-gray-600">Long Lasting</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
