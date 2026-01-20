import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { TranslateClient, TranslateTextCommand } 
from "@aws-sdk/client-translate";

const app = express()
const PORT = 5000
dotenv.config()
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

const translateClient = new TranslateClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
    }
})

app.post("/api/translate", async(req, res) => {
    // console.log("Request body:", req.body);
    const {text, source, target} = req.body

    if (!text || !source || !target) {
        return res.status(400).json({
            error: "Missing required fields",
        });
    }

    try {
        const command = new TranslateTextCommand({
            Text: text,
            SourceLanguageCode: source,
            TargetLanguageCode: target
        })
        const response = await translateClient.send(command)
        res.json({ translatedText: response.TranslatedText })
    } catch (error) {
        console.error("AWS Translate error:", error);
        res.status(500).json({ error: "Translation failed" });
    }
})