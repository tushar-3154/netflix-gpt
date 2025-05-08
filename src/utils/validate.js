export const checkValidData = (email, password,name) =>{
    

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    // Full Name must contain at least one uppercase letter, one lowercase letter, and at least 2 characters
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    // Password must contain at least one number, one uppercase letter, one lowercase letter, and at least 8 characters
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if(!isEmailValid) return "Email ID is not valid";
    if(!isNameValid) return "Full Name is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}