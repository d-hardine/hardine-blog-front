import api from "./api"
import logout from "./logout"
import { jwtDecode } from "jwt-decode"

const auth = async (setUser) => {
    try {
        const authResponse = await api.get('/auth')
        if(authResponse.status === 200) {
            const token = localStorage.getItem('token')
            setUser(jwtDecode(token))
        }
    } catch(error) {
        console.error(error)
        console.log(`you're not authenticated`)
        logout(setUser)
    }
}

export default auth