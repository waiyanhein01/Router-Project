import { api } from "./baseurl";

export const Authentications = async (arg,form) => {
  try {
    const { data } = await api.get(arg, form);
    const checkUser = data.find((d) => d.email === form.email )
    if(!checkUser) {
        throw new Error("User Not Found");
    }

    const comparePassword = checkUser.password === form.password;
    if(!comparePassword){
        throw new Error("Password Not Correct")
    }
    return checkUser;
  } catch (error) {
    throw new Error(error.message);
  }
};