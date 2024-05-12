function Validation(values){
    let error={}
    const email_pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
const password_pattern = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+$/
if (values.email === "") {
error.email = "email should not be empty"
}
else if(!email_pattern.test(values.email)) {
error.email = "Email Didn't match"
}else{
error.email = ""
}
if (values.password === "") {
error.password= "Password should not be empty"
}
else if(!password_pattern.test(values.password)) {
error.password = "Password didn't match"
} else {
error.password = ""
}
return error;
}
export default Validation