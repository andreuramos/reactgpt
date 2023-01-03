import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-noAd6Hu5vicXT3HSBXwaL6ks",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();