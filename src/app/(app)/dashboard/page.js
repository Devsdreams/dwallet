'use client'
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle,  faTimesCircle, faGear, faTrashAlt,  faArrowDown, faPlus, faArrowUp, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Dropdown from "@/components/Dropdown"
import  { DropdownButton } from "@/components/DropdownLink"
import DialogDelete from '@/components/Dialog'
import { useAuth } from "@/hooks/auth"
import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
const page = () =>{
    const [modalDelete, setModalDelete] = useState(false)
    const deleteUser = () => {
        setModal(false)
    }
    const { user } = useAuth({ middleware: 'auth' })
    const RolPermissionUser = () => {
        setModalRolPermission(false)
    }
    return(
        
        user[0].roles_id !== 3 ? ( <>
        <div className="py-6 px-3">
        
        <div className="max-w-7xl mx-auto sm:px-1 lg:px-1">
        <div className="overflow-hidden shadow-sm sm:rounded-lg">
            <div className="px-8 py-8 pb-8 bg-white h-screen min-h-[500px]">
                <h3 className="font-bold mb-12">Listado de Usuarios</h3>
                <table class="table-fixed w-full border-separate text-left q border-collapse h-auto">
                    <thead className="border-b-2 border-gray-200">
                        <tr className="border-b-2 border-gray-200">
                        <th className="border-b-2 border-gray-200">Usuario</th>
                        <th className="border-b-2 border-gray-200">Rol / Tipo de Usuario</th>
                        <th className="border-b-2 border-gray-200">Fecha Ingreso / Fecha Actualización</th>
                        <th className="border-b-2 border-gray-200">Configuración</th>
                        </tr>
                    </thead>
                    <tbody className="pt-5">
                        <tr>
                        <td className="flex flex-1 items-center space-x-4">
                            <img src="/imagen/default-user.png" width={30} />
                            <h2>Andres Gutierrez</h2>
                        </td>
                        <td>Administrador - <span className="text-sm text-green-400"> <FontAwesomeIcon icon={faCheckCircle} /> Activo</span> </td>
                        <td>24/02/2024 - 24/02/2024</td>
                        
                        <td className="flex flex-1 items-center justify-end space-x-4 py-4">
                        <Dropdown
                            align="right"
                            width="38"
                            trigger={
                                <button className="flex items-center border rounded-full p-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                    <FontAwesomeIcon icon={faGear} />
                                </button>
                            }>
                            <div className="z-50 w-full">
                            {/* Authentication */}
                            <DropdownButton onClick={() => setModalDelete(true)} className="flex px-4 w-full py-2 items-center justify-start text-sm space-x-4 hover:bg-gray-100">
                            <FontAwesomeIcon className="text-red-600" icon={faTimesCircle} />
                                <p>Eliminar</p> 
                                
                            </DropdownButton>
                            </div>
                            
                        </Dropdown>
                            
                            
                        </td>
                        </tr>
                        
                  
                    </tbody>
                </table>
                </div>
                </div>
            </div>
        </div>
        <DialogDelete showModal={modalDelete} hideModals={setModalDelete} widthModal={'auto'}>
        <div className="flex justify-center items-center text-center">
                <FontAwesomeIcon icon={faTrashAlt} className="text-center text-red-600 h-[68px] w-[68px] flex p-0 justify-center" viewBox='0 0 640 512' height={128} width={128} />
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-full px-4 py-8 text-center">
                        <h3 className="text-xl font-bold mb-3">¿Deseas enviar al usuario?</h3>
                        <p>Esta</p>
                    </div>
                </div>
                <div className="flex justify-center space-x-3">
                    <button className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={ deleteUser }>Enviar</button>
                    <button className="px-5 py-2 rounded-md border border-gray-500 hover:bg-gray-500" onClick={ ()=>setModalDelete(false) }>Cancelar</button>
                </div>
        </DialogDelete>
       </> ) : (
        <>
            <div className="py-6 px-3 relative">
        
        <div className="max-w-7xl mx-auto sm:px-1 lg:px-1">
        <div className="overflow-hidden shadow-sm sm:rounded-lg">
            <div className="px-8 py-8 pb-8 bg-white h-auto min-h-[500px] relative">
                <h3 className="font-bold mb-12">Panel de Control</h3>
                <div className="bg-red-200 px-8 py-4 z-10 w-full rounded-[15px] flex items-center mb-5">
                    <h3 className="font-bold text-lg mb-2 pr-3">Tu wallet no ha sido conectada</h3>
                    <p>Para realizar todas las operaciones, transacciones, etc. Debes tener conectada la wallet, cuando se encuentre correctamente 
                        conectada, se habilitará todo.
                    </p>
                    <Link href={'/connect-dwallet'} className="px-10 py-3 bg-red-500 rounded-full text-white ">Conectar</Link>
                </div>
                    <div className="text-3xl font-bold border float-right right-8 top-10 rounded-full w-[auto] px-5 py-2 absolute"><span className="text-sm font-semibold">Disponible</span> $0 </div>
                    <select className="text-sm rounded-full">
                        <option>Escoger Wallet</option>
                    </select>
                    <div className="flex space-x-8 w-full justify-center items-center px-8 py-8 mt-8">
                        <div className=" rounded-[15px] shadow-md px-8 py-8 w-[30%]">
                            <h3 className="text-2xl font-bold text-center mb-4">¿Que Necesitas hoy?</h3>
                            <div className="flex justify-center space-x-8">
                                <div>
                                    <div className="bg-blue-500 px-5 py-3 rounded-full flex justify-center">
                                        <FontAwesomeIcon icon={faArrowUp} className="text-white" />
                                    </div>
                                    <p className="text-center text-md mt-2">Enviar</p>
                                </div>
                                <div>
                                    <div className="bg-blue-500 px-5 py-3 rounded-full flex justify-center">
                                        <FontAwesomeIcon icon={faArrowDown} className="text-white" />
                                    </div>
                                    <p className="text-center text-md mt-2">Recibir</p>
                                </div>
                                <div>
                                    <div className="bg-blue-500 px-5 py-3 rounded-full flex justify-center">
                                        <FontAwesomeIcon icon={faPlus} className="text-white" />
                                    </div>
                                    <p className="text-center text-md mt-2">Comprar</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="py-5 space-y-4">
                        <h3 className="font-bold text-lg mb-8 ">Monedas Disponibles</h3>
                        <div className="flex space-x-8">
                            <div className="flex w-2/6 space-x-4 border rounded-full py-4 px-4 hover:bg-gray-200">
                                <div className="w-[75%] items-center flex">
                                <img src="/imagen/smarchain.png" className="w-[35px] mr-2" />
                                    Smart Chain
                                </div>
                                <div className="w-[10%] items-center flex">
                                    <p className="text-md font-semibold">UBU</p> 
                                    <FontAwesomeIcon icon={faChevronRight} className="text-end ml-2" />
                                </div>
                            </div>
                            <div className="flex w-2/6 space-x-4 border rounded-full py-4 px-4 hover:bg-gray-200">
                                <div className="w-[75%] items-center flex">
                                    <FontAwesomeIcon icon={faEthereum} className="text-black text-3xl mr-2" />
                                    Ethereum
                                </div>
                                <div className="w-[10%] items-center flex">
                                    <p className="text-md font-semibold">UBU</p> 
                                    <FontAwesomeIcon icon={faChevronRight} className="text-end ml-2" />
                                </div>
                            </div>
                            <div className="flex w-2/6 space-x-4 border rounded-full py-4 px-4 hover:bg-gray-200">
                                <div className="w-[75%] items-center flex">
                                    <FontAwesomeIcon icon={faBitcoin} className="text-yellow-500 text-3xl mr-2" />
                                    Bitcoin
                                </div>
                                <div className="w-[10%] items-center flex">
                                    <p className="text-md font-semibold">UBU</p> 
                                    <FontAwesomeIcon icon={faChevronRight} className="text-end ml-2" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex space-x-8">
                            <div className="flex w-2/6 space-x-4 border rounded-full py-4 px-4 hover:bg-gray-200">
                                <div className="w-[75%] items-center flex">
                                    <img src="/imagen/solana.png" className="w-[35px] mr-2" />
                                    Solana
                                </div>
                                <div className="w-[10%] items-center flex">
                                    <p className="text-md font-semibold">UBU</p> 
                                    <FontAwesomeIcon icon={faChevronRight} className="text-end ml-2" />
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>

        
        </>
       )
        
    )
}

export default page