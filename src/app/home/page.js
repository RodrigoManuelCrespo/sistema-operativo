'use client'

import Link from 'next/link'
import { Bell, Power, Cloud, LockKeyhole, Database, Folder, HardDrive, LayoutDashboard, Package, Settings, Truck, User } from "lucide-react"
import { useState, useEffect } from "react"

export default function ModernOS() {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i)

    const weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']

    return (
        <div className="h-screen w-full bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-white overflow-hidden flex flex-col">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-4">
                <button className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                    <Power className="h-5 w-5" />
                </button>
                <div className="flex items-center space-x-4">
                    <div className="text-sm">
                        <div>{currentDate.toLocaleTimeString()}</div>
                    </div>
                    <Cloud className="h-5 w-5" />
                    <Bell className="h-5 w-5" />
                    <div className="bg-white/20 rounded-full p-1">
                        <User className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="flex-grow grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                        <Link href={"/contable"}>
                            <h2 className="font-bold mb-2">Sistema Contable</h2>
                            <div className="flex justify-between">
                                <div>Ingresos: $10,000</div>
                                <div>Gastos: $7,500</div>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                        <Link href={"/stock"}>
                            <h2 className="font-bold mb-2">Sistema de Gestión</h2>
                            <div>Productos bajos en stock: 5</div>
                        </Link>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                        <Link href={"/rrhh"}>
                            <h2 className="font-bold mb-2">Recursos Humanos</h2>
                            <div className="flex justify-between">
                                <div>Empleados: 150</div>
                                <div>Vacantes: 3</div>
                            </div>
                            <div className="mt-2">Próximas entrevistas: 5</div>
                        </Link>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                        <Link href={"/logistica"}>
                            <h2 className="font-bold mb-2">Logística</h2>
                            <div>Envíos pendientes: 12</div>
                        </Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                        <h2 className="font-bold mb-2">Calendario</h2>
                        <div className="text-sm">
                            <div className="font-bold mb-2">
                                {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                            </div>
                            <div className="grid grid-cols-7 gap-1">
                                {weekDays.map((day) => (
                                    <div key={day} className="text-center font-bold">{day}</div>
                                ))}
                                {emptyDays.map((day) => (
                                    <div key={`empty-${day}`} />
                                ))}
                                {days.map((day) => (
                                    <div
                                        key={day}
                                        className={`text-center p-1 rounded-full ${day === currentDate.getDate() ? 'bg-white/20' : ''
                                            }`}
                                    >
                                        {day}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dock */}
            <div className="mt-auto bg-white/20 rounded-full p-2 flex justify-center space-x-4">
                <Link href={"/"}>
                    <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
                        <LockKeyhole className="h-8 w-8" />
                    </button>
                </Link>
                <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
                    <Package className="h-8 w-8" />
                </button>
                <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
                    <Truck className="h-8 w-8" />
                </button>
                <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
                    <Folder className="h-8 w-8" />
                </button>
                <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
                    <Database className="h-8 w-8" />
                </button>
                <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
                    <HardDrive className="h-8 w-8" />
                </button>
                <Link href={"/ajustes"}>
                    <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
                        <Settings className="h-8 w-8" />
                    </button>
                </Link>
            </div>
        </div>
    )
}