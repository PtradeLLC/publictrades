export async function postHandler(req, res) {
    try {
        const { data } = req.body;
        console.log("DATA FROM BCK", data);
        res.status(200).json({ message: 'Data received successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'failed to load data' });
    }
}

export default async function POST(req, res) {
    if (req.method === "POST") {
        return postHandler(req, res);
    } else {
        res.status(405).json({ message: 'This method is not allowed' });
    }
}