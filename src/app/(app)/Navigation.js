import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, {
    ResponsiveNavButton,
} from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faBookSkull, faCarSide, faCircleInfo, faDashboard, faGear, faHome, faHomeAlt, faHouseDamage, faMoneyBill, faPlus, faSdCard, faSheetPlastic, faUserAlt, faUserPlus, faChevronRight, faChevronUp, faLanguage, faGears, faEnvelope, faPaperPlane, faPaperclip, faToiletPaper, faNewspaper, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faServicestack } from '@fortawesome/free-brands-svg-icons'


const Navigation = ({ user }) => {
    const { logout } = useAuth()
    const nameUrl = usePathname().split('/');
    const [open, setOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState(null)

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName)
    }

    return (
        <nav className="bg-white pt-12 h-screen">

            {/* Menú de acordeón */}
            <div className="sm:-my-px">
                {/* Panel de Control */}
                
                <div>
                    <Link
                        href={'/dashboard'}
                        className={`w-full  text-left text-gray-700 text-md flex font-normal items-center py-2 px-4 pl-8 hover:bg-gray-200 ${nameUrl[1] === 'dashboard' ? 'bg-gray-200' : ''}`}
                    >
                        
                        <FontAwesomeIcon icon={faHome} className='mr-3 text-blue-500 fill-blue-900 w-5 h-5' />
                        <span>Panel de Control</span>
                    </Link>
                </div>

                {/* Configuración */}
                <div>
                { Object.entries(user[0]?.permission).map((permission)=>
                    <div key={permission[0]}>
                        {permission[1].permission_id.includes('read-config-system') && (
                            <>
                    <button
                        onClick={() => toggleMenu('config')}
                        className={`w-full text-left text-gray-700 flex font-normal items-center py-2 px-4 hover:bg-gray-200 ${nameUrl[1] === 'config' ? 'bg-gray-200' : ''}`}
                    >
                        <FontAwesomeIcon 
                            icon={activeMenu === 'config' ? faChevronUp : faChevronRight} 
                            className='mr-2 text-xs text-gray-400'
                        />
                        <FontAwesomeIcon icon={faGear} className='mr-3 text-blue-500 fill-yellow-500 w-5 h-5' />
                        <span>Configuración</span>
                    </button>
                    {activeMenu === 'config' && (
                        <div className="pl-8">
                            { Object.entries(user[0]?.permission).map((permissions)=>
                            <>
                                {permissions[1].permission_id.includes('read-config') && (
                                <Link href="/config" className="block py-2 px-4 text-md text-gray-600 hover:bg-gray-100">
                                <FontAwesomeIcon icon={faGears} className='mr-3 text-blue-900 fill-yellow-500 w-4 h-4' />
                                    Ajustes generales
                                </Link>
                                )}
                            </> 
                            )}
                            { Object.entries(user[0]?.permission).map((permissions)=>
                                <>
                                    {permissions[1].permission_id.includes('read-idiom') && (
                                    <Link href="/config" className="block py-2 px-4 text-md text-gray-600 hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faLanguage} className='mr-3 text-blue-900 fill-yellow-500 w-4 h-4' />
                                        Idioma
                                    </Link>
                                    )}
                                </> 
                            )}
                            { Object.entries(user[0]?.permission).map((permissions)=>
                                <>
                                    {permissions[1].permission_id.includes('read-smtp') && (
                                    <Link href="/config" className="block py-2 px-4 text-md text-gray-600 hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faEnvelope} className='mr-3 text-blue-900 fill-yellow-500 w-4 h-4' />
                                        SMTP
                                    </Link>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                            </>
                        )}
                    </div>
                )}
                </div>
            </div>

            {/* Estado de disponibilidad */}
            <div className='float-left bottom-0 fixed'>
                <div className='text-gray-700 flex font-normal items-center mt-3 py-2 px-4 text-sm' >
                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-3 text-green-100 fill-green-500 w-3 h-3' viewBox="0 0 640 512">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
                    </svg>
                    <span>Versión 1.0.0</span>
                </div>
            </div>
        </nav>
    )
}

export default Navigation

