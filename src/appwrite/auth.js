import conf from "../conf/conf.js";
import { Client, Avatars, Browser ,Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  avatar;
  constructor() {
    // 🪶: auto runs, first whena class is created
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.avatar = new Avatars(this.client);
  }

  // method: wrapping all the appwrite services
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password }); // BUG was i was taking this without destructuring it
        // call another method to directly log-in
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(
        "Appwrite Service error auth.js :: at createAccount :: ",
        error
      );
      // throw error;
    }
  }
  async getAvatar(){
try {
 const result = this.avatar.getInitials(
    // Browser.AvantBrowser, // code
    // 450, // width (optional)
    // 450, // height (optional)
    // 100 // quality (optional)
  );

  
  return result;
} catch (error) {
  console.log(
    "Appwrite Service error auth.js :: at getAvatar :: ",
    error)
  
} 
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite Service error auth.js :: at login :: ", error);
      // throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get(); //BUG (was): i was not returning this
      // const resultGet = await this.account.get();
      // console.log(" auth.jsAccount getting: :: getCurrentUser() :: resultGet() ", resultGet);
      // return resultGet
    } catch (error) {
      console.log(
        "Appwrite Service error auth.js :: at getCurrentUser :: ",
        error
      );
      // throw error;
    }
    return null;
  }
  async logout() {
    try {
      // return await this.account.deleteSessions(); // This was first condition
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service error auth.js :: at logout :: ", error);
      // throw error;
    }
  }
  
  async flushSessions() {
    try {
      // return await this.account.deleteSessions(); // This was first condition
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service error auth.js :: at logout :: ", error);
      // throw error;
    }
  }
}
//  as one have to create an object of AuthService, so we are directly exporting this as an object itself
const authService = new AuthService(); // exported ready-made object of  'class AuthService'

// export default authService;
export default authService
