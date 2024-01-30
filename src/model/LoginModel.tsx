class LoginModel {
    constructor(
        public user = "Introduce Usuario",
        public password = "Introduce Password"
    ) {
        this.user = user;
        this.password = password;
    }
}

export default LoginModel;