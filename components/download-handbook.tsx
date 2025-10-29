"use client"

import { Download } from "lucide-react"

export const DownloadHandbook = () => (
  <div className="bg-blue-600 text-white">
    <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Akut Bakım Testleri El Kitabı</h2>
      <p className="max-w-xl mx-auto mb-6">Kan gazları ve diğer kritik parametreler üzerine ücretsiz rehberi indirin.</p>
      <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
        <Download className="inline-block mr-2" /> Şimdi İndir
      </button>
    </div>
  </div>
);
