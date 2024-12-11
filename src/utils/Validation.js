export const  checkValidation = (email,password,userName)=>{
  
let  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailRegex.test(email))
    return "Enter valid email";
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!regex.test(password)) return "Enter valid password";
    let userRegex = /^[a-zA-Z\-]+$/;
    if(!userRegex.test(userName)) return "Enter valid Username";
    return null;

}



