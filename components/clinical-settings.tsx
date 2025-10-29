"use client"

import Link from "next/link"
import { ArrowRight, Users, Heart, Baby, ShieldCheck } from "lucide-react"

export const ClinicalSettings = () => (
  <div className="py-16">
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-semibold text-center mb-8">Klinik Ortamlar</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
          <Heart className="text-orange-500" /> Acil Bakım <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="#" className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
          <Users className="text-orange-500" /> Yoğun Bakım <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="#" className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
          <Baby className="text-orange-500" /> Yenidoğan Yoğun Bakım <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="#" className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
          <ShieldCheck className="text-orange-500" /> Sepsis Tespiti <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
);
