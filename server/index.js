require("dotenv").config();
const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-noAd6Hu5vicXT3HSBXwaL6ks",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
const port = 3080;

app.get('/',  async (req, res) => {
    const response = await openai.createCompletion({
        "model": "text-davinci-003",
        "prompt": "Say this is a test",
        "max_tokens": 7,
        "temperature": 0,
        "top_p": 1,
        "n": 1,
        "stream": false,
        "logprobs": null,
        "stop": "\n"
      });

      res.json({
          data: response.data
      })
})
app.listen(port, () => {
    console.log(`Example app listening http://localhost:${port}`);
})