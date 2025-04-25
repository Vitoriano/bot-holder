
class AuthService {

  private baseUrl: string = "https://api.example.com/auth";

  doLogin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      resolve(true);
    })
  }
}


export default AuthService;