 # Quickstart: Build your Node.js OpenAI application on Azure App Service
 
 # 1. Get ready of your OpenAI service

## If you are using OpenAI API
1. Create an [OpenAI account](https://platform.openai.com/signup) or [sign in](https://platform.openai.com/login).
2. Navigate to the [API key page](https://platform.openai.com/account/api-keys) and "Create new secret key". (Do not share your API key with others, or expose it in the browser or other client-side code)

## If you are using Azure OpenAI service 
Azure OpenAI Service provides REST API access to OpenAI's powerful language models. Please make sure you already have an Azure subscription ([Create one for free](https://azure.microsoft.com/free/cognitive-services?azure-portal=true))
 and Access granted to the Azure OpenAI service in the desired Azure subscription. (You can apply access at [https://aka.ms/oai/access](https://aka.ms/oai/access?azure-portal=true)). For more details, please refer to [here](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource?pivots=web-portal).
1. Create an Azure OpenAI resource in Azure Portal
2. Deploy a model to Azure OpenAI service. 
* Please navigate to the Model deployments-> Manage Deployments <img width="649" alt="image" src="https://github.com/guohao1995/Openai-service-quick-start/assets/49539832/7376f5bd-213a-44a7-a8ed-51483724abde">

* Please create new deployment selecting a model and configurate with name and advance options. <img width="936" alt="image" src="https://github.com/guohao1995/Openai-service-quick-start/assets/49539832/7ae084c6-c0e1-47ac-a6f9-17e9761a557a">

3. Check and copy Keys and Endpoint in Azure Portal. 

# 2. Develop and Test in local environment
## Configurate the Keys and Endpoint.
Please configurate the Keys and Endpoint (or your API Key) in .env file

If you are using Azure OpenAI service:

`ENDPOINT="https://<Your_Azure_OpenAI_Endpoint>.azure.com/"`

`AZURE_API_KEY="<Your_Azure_OpenAI_API_Key"`

If you are using OpenAI API:

`OPENAI_API_KEY=<Your_Openai_API_Key>`

## Test application locally.

Clone this repository and navigate into the project directory.

* Install the requirements
`npm install`

* Run the app
`npm run dev`


# 3. Create and deploy to Azure App Service
1. Please create an Node.js Azure App Service on Linux. For more details, please refer to [Quickstart: Create a Node.js web app - Azure App Service | Microsoft Learn](https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=linux&pivots=development-environment-azure-portal#create-azure-resources)
2. Please navigate to the deployment center and deploy the application by using local git. You can also use other deployment menthods, for more details, please refer to [NextJS Deployment on App Service Linux - (azureossd.github.io)](https://azureossd.github.io/2022/10/18/NextJS-deployment-on-App-Service-Linux/index.html)

<img width="735" alt="image" src="https://github.com/guohao1995/Openai-service-quick-start/assets/49539832/5297dc0e-76aa-44c4-9363-38045872f8ef">

Copy the remote git repository from Azure Portal, and in local terminal run the following commands in order:

`git add .`

`git commit -m "Initial Commit"`

`git remote add azure https://<sitename>.scm.azurewebsites.net:443/<sitename>.git`

`git push azure master`


<img width="674" alt="image" src="https://github.com/guohao1995/Openai-service-quick-start/assets/49539832/fa3fdea6-3ccc-40e1-a935-01a7ed9f5d69">

