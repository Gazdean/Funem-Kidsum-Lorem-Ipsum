import axios from 'axios'

const kidismsApi = axios.create({
    baseURL: "https://funem-kidsum-lorem-ipsum-backend.onrender.com"
  });

export const verifyUserAccount = async(token)=> {
    try {
        console.log(token)
        const response = await kidismsApi.patch("/users/isVerified", null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response)
        return response
    } catch (error) {
        console.log(console.log('error verifying user', error))
        throw new Error ("internal error verifying user")
    } 
}