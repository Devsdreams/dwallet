import axios from "@/lib/axios"
import {useEffect} from "react"

export const Users = () =>{
    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const getUser = async ({ setErrors, ...props }) => {

        setErrors([])

        await 
        axios
            .get('/getUsers', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const saveUserNew = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/saveUser', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const updateUser = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .put('/updateUser', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    useEffect( () => {
        getUser()
    },[error])

    return {
        user,
        getUser,
        saveUserNew,
        updateUser
    }
}


