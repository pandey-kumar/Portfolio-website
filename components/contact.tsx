"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formState)
    // Reset form
    setFormState({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
              Contact Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mx-auto mb-6" />
            <p className="text-gray-300 text-lg">Let&apos;s connect and discuss your project</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px -5px rgba(123, 31, 162, 0.5)",
                  borderColor: "rgba(123, 31, 162, 0.6)",
                }}
                className="glass-effect rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-start">
                  <motion.div
                    className="mr-4 p-3 rounded-full bg-space-accent"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 rgba(123, 31, 162, 0.4)",
                        "0 0 20px rgba(123, 31, 162, 0.6)",
                        "0 0 0 rgba(123, 31, 162, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  >
                    <Mail className="text-neon-purple" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a
                      href="mailto:contact@lionpandey577171@gmail.com"
                      className="text-gray-300 hover:text-neon-blue transition-colors"
                    >
                      contact@lionpandey577171@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px -5px rgba(123, 31, 162, 0.5)",
                  borderColor: "rgba(123, 31, 162, 0.6)",
                }}
                className="glass-effect rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-start">
                  <motion.div
                    className="mr-4 p-3 rounded-full bg-space-accent"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 rgba(123, 31, 162, 0.4)",
                        "0 0 20px rgba(123, 31, 162, 0.6)",
                        "0 0 0 rgba(123, 31, 162, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: 0.5,
                    }}
                  >
                    <Phone className="text-neon-purple" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-neon-blue transition-colors">
                      +91 8935909322
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px -5px rgba(123, 31, 162, 0.5)",
                  borderColor: "rgba(123, 31, 162, 0.6)",
                }}
                className="glass-effect rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-start">
                  <motion.div
                    className="mr-4 p-3 rounded-full bg-space-accent"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 rgba(123, 31, 162, 0.4)",
                        "0 0 20px rgba(123, 31, 162, 0.6)",
                        "0 0 0 rgba(123, 31, 162, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: 1,
                    }}
                  >
                    <MapPin className="text-neon-purple" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-300">phagwara, punjab, India</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px -5px rgba(123, 31, 162, 0.5)",
                  borderColor: "rgba(123, 31, 162, 0.6)",
                }}
                className="glass-effect rounded-xl p-6 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/pandey-kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-space-accent text-neon-purple hover:text-neon-blue transition-colors"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 15px rgba(123, 31, 162, 0.7)",
                    }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/shubhampandey777/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-space-accent text-neon-purple hover:text-neon-blue transition-colors"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 15px rgba(123, 31, 162, 0.7)",
                    }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-space-accent text-neon-purple hover:text-neon-blue transition-colors"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 15px rgba(123, 31, 162, 0.7)",
                    }}
                  >
                    <Twitter size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-6">Send Me a Message</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-space-accent border border-neon-purple/20 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-space-accent border border-neon-purple/20 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-space-accent border border-neon-purple/20 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium flex items-center justify-center hover:shadow-lg hover:shadow-neon-purple/20 transition-all"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
