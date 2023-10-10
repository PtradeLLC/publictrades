import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export default async function handler(req, res) {
    const { body } = req.body;
    try {
        if (req.method === "POST") {
            const session = await account.createEmailSession(email, password);
            setLoggedInUser(await account.get());



            // export const login = async (email, password, setLoggedInUser) => {
            //     const session = await account.createEmailSession(email, password);
            //     setLoggedInUser(await account.get());
            // };

            // export const register = async (email, password, name, setLoggedInUser) => {
            //     await account.create(ID.unique(), email, password, name);
            //     await login(email, password, setLoggedInUser);
            // };

            // export const logout = async (account, setLoggedInUser) => {
            //     await account.deleteSession("current");
            //     setLoggedInUser(null);
            // };
        }
        res.status(200).json({ message: 'Hello from Next.js!' })
    } catch (error) {
        res.status(500).json({ message: `${error}` })
        throw new Error({ message: error });
    }

}
