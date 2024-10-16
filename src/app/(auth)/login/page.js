'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <div className="w-1/2 h-screen  px-24 pt-4  relative justify-center flex items-center text-center">
                <div className="items-center border bg-white/[0.95] px-5 rounded-[12px] w-4/6 ">
                <div className='py-10  '>
                    <h3 className='text-3xl font-light mb-2'>Iniciar Sesión</h3>
                    <p className='text-lg text-gray-500'>Bienvenidos</p>
                <div>
                <AuthSessionStatus className="mb-4 mt-16" status={status} />
                    <form onSubmit={submitForm} className='text-left mt-16'>
                        {/* Email Address */}
                        <div>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                className="block mt-1 w-full rounded-full bg-gray-100"
                                onChange={event => setEmail(event.target.value)}
                                required
                                autoFocus
                                placeholder='Correo Electrónico'
                            />

                            <InputError messages={errors.email} className="mt-2" />
                        </div>

                        {/* Password */}
                        <div className="mt-3">
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                className="block mt-1 w-full rounded-full bg-gray-100"
                                onChange={event => setPassword(event.target.value)}
                                required
                                autoComplete="current-password"
                                placeholder='Contraseña'
                            />

                            <InputError
                                messages={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-center justify-start mt-1">
                            
                            <Link
                                href="/forgot-password"
                                className=" w-full text-left text-sm text-gray-600 hover:text-gray-900">
                                ¿Olvidaste la contraseña?
                            </Link>
                            {/* Remember Me */}
                        <div className="block mt-2">
                            <label
                                htmlFor="remember_me"
                                className="inline-flex items-center">
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    name="remember"
                                    className="rounded-full text-sm border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={event =>
                                        setShouldRemember(event.target.checked)
                                    }
                                />

                                <span className="ml-2 text-sm text-gray-600">
                                    Recuerdame
                                </span>
                            </label>
                        </div>
                        </div>

                        
                                    <div className="mt-8 mb-2 flex justify-center">
                                        <Button className="bg-blue-500 text-white w-[50%] px-5 py-2 lowercase text-md rounded-full">Iniciar Sesión</Button>
                                    </div>
                                    <div className="flex items-center justify-center mt-1">
                            
                                        <Link
                                            href="/register"
                                            className=" w-full text-center text-md text-gray-600 hover:text-gray-900">
                                            ¿No tienes cuenta?
                                        </Link>
                                    </div>
                        
                    </form>
                </div>
                <div className='items-end flex justify-center text-gray-300 mt-5'>
                            System Version 1.0.0
                </div>
           
        </div>
                </div>
            </div>
        
    )
}

export default Login
