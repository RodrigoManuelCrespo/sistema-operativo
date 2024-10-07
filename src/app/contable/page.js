'use client'

import { useState } from "react"
import { ArrowLeft, Plus, Search, Filter, MoreVertical, DollarSign, PieChart, FileText, ArrowUpRight, ArrowDownRight } from "lucide-react"
import Link from 'next/link'

export default function AccountingSystem() {
    const [searchTerm, setSearchTerm] = useState("")

    const transactions = [
        { id: 1, date: "2023-07-01", description: "Venta de productos", type: "Ingreso", amount: 5000 },
        { id: 2, date: "2023-07-02", description: "Pago de alquiler", type: "Gasto", amount: -1500 },
        { id: 3, date: "2023-07-03", description: "Pago de nómina", type: "Gasto", amount: -3000 },
        { id: 4, date: "2023-07-04", description: "Venta de servicios", type: "Ingreso", amount: 2500 },
        { id: 5, date: "2023-07-05", description: "Compra de suministros", type: "Gasto", amount: -800 },
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
                <h1 className="text-2xl font-bold">Sistema Contable</h1>
            </div>

            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Balance Total</h2>
                    <p className="text-3xl font-bold">$25,000.00</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Ingresos (Este mes)</h2>
                    <p className="text-3xl font-bold text-green-400">$12,500.00</p>
                    <span className="text-green-400 flex items-center"><ArrowUpRight className="h-4 w-4 mr-1" /> 15%</span>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Gastos (Este mes)</h2>
                    <p className="text-3xl font-bold text-red-400">$8,750.00</p>
                    <span className="text-red-400 flex items-center"><ArrowDownRight className="h-4 w-4 mr-1" /> 5%</span>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center justify-center transition-colors">
                    <DollarSign className="h-6 w-6 mr-2" />
                    Nueva Transacción
                </button>
                <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center justify-center transition-colors">
                    <PieChart className="h-6 w-6 mr-2" />
                    Generar Informe
                </button>
                <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center justify-center transition-colors">
                    <FileText className="h-6 w-6 mr-2" />
                    Ver Libro Mayor
                </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex-grow relative">
                    <input
                        type="text"
                        placeholder="Buscar transacciones..."
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
                    Nueva Transacción
                </button>
            </div>

            {/* Transactions Table */}
            <div className="bg-white/10 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-black/20">
                            <th className="text-left p-3">Fecha</th>
                            <th className="text-left p-3">Descripción</th>
                            <th className="text-left p-3">Tipo</th>
                            <th className="text-right p-3">Monto</th>
                            <th className="text-left p-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="border-b border-white/10 hover:bg-white/5">
                                <td className="p-3">{transaction.date}</td>
                                <td className="p-3">{transaction.description}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs ${transaction.type === 'Ingreso' ? 'bg-green-500' : 'bg-red-500'
                                        }`}>
                                        {transaction.type}
                                    </span>
                                </td>
                                <td className={`p-3 text-right ${transaction.amount >= 0 ? 'text-green-400' : 'text-red-400'
                                    }`}>
                                    ${Math.abs(transaction.amount).toFixed(2)}
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
                <div>Mostrando 1-5 de 5 transacciones</div>
                <div className="flex gap-2">
                    <button className="bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 transition-colors">Anterior</button>
                    <button className="bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    )
}