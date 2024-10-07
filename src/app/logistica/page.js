'use client'

import { useState } from "react"
import { ArrowLeft, Plus, Search, Filter, MoreVertical, Truck, Package, BarChart2, MapPin, Clock } from "lucide-react"
import Link from 'next/link'

export default function LogisticsSystem() {
    const [searchTerm, setSearchTerm] = useState("")

    const shipments = [
        { id: 1, trackingNumber: "SHP001", destination: "Madrid, España", status: "En tránsito", estimatedDelivery: "2023-07-10" },
        { id: 2, trackingNumber: "SHP002", destination: "Barcelona, España", status: "Entregado", estimatedDelivery: "2023-07-05" },
        { id: 3, trackingNumber: "SHP003", destination: "Valencia, España", status: "En preparación", estimatedDelivery: "2023-07-12" },
        { id: 4, trackingNumber: "SHP004", destination: "Sevilla, España", status: "En tránsito", estimatedDelivery: "2023-07-11" },
        { id: 5, trackingNumber: "SHP005", destination: "Bilbao, España", status: "Retrasado", estimatedDelivery: "2023-07-09" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-white">
            {/* Header */}
            <div className="flex items-center mb-6">
                <Link href={"/home"}>
                    <button className="mr-4 p-2 hover:bg-white/20 rounded-full transition-colors">
                        <ArrowLeft className="h-6 w-6" />
                    </button>
                </Link>
                <h1 className="text-2xl font-bold">Sistema de Logística</h1>
            </div>

            {/* Logistics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Envíos Activos</h2>
                    <p className="text-3xl font-bold">42</p>
                    <span className="text-sm">3 retrasados</span>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Inventario</h2>
                    <p className="text-3xl font-bold">1,250</p>
                    <span className="text-sm">unidades en stock</span>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Eficiencia de Entrega</h2>
                    <p className="text-3xl font-bold">95%</p>
                    <span className="text-sm">a tiempo este mes</span>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center justify-center transition-colors">
                    <Truck className="h-6 w-6 mr-2" />
                    Nuevo Envío
                </button>
                <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center justify-center transition-colors">
                    <Package className="h-6 w-6 mr-2" />
                    Gestionar Inventario
                </button>
                <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center justify-center transition-colors">
                    <BarChart2 className="h-6 w-6 mr-2" />
                    Informes de Logística
                </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex-grow relative">
                    <input
                        type="text"
                        placeholder="Buscar envíos..."
                        className="w-full bg-white/10 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-white/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/50" />
                </div>
                <button className="bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 flex items-center transition-colors">
                    <Filter className="h-5 w-5 mr-2" />
                    Filtros
                </button>
                <button className="bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 flex items-center transition-colors">
                    <Plus className="h-5 w-5 mr-2" />
                    Nuevo Envío
                </button>
            </div>

            {/* Shipments Table */}
            <div className="bg-white/10 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-black/20">
                            <th className="text-left p-3">Nº de Seguimiento</th>
                            <th className="text-left p-3">Destino</th>
                            <th className="text-left p-3">Estado</th>
                            <th className="text-left p-3">Entrega Estimada</th>
                            <th className="text-left p-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shipments.map((shipment) => (
                            <tr key={shipment.id} className="border-b border-white/10 hover:bg-white/5">
                                <td className="p-3">{shipment.trackingNumber}</td>
                                <td className="p-3 flex items-center">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    {shipment.destination}
                                </td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs ${shipment.status === 'Entregado' ? 'bg-green-500' :
                                        shipment.status === 'En tránsito' ? 'bg-blue-500' :
                                            shipment.status === 'Retrasado' ? 'bg-red-500' : 'bg-yellow-500'
                                        }`}>
                                        {shipment.status}
                                    </span>
                                </td>
                                <td className="p-3 flex items-center">
                                    <Clock className="h-4 w-4 mr-2" />
                                    {shipment.estimatedDelivery}
                                </td>
                                <td className="p-3">
                                    <button className="hover:bg-white/10 rounded-full p-1 transition-colors">
                                        <MoreVertical className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
                <div>Mostrando 1-5 de 5 envíos</div>
                <div className="flex gap-2">
                    <button className="bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 transition-colors">Anterior</button>
                    <button className="bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    )
}