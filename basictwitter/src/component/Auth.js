class Auth{
    ////use localStorage instead of setting through class so that the login persist after refresh the page
    // constructor(){
    //     this.authenticated = false;
    // }

    // login(){
    //     this.authenticated = true;
    // }

    logout(cb){
        // this.authenticated = false;
        sessionStorage.removeItem('name');
        cb();
    }

    isAuthenticated(){
        if (sessionStorage.getItem("name") === null){
            return false;
        }else{
            return true;
        }
        // return this.authenticated;
    }
}

export default new Auth();