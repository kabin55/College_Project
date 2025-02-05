import { Api } from "./Base"

export const SignUp = async (userData) => {
    const newUser = await Api.post(`/auth/signUp`, userData);
    return newUser;
};