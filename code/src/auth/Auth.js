class Auth {
  authenticated = false;

  login(data) {
    console.log(data);
    localStorage.setItem("Token", data?.token);
    localStorage.setItem("userData", JSON.stringify(data?.result));
    if (data?.token) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }
  token() {
    const token = localStorage.getItem("Token");
    return token;
  }
  logout() {
    localStorage.removeItem("Token");
    this.authenticated = false;
  }

  userData() {
    const data = JSON.parse(localStorage.getItem("userData"));
    return data;
  }
  isUserAuthenticated() {
    if (localStorage.getItem("Token")) {
      return true;
    } else {
      return false;
    }
  }
}

export default new Auth();
