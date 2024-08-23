'use client'

import { useState } from 'react'
import {
  Home,
  Search,
  Folder,
  Settings,
  Terminal,
  Globe,
  Wifi,
  Volume2,
  Battery,
  Clock,
  Mail,
  Calendar,
  Music
} from 'lucide-react'

export default function Component() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  // Update time every second
  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString())
  }, 1000)

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white overflow-hidden">
      {/* Top bar */}
      <div className="flex justify-between items-center bg-black bg-opacity-20 backdrop-blur-md p-2 h-12">
        <div className="text-xl font-bold">ModernOS</div>
        <div className="flex items-center space-x-4">
          <Wifi className="w-5 h-5" />
          <Volume2 className="w-5 h-5" />
          <Battery className="w-5 h-5" />
          <Clock className="w-5 h-5" />
          <span className="text-sm">{currentTime}</span>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Left sidebar */}
        <div className="flex flex-col items-center bg-black bg-opacity-20 backdrop-blur-md w-20 py-6 space-y-6">
          <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-2">
            <Home className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-2">
            <Search className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-2">
            <Folder className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-2">
            <Globe className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-2">
            <Terminal className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-2">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop area */}
        <div className="flex-1 p-6 relative">
          {/* Simulated application window */}
          <div className="absolute top-8 left-8 w-[400px] h-[300px] bg-black bg-opacity-50 backdrop-blur-md border-none shadow-2xl rounded-lg overflow-hidden">
            <div className="flex items-center justify-between bg-white bg-opacity-10 p-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm font-medium">Terminal</span>
              <div></div>
            </div>
            <div className="p-4 font-mono text-sm">
              <p className="opacity-70">user@modernos:~$ ls</p>
              <p className="opacity-90">Agus ponete a estudiar</p>
              <p className="opacity-70">user@modernos:~$ echo Hello, Modern World!</p>
              <p className="opacity-90">Guada deja las granjas</p>
              <p className="opacity-70">user@modernos:~$ _</p>
              <p className="opacity-90">Seba el frio te pega mal</p>
              <p className="opacity-70">user@modernos:~$ _</p>
              <p className="opacity-90">Juli regalame las entradas para sig ragga</p>
              <p className="opacity-70">user@modernos:~$ _</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dock */}
      <div className="flex justify-center mb-4">
        <div className="flex space-x-4 bg-white bg-opacity-10 backdrop-blur-md p-2 rounded-full">
          <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-2">
            <Mail className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-2">
            <Calendar className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-2">
            <Globe className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-2">
            <Music className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
