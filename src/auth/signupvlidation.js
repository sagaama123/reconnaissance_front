
function ValidationS(values){
    let errors = {};
    const email_pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const password_pattern = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+$/;
    const cin_pattern = /^\d{8}$/;
    const name_pattern = /^[a-zA-Z]+$/;

    // Validate CIN
    if (values.cin === "") {
        errors.cin = "CIN should not be empty";
    } else if (!cin_pattern.test(values.cin)) {
        errors.cin = "CIN format is incorrect";
    } else {
        errors.cin = "";
    }

    // Validate Nom
    if (values.nom === "") {
        errors.nom = "Nom should not be empty";
    } else if (!name_pattern.test(values.nom)) {
        errors.nom = "Nom format is incorrect";
    } else {
        errors.nom = "";
    }

    // Validate Prenom
    if (values.prenom === "") {
        errors.prenom = "Prenom should not be empty";
    } else if (!name_pattern.test(values.prenom)) {
        errors.prenom = "Prenom format is incorrect";
    } else {
        errors.prenom = "";
    }

    // Validate Email
    if (values.email === "") {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email format is incorrect";
    } else {
        errors.email = "";
    }

    // Validate Password
    if (values.password === "") {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password format is incorrect";
    } else {
        errors.password = "";
    }

    // Validate Gender
    if (values.gender === "") {
        errors.gender = "Please select your gender";
    } else {
        errors.gender = "";
    }


    return errors;
}

export default ValidationS;
