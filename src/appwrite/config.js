import conf from "../conf/config";
import { Client, Account, ID } from 'appwrite'

export class AppwriteService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    //create a new record of user inside appwrite
    async createUserAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }


    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async isLoggedIn() {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data)
        } catch (error) { }

        return false
    }

    async getCurrentUser() {
        try {
            return this.account.get()
        } catch (error) {
            console.log("getcurrentUser error: " + error)

        }

        return null
    }

    async logout() {
        try {
            return await this.account.deleteSession("current")
        } catch (error) {
            console.log("logout error: " + error)
        }
    }


}

const appwriteService = new AppwriteService()

export default appwriteService