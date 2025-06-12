"use client"

import { motion } from "framer-motion"
import { Leaf, Award, Heart, Shield } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Leaf,
    title: "100% Ayurvedic",
    description: "All our products are made with certified organic herbs and natural ingredients from India",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by beauty experts and loved by customers across India",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    description: "We never test on animals and are committed to ethical beauty practices",
  },
  {
    icon: Shield,
    title: "Dermatologist Tested",
    description: "All products are tested and approved by certified Ayurvedic doctors",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Beauty That Cares
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                At GlowAyurveda, we believe in the ancient wisdom of Ayurveda combined with modern science. Our mission
                is to provide premium cosmetic products that not only make you look beautiful but also nourish and care
                for your skin using time-tested Indian ingredients.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative z-10">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=480"
                    alt="Natural Beauty Products"
                    width={480}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <Leaf className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-gray-800">5+ Years</div>
                    <div className="text-gray-600">Natural Beauty Expertise</div>
                  </div>
                </div>
              </motion.div>

              {/* Background Elements */}
              <div className="absolute top-10 -right-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-10 right-10 w-40 h-40 bg-rose-200 rounded-full blur-3xl opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
