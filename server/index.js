const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-noAd6Hu5vicXT3HSBXwaL6ks",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

async function callApi() {
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

      console.log(response.data.choices[0].text)
}

callApi();