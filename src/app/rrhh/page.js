'use client'

import { useState } from "react"
import { ArrowLeft, Plus, Search, Filter, MoreVertical, ChevronDown, UserPlus, Calendar, FileText } from "lucide-react"
import Link from 'next/link'

export default function HumanResources() {
    const [searchTerm, setSearchTerm] = useState("")

    const employees = [
        { id: 1, name: "Ana García", position: "Desarrollador Senior", department: "Tecnología", status: "Activo", startDate: "2020-03-15" },
        { id: 2, name: "Carlos Rodríguez", position: "Gerente de Ventas", department: "Ventas", status: "Activo", startDate: "2018-07-01" },
        { id: 3, name: "Laura Martínez", position: "Diseñador UX", department: "Diseño", status: "Activo", startDate: "2021-01-10" },
        { id: 4, name: "Miguel Sánchez", position: "Analista de Datos", department: "Tecnología", status: "Licencia", startDate: "2019-11-05" },
        { id: 5, name: "Sofia López", position: "Recursos Humanos", department: "RRHH", status: "Activo", startDate: "2017-09-20" },
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
                <h1 className="text-2xl font-bold">Recursos Humanos</h1>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center justify-center transition-colors">
                    <UserPlus className="h-6 w-6 mr-2" />
                    Nuevo Empleado
                </button>
                <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center justify-center transition-colors">
                    <Calendar className="h-6 w-6 mr-2" />
                    Gestionar Ausencias
                </button>
                <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center justify-center transition-colors">
                    <FileText className="h-6 w-6 mr-2" />
                    Informes de RRHH
                </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex-grow relative">
                    <input
                        type="text"
                        placeholder="Buscar empleados..."
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
            </div>

            {/* Employees Table */}
            <div className="bg-white/10 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-black/20">
                            <th className="text-left p-3">Nombre</th>
                            <th className="text-left p-3">Posición</th>
                            <th className="text-left p-3">Departamento</th>
                            <th className="text-left p-3">Estado</th>
                            <th className="text-left p-3">Fecha de Inicio</th>
                            <th className="text-left p-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id} className="border-b border-white/10 hover:bg-white/5">
                                <td className="p-3">{employee.name}</td>
                                <td className="p-3">{employee.position}</td>
                                <td className="p-3">{employee.department}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs ${employee.status === 'Activo' ? 'bg-green-500' : 'bg-yellow-500'
                                        }`}>
                                        {employee.status}
                                    </span>
                                </td>
                                <td className="p-3">{employee.startDate}</td>
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
                <div>Mostrando 1-5 de 5 empleados</div>
                <div className="flex gap-2">
                    <button className="bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 transition-colors">Anterior</button>
                    <button className="bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 transition-colors">Siguiente</button>
                </div>
            </div>
        </div>
    )
}