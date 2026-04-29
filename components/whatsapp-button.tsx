"use client"

import { MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-[200px] relative">
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm text-foreground font-medium mb-1">Besoin d&apos;aide ?</p>
            <p className="text-xs text-muted-foreground">Discutons de votre voyage sur WhatsApp !</p>
          </div>
          {/* Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
          </div>
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/221707316604"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="Contactez-nous sur WhatsApp"
      >
        {/* Pulse animation rings */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-20 scale-110" />
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-500/60">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Online indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
      </a>
    </div>
  )
}
