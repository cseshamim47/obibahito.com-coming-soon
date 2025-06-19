"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Heart, Globe } from "lucide-react";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-100 py-20">
      {/* Header */}
      <header className="absolute top-0 w-full p-6 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="ওবিবাহিত.কম"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">01830-844542</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              
              <Image
                src="/logo.png"
                alt="ওবিবাহিত.কম"
                width={320}
                height={96}
                className="h-16 md:h-24 w-auto"
                priority
              />
              
            </div>

            <p className="text-lg text-gray-600 mb-4">
              Bangladesh's Premier Islamic Matrimony Platform
            </p>
          </div>

          {/* Main Message Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-200">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              আমাদের ওয়েবসাইট নির্মাণাধীন রয়েছে
            </h2>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                শীঘ্রই আসছে ইন শা আল্লাহ
              </p>

              <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-blue-500 mx-auto rounded-full"></div>

              <p className="text-lg md:text-xl text-gray-600">
                দোয়া ও সহায়তা কামনা করছি
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Development Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-rose-500 to-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Islamic Values
              </h3>
              <p className="text-gray-600 text-sm">
                Platform built with Islamic principles and values
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Modern Platform
              </h3>
              <p className="text-gray-600 text-sm">
                Advanced matching system with modern technology
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Dedicated support team for your matrimony journey
              </p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Contact Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">যোগাযোগ করুন</p>
                  <p className="text-lg font-semibold text-gray-900">
                    01830-844542
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Follow us:</span>
                <a
                  href="https://www.facebook.com/people/Obibahitocom/61577009515236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                </a>
                <a
                  href="https://www.instagram.com/obibahitodotcom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-50 hover:bg-pink-100 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5 text-pink-600" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-20 p-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2025 ওবিবাহিত.কম - All rights reserved | May Allah bless this
            venture
          </p>
        </div>
      </footer>
    </div>
  );
}
