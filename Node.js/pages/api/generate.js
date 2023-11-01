const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

// You will need to set these environment variables or edit the following values
const endpoint = process.env.ENDPOINT;
const azureApiKey = process.env.AZURE_API_KEY;
const deploymentId = "test";

export default async function (req, res) {
  if (!azureApiKey) {
    res.status(500).json({
      error: {
        message: "Azure OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid keyword",
      }
    });
    return;
  }

  try {
    const prompt=generatePrompt(animal);
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
    const completion = await client.getChatCompletions(deploymentId, prompt, { maxTokens: 128 });
    res.status(200).json({ result: completion.choices[0].message.content });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    console.error(error);
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${animal},${azureApiKey},${endpoint}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();

  const messages = [
    { role: "system", content: `Assistant is an intelligent chatbot designed to tell joke to users and talk in a fun way` },
    { role: "user", content: `tell me a joke by using following keyword: 
    keyword: ${capitalizedAnimal}
    joke:` },
  ];
return messages;
}
