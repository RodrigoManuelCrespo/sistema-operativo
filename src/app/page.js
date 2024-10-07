
'use client'

import React, { useState, useEffect } from "react"
import { Battery, Signal, Wifi, Lock } from "lucide-react"
import Link from 'next/link'

export default function AndroidLockScreen() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('es-ES', options)
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col">
      {/* Barra de estado */}
      <div className="flex justify-between items-center px-6 py-3 bg-black bg-opacity-20 backdrop-blur-md text-white">
        <span className="text-sm font-medium">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <div className="flex items-center space-x-3">
          <Wifi size={16} />
          <Battery size={16} />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-2" aria-label={`La hora es ${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}>
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </h1>
        <p className="text-xl mb-8" aria-label={`La fecha es ${formatDate(currentTime)}`}>
          {formatDate(currentTime)}
        </p>
        <Link href="/home">
          <button
            className="bg-white bg-opacity-20 backdrop-blur-md text-white px-8 py-3 rounded-full flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:bg-opacity-30 transition-all"
            aria-label="Desliza para desbloquear"
          >
            <Lock size={20} />
            <span>Desbloquear</span>
          </button>
        </Link>
      </div>
    </div>
  )
}