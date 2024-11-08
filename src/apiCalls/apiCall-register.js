import axios from 'axios'

const kidismsApi = axios.create({
    baseURL: "https://funem-kidsum-lorem-ipsum-backend.onrender.com"
  });

export const createUser = async(userObject)=> {
    try {
        const response = await kidismsApi.post("/users", userObject)
        return response
    } catch (error) {
        console.log(console.log('error creating new user', error))
        if (error.response?.status === 409) {
            const { data } = error.response;
            if (data && data.msg && data.msg.includes('Username')) {
                const usernameOptions = data.suggestions || [];
                console.log('Username suggestions:', usernameOptions);
                throw new Error(`Username already in use. Please choose another username. Username suggestions: ${usernameOptions}`);
            }
            if (data && data.msg && data.msg.includes('email')) {
                throw new Error("Please check your email inbox for futher instructions");
            }
        }
        throw new Error ("internal error creating user")
    } 
}