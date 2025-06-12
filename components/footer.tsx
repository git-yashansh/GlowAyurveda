"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Shop: ["All Products", "Skincare", "Makeup", "New Arrivals", "Best Sellers"],
    Company: ["About Us", "Our Story", "Careers", "Press", "Blog"],
    Support: ["Contact Us", "FAQ", "Shipping", "Returns", "Size Guide"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                GlowBeauty
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Discover the power of natural beauty with our premium collection of cosmetics. Enhance your natural glow
              with products that care for your skin.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4 text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 + sectionIndex * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 GlowBeauty. All rights reserved.</p>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart size={16} className="text-pink-500 fill-current" />
            </motion.div>
            <span>by Kumar Yashansh</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
