"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Beauty Blogger",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "GlowAyurveda has completely transformed my skincare routine. The natural Ayurvedic ingredients make my skin feel amazing, and the results are visible within weeks!",
  },
  {
    id: 2,
    name: "Anjali Patel",
    role: "Makeup Artist",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As a professional makeup artist in Mumbai, I'm very picky about products. GlowAyurveda's cosmetics are top-notch quality and my clients always ask what I'm using!",
  },
  {
    id: 3,
    name: "Meera Reddy",
    role: "Skincare Enthusiast",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I love that all products use traditional Indian herbs. My sensitive skin has never looked better, and I feel connected to our ancient beauty traditions.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50">
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
              What Our Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who love our products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="text-pink-400" size={32} />
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.1 }} className="relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 opacity-20" />
                    </motion.div>

                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "100%", label: "Natural Products" },
            { number: "24/7", label: "Customer Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
