"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const ProductCategory = ({ title, description, image, link }: { title: string, description: string, image?: string, link: string }) => (
  <div className="group bg-white flex flex-col">
    {image && (
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
      <div className="mt-auto">
        <Link href={link} className="flex items-center justify-between text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          <span>Daha Fazla Bilgi</span>
          <div className="w-8 h-8 rounded-full border-2 border-blue-200 group-hover:border-blue-600 flex items-center justify-center transition-colors">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </div>
    <div className="h-1 bg-blue-200 group-hover:bg-blue-600 transition-colors duration-300"></div>
  </div>
);
