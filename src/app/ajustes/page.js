import React from "react"
import { ArrowLeft, Wifi, Bluetooth, Battery, Moon, Bell, Lock, User, Smartphone, HelpCircle } from "lucide-react"
import Link from 'next/link'

export default function AndroidSettings() {
    const settingsOptions = [
        { icon: Wifi, label: "Wi-Fi", description: "Conectado a Mi_Red" },
        { icon: Bluetooth, label: "Bluetooth", description: "Desactivado" },
        { icon: Battery, label: "Batería", description: "85% - En uso" },
        { icon: Lock, label: "Seguridad", description: "Huella digital, PIN" },
        { icon: User, label: "Cuentas", description: "Google, Samsung" },
        { icon: Smartphone, label: "Acerca del sistema", description: "SO" },
    ]

    return (
        <div className="w-full h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col">
            {/* Barra superior */}
            <div className="flex items-center px-4 py-3 bg-black bg-opacity-20 backdrop-blur-md text-white">
                <Link href={"/home"}>
                    <button className="mr-4" aria-label="Volver">
                        <ArrowLeft size={24} />
                    </button>
                </Link>
                <h1 className="text-xl font-semibold">Ajustes</h1>
            </div>

            {/* Barra de búsqueda */}
            <div className="px-4 py-2 bg-black bg-opacity-10">
                <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 flex items-center">
                    <input
                        type="text"
                        placeholder="Buscar en Ajustes"
                        className="bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none flex-grow"
                    />
                </div>
            </div>

            {/* Lista de opciones de configuración */}
            <div className="flex-grow overflow-y-auto">
                {settingsOptions.map((option, index) => (
                    <div
                        key={index}
                        className="flex items-center px-4 py-3 border-b border-white border-opacity-20 text-white"
                    >
                        <option.icon size={24} className="mr-4" />
                        <div className="flex-grow">
                            <h2 className="font-medium">{option.label}</h2>
                            {option.description && (
                                <p className="text-sm text-white text-opacity-70">{option.description}</p>
                            )}
                        </div>
                        <ArrowLeft size={20} className="transform rotate-180 text-white text-opacity-50" />
                    </div>
                ))}
            </div>

            {/* Botón de ayuda */}
            <div className="p-4">
                <button className="w-full bg-white bg-opacity-20 text-white py-2 rounded-full flex items-center justify-center space-x-2">
                    <HelpCircle size={20} />
                    <span>Ayuda y comentarios</span>
                </button>
            </div>
        </div>
    )
}