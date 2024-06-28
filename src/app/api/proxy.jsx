import { getToken } from "@/lib/auth"


export default class ApiProxy {

    static async getHeaders(requireAuth) {
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        const authToken = getToken()
        if (authToken && requireAuth === true) {
            headers["Authorization"] = `Bearer ${authToken}`
        }
        return headers
    }

    static async post(endpoint, object, requireAuth) {
        const jsonData = JSON.stringify(object)
        const headers = await ApiProxy.getHeaders(requireAuth)
        const requestOptions = {
            method: "POST",
            headers: headers,
            body: jsonData
        }
        return await fetch(endpoint, requestOptions)
    }

    static async get(endpoint, requireAuth) {
        const headers = await ApiProxy.getHeaders(requireAuth)
        const requestOptions = {
            method: "GET",
            headers: headers
        }
        return await fetch(endpoint, requestOptions)
    }
}