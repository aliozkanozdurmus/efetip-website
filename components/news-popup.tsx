"use client"

import { X, Calendar, Clock, User } from "lucide-react"

interface NewsPopupProps {
  isOpen: boolean
  onClose: () => void
  news: {
    id: number
    title: string
    content: string
    category: string
    date: string
    readTime: string
    author?: string
  }
}

export default function NewsPopup({ isOpen, onClose, news }: NewsPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 sm:px-8 py-4 sm:py-6">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {news.readTime}
                    </span>
                  </div>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {news.title}
                </h1>
                {news.author && (
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <User size={14} />
                    <span>{news.author}</span>
                  </div>
                )}
              </div>
              
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close popup"
              >
                <X size={20} className="sm:w-[24px] sm:h-[24px]" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-6 sm:px-8 py-6 sm:py-8 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
