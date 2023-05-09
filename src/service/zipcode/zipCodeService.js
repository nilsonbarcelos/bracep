import api from "../api"

export async function getZipCode(zipcode){
    try {
        const result = await api.get(`${zipcode}/json/`)
        return result.data
    } catch (error) {
        console.log(error)
        return 'error'
    }
}