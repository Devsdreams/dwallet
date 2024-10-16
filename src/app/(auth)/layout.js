'use client'

const Layout = ({ children }) => {
    const imagenFront = '/imagen/logo-blanco.png'
    const imagenFondo = '/imagen/fondo_mains.png'
    return (
        <div className="flex w-full text-center justify-center">
            <div className='w-1/2 flex justify-center items-center bg-blue-900' style={{backgroundImage: `url(${imagenFondo})`, backgroundSize: 'auto', backgroundPosition: 'center'}}>
                
                <img src={imagenFront} className='w-[60%] -mt-[3px] ml-[192px]' />

            </div>
            {children}
        </div>
    )
}

export default Layout
