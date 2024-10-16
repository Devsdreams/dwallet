'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Page = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
    <>
    <div className="w-1/2 h-screen  px-24 pt-4  relative justify-center flex items-center text-center">
        <div className="mb-5 px-16 py-10 text-center w-full border rounded-md ">
                           
                            <h2 className="text-3xl font-bold mb-3">Registrarme</h2>
                            <p className='mb-12'>Llena esta información</p>
        
        <form onSubmit={submitForm} className='text-left w-full'>
            {/* Name */}
            <div>
                <Input
                    id="name"
                    type="text"
                    value={name}
                    className="block mt-4 w-full rounded-full"
                    onChange={event => setName(event.target.value)}
                    placeholder="Nombres"
                    required
                    autoFocus
                />

                <InputError messages={errors.name} className="mt-2" />
            </div>
            <div>
                

                <Input
                    id="lastname"
                    type="text"
                    value={lastname}
                    className="block mt-4 w-full rounded-full"
                    onChange={event => setLastname(event.target.value)}
                    required
                    placeholder="Apellidos"
                    autoFocus
                />

                <InputError messages={errors.lastname} className="mt-2" />
            </div>

            {/* Email Address */}
            <div className="mt-4">
             

                <Input
                    id="email"
                    type="email"
                    value={email}
                    className="block mt-4 w-full rounded-full"
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Correo Electrónico"
                    required
                />

                <InputError messages={errors.email} className="mt-2" />
            </div>

            {/* Password */}
            <div className="mt-4">
                <Input
                    id="password"
                    type="password"
                    value={password}
                    className="block mt-4 w-full rounded-full"
                    onChange={event => setPassword(event.target.value)}
                    required
                    placeholder="Contraseña"
                    autoComplete="new-password"
                />

                <InputError messages={errors.password} className="mt-2" />
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
                <Input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    className="block mt-4 w-full rounded-full"
                    placeholder="Confirmar contraseña"
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    required
                />

                <InputError
                    messages={errors.password_confirmation}
                    className="mt-2"
                />
            </div>

            <div className="items-center mt-4 text-center">
                <Button className=" w-full mb-5 mt-4">Registrarme</Button>
                <Link
                    href="/login"
                    className="underline text-sm text-gray-600 hover:text-gray-900 mt-10">
                    Ya tienes cuenta?
                </Link>
            </div>
        </form>
        </div>
        </div>
    </>
        
    )
}

export default Page
