'use client'

import Button from '@/components/Button'
import { useState } from 'react'

const Page = () => {
    
    
    const [viewWallet, setViewWallet] = useState(false)

   const _viewWallet = () => {
    (viewWallet) ? 
    setViewWallet(false) : setViewWallet(true)
   }

    return (
             
              (!viewWallet) ? (<>
                <div className="w-full h-screen  px-24 pt-4 pb-8 relative justify-center flex items-center text-center">
                    <div className="w-1/2 items-center bg-white/[0.95] px-5 py-10 rounded-xl  shadow-lg">
                        <div className="mb-4 text-sm text-gray-600">
                            Conecta tu wallet con la aplicación para obtener todos los beneficios.
                        </div>
                        <div className="flex items-center justify-center mt-4 ">
                            <Button onClick={_viewWallet} className="text-sm rounded-full px-8 bg-blue-600 text-white">Activar wallet</Button>
                        </div>
                    </div>
                </div>
                </>) : (
                    <>
                    <div className="w-full h-screen  px-24 pt-4 pb-8  relative justify-center flex items-center text-center">
                    <div className="items-center bg-white/[0.95] px-5 py-10 rounded-xl w-4/6 shadow-lg">
                    <div className='flex justify-center'>
                    <img src='/imagen/QR.png'></img>
                    </div>
                    
                    <div className="flex items-center justify-center mt-4 ">
                            <Button onClick={_viewWallet} className="text-sm rounded-full px-8 bg-blue-600 text-white">Volver atrás</Button>
                        </div>
                    </div>
                </div>
                        
                    </>
                )
                
            
              
    )
}

export default Page
