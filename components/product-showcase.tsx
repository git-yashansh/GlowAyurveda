"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Radiant Glow Serum",
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=250",
    category: "Skincare",
    isNew: true,
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    price: 799,
    originalPrice: 999,
    rating: 4.8,
    reviews: 189,
    image: "/placeholder.svg?height=300&width=250",
    category: "Makeup",
    isBestseller: true,
  },
  {
    id: 3,
    name: "Hydrating Face Mask",
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=250",
    category: "Skincare",
    isNew: false,
  },
  {
    id: 4,
    name: "Luminous Foundation",
    price: 1099,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 298,
    image: "/placeholder.svg?height=300&width=250",
    category: "Makeup",
    isBestseller: true,
  },
]

export default function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="products" className="py-20 bg-white">
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
              Featured Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products, carefully crafted with premium natural ingredients
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  )}
                  {product.isBestseller && (
                    <div className="absolute top-4 left-4 z-10 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Bestseller
                    </div>
                  )}

                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      scale: hoveredProduct === product.id ? 1 : 0.8,
                    }}
                    className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg"
                  >
                    <Heart size={18} className="text-gray-600 hover:text-pink-500 transition-colors" />
                  </motion.button>

                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-pink-600 font-medium">{product.category}</span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-800">₹{product.price}</span>
                      <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white group">
                      <ShoppingCart size={18} className="mr-2" />
                      Add to Cart
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
