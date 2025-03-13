// const authModel=require("") // model

const authRegister =async (req,res)=>{ // post request
    // logic to register and insert the user details into the db
    // res.send("") // render some frontend page to show
    res.redirect("")// or simply redirect to home page api created
}

const authLogin=async(req,res)=>{
    // logic to get user credentials from the db and check if user password match and then redirect to home page
    res.redirect("auth/check")// to check
    // same redirect or render as above

}

const authLogout = async(req,res)=>{
    // simpley redirect  to the login page again

    // res...
}

const authMe = async (req,res)=>{
    // get the current user profile
}

const authUpdateProfile = async(req,res)=>{ //put request
    // get the profile page for update
    // like form like interface to make changes (like we get afetr clicking on instagram edit profile page)
    // res.redirect("/auth/me") // the above profle page authMe
}

const authForgetPassword = async(req,res)=>{
    // a logic to show forgot password page and send reset link or something like that
}

const check=async(req,res)=>{
    res.send("hello this is to check");
}




module.exports = {authRegister, authLogin, authLogout, authMe , authUpdateProfile, authForgetPassword,check}


