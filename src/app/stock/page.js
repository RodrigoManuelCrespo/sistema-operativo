'use client'

import { useState } from "react"
import { ArrowLeft, Plus, Search, Filter, MoreVertical, ChevronDown } from "lucide-react"
import Link from 'next/link'

export default function StockManagement() {
    const [searchTerm, setSearchTerm] = useState("")

    const stockItems = [
        { id: 1, name: "Laptop Dell XPS 13", sku: "LAP-DEL-001", category: "Electrónicos", quantity: 50, price: 1299.99 },
        { id: 2, name: "Monitor LG 27'", sku: "MON-LG-001", category: "Electrónicos", quantity: 30, price: 299.99 },
        { id: 3, name: "Teclado Mecánico Logitech", sku: "TEC-LOG-001", category: "Accesorios", quantity: 100, price: 129.99 },
        { id: 4, name: "Mouse Inalámbrico Microsoft", sku: "MOU-MIC-001", category: "Accesorios", quantity: 75, price: 49.99 },
        { id: 5, name: "Disco Duro Externo 1TB", sku: "HDD-EXT-001", category: "Almacenamiento", quantity: 40, price: 79.99 },
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
                <h1 className="text-2xl font-bold">Gestión de Stock</h1>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex-grow relative">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
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
                    Añadir Producto
                </button>
            </div>

            {/* Stock Table */}
            <div className="bg-white/10 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-black/20">
                            <th className="text-left p-3">Nombre del Producto</th>
                            <th className="text-left p-3">SKU</th>
                            <th className="text-left p-3">Categoría</th>
                            <th className="text-left p-3">Cantidad</th>
                            <th className="text-left p-3">Precio</th>
                            <th className="text-left p-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockItems.map((item) => (
                            <tr key={item.id} className="border-b border-white/10 hover:bg-white/5">
                                <td className="p-3">{item.name}</td>
                                <td className="p-3">{item.sku}</td>
                                <td className="p-3">{item.category}</td>
                                <td className="p-3">{item.quantity}</td>
                                <td className="p-3">${item.price.toFixed(2)}</td>
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
                <div>Mostrando 1-5 de 5 productos</div>
                <div className="flex gap-2">
                    <button className="bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 transition-colors">Anterior</button>
                    <button className="bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    )
}