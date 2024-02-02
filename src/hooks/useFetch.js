import axios from "axios"
import { useState } from "react"

export const useFetch = (data) => {
    const [infoApi, setInfoApi] = useState()

    const getApi = () => {
        axios.get(data)
            .then(res => {
                setInfoApi(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return getApi
}


export default useFetch