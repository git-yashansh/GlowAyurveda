"use client"

import { motion } from "framer-motion"
import { Truck, RefreshCw, Headphones, Gift } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over ₹999",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "7-day hassle-free return policy",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Customer service in Hindi & English",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Gift,
    title: "Loyalty Rewards",
    description: "Earn points with every purchase",
    color: "from-pink-500 to-rose-500",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best shopping experience with premium products and exceptional service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                <feature.icon className="text-white" size={32} />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
