'use client'

import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Modal } from '../ui/modal'
import { DemoRequestForm } from '../forms/demo-request'

export function ProductShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scrollY } = useScroll()
  const contentY = useTransform(scrollY, [0, 800], [0, -50])
  const honeycombY = useTransform(scrollY, [0, 800], [0, -100])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section id="product-showcase" className="min-h-screen flex overflow-hidden">
      {/* LEFT SIDE - Yellow Slab */}
      <div className="w-20 bg-mebee-yellow relative hidden lg:block"></div>

      {/* RIGHT SIDE - Main Content */}
      <div className="flex-1 bg-mebee-sage relative">
        {/* Navy Honeycomb Watermark */}
        <motion.div
          className="absolute z-0 w-[350px] aspect-square"
          style={{
            top: "20%",
            right: "10%",
            y: honeycombY,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/MeBee Honeycomb_navy.png"
            alt="MeBee Honeycomb Pattern"
            fill
            sizes="350px"
            style={{ objectFit: "contain", objectPosition: "center" }}
            loading="lazy"
          />
        </motion.div>

        {/* Floating Objects */}
        <motion.div
          style={{ y: contentY }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute w-24 h-16 bg-mebee-yellow/60 z-5"
            style={{ top: "15%", right: "5%" }}
            animate={{
              x: [0, 15, -10, 12, 0],
              y: [0, -10, 20, -5, 0],
              rotate: [0, 8, -5, 10, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-20 h-20 bg-mebee-dark-navy/30 z-5"
            style={{ bottom: "20%", left: "8%" }}
            animate={{
              x: [0, -12, 18, -8, 0],
              y: [0, 15, -25, 10, 0],
              rotate: [0, -12, 15, -8, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto px-8 relative min-h-screen flex flex-col justify-center"
          style={{ y: contentY }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 pt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy leading-tight mb-6 font-articulat">
              See It
              <motion.span
                className="block text-mebee-yellow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                In Action
              </motion.span>
            </h2>
            <p className="text-xl text-mebee-dark-navy max-w-3xl mx-auto leading-relaxed">
              Experience how MeBee transforms your asset workflow from chaos to clarity
            </p>
          </motion.div>

          {/* Screenshot Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Screenshot 1 - Search Functionality */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-mebee-sage/20 to-mebee-navy/10 mb-4 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for search interface screenshot */}
                  <div className="absolute inset-4 border-2 border-dashed border-mebee-navy/30 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-mebee-yellow/80 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <p className="text-mebee-dark-navy font-medium text-center">
                      Search Interface Screenshot
                    </p>
                    <p className="text-mebee-navy/60 text-sm text-center mt-2">
                      Natural language & visual search
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-mebee-dark-navy mb-2 font-articulat">
                  Instant Findability
                </h3>
                <p className="text-mebee-navy/80 leading-relaxed">
                  &ldquo;Show me EU Q4 social assets for Model X in German&rdquo; → Results in seconds
                </p>
              </div>
            </motion.div>

            {/* Screenshot 2 - Localization Workflow */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-mebee-yellow/20 to-mebee-sage/20 mb-4 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for localization workflow screenshot */}
                  <div className="absolute inset-4 border-2 border-dashed border-mebee-navy/30 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-mebee-dark-navy/80 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl text-white">🌍</span>
                    </div>
                    <p className="text-mebee-dark-navy font-medium text-center">
                      Localization Workflow Screenshot
                    </p>
                    <p className="text-mebee-navy/60 text-sm text-center mt-2">
                      Auto-adapt text & formats by market
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-mebee-dark-navy mb-2 font-articulat">
                  Machine-First Localization
                </h3>
                <p className="text-mebee-navy/80 leading-relaxed">
                  Extract copy, translate, adapt formats → Human approval in one place
                </p>
              </div>
            </motion.div>

            {/* Screenshot 3 - Partner Kit Generation */}
            <motion.div
              className="relative lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 shadow-lg">
                <div className="aspect-[21/9] bg-gradient-to-br from-mebee-dark-navy/10 to-mebee-yellow/10 mb-4 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for partner kit screenshot */}
                  <div className="absolute inset-4 border-2 border-dashed border-mebee-navy/30 flex flex-col items-center justify-center">
                    <div className="flex space-x-4 mb-4">
                      <div className="w-12 h-12 bg-mebee-yellow/80 flex items-center justify-center">
                        <span className="text-lg">📦</span>
                      </div>
                      <div className="w-12 h-12 bg-mebee-dark-navy/80 flex items-center justify-center">
                        <span className="text-lg text-white">🔗</span>
                      </div>
                      <div className="w-12 h-12 bg-mebee-sage/80 flex items-center justify-center">
                        <span className="text-lg">🚀</span>
                      </div>
                    </div>
                    <p className="text-mebee-dark-navy font-medium text-center">
                      Partner Kit Generation Screenshot
                    </p>
                    <p className="text-mebee-navy/60 text-sm text-center mt-2">
                      One-click retailer/dealer kits with smart links
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-mebee-dark-navy mb-2 font-articulat">
                      Auto-Generated Kits
                    </h3>
                    <p className="text-mebee-navy/80 text-sm leading-relaxed">
                      Crops, codecs, filenames, and manifests ready for each partner
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-mebee-dark-navy mb-2 font-articulat">
                      Smart Distribution
                    </h3>
                    <p className="text-mebee-navy/80 text-sm leading-relaxed">
                      Links that partners can use immediately, no manual handoff
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-mebee-dark-navy mb-2 font-articulat">
                      Real-Time Updates
                    </h3>
                    <p className="text-mebee-navy/80 text-sm leading-relaxed">
                      Asset changes automatically sync across all partner channels
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-white/50 backdrop-blur-sm p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-mebee-dark-navy mb-4 font-articulat">
              Ready to see your workflow transformed?
            </h3>
            <p className="text-mebee-dark-navy/80 mb-6 max-w-2xl mx-auto">
              Book a 15-minute demo to see how these features work with your actual assets and team workflow.
            </p>
            <Button
              variant="cta-primary"
              size="lg"
              onClick={openModal}
            >
              Book a short demo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Demo Request Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Book Your Demo"
        size="lg"
      >
        <DemoRequestForm onClose={closeModal} />
      </Modal>
    </section>
  )
}