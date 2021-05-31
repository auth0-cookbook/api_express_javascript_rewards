# Rewards API: Express.js + JavaScript Sample

This repository contains a Node.js project that defines an Express API. You'll secure this API with Auth0 to practice making secure API calls from a client application.

## Quick Auth0 Set Up

### Set up the project

Install the project dependencies:

```bash
npm install
```

Create `.env` file under the project directory:

```bash
touch .env
```

Populate `.env` as follows:

```bash
API_SERVER_PORT=6060
CLIENT_ORIGIN_URL=http://localhost:4040
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
```

### Register an Express API with Auth0

- Open the [APIs](https://manage.auth0.com/#/apis) section of the Auth0 Dashboard.

- Click on the **Create API** button.

- Provide a **Name** value such as _Rewards API Server_.

- Set its **Identifier** to `https://api.example.com` or any other value of your liking.

- Leave the signing algorithm as `RS256` as it's the best option from a security standpoint.

- Click on the **Create** button.

> View ["Register APIs" document](https://auth0.com/docs/get-started/set-up-apis) for more details.

### Connect Express with Auth0

Get the values for `AUTH0_AUDIENCE` and `AUTH0_DOMAIN` in `.env` from your Auth0 API registration in the Auth0 Dashboard.

Head back to your Auth0 API page, and **follow these steps to get the Auth0 Audience**:

![Get the Auth0 Audience to configure an API](https://images.ctfassets.net/23aumh6u8s0i/5QNK2SojATbHuWTHaDFHoI/7f6dde667cca2e04a93fbe96a7cdc7bf/api_audience.png)

1. Click on the **"Settings"** tab.

2. Locate the **"Identifier"** field and copy its value.

3. Paste the "Identifier" value as the value of `AUTH0_AUDIENCE` in `.env`.

Now, **follow these steps to get the Auth0 Domain value**:

![Get the Auth0 Domain to configure an API](https://images.ctfassets.net/23aumh6u8s0i/PnKFPlGUcKbYr5WT7KY5v/9a958d18d6b454b52344e0f8b7eb0e76/api_auth0_domain.png)

1. Open the [Auth0 Domain Settings](https://manage.auth0.com/#/tenant/custom_domains)

2. Locate the bold text in the page description that follows this pattern: `tenant-name.region.auth0.com`. That's your Auth0 domain!
   
3. Paste the Auth0 domain value as the value of `AUTH0_DOMAIN` in `.env`.

> The `region` subdomain (`au`, `us`, or `eu`) is optional. Some Auth0 Domains don't have it.

### Run the project

With the `.env` configuration values set, run the API server by issuing the following command:

```bash
npm start
```

## Test the Protected Endpoints

You can get an access token from the Auth0 Dashboard to test making a secure call to your protected API endpoints.

Head back to your Auth0 API page and click on the **"Test"** tab.

If this is the first time that you are setting up a testing application, click on the **"Create & Authorize Test Application"** button.

Locate the section called **"Sending the token to the API"**.

Click on the **cURL** tab of the code box.

Copy the sample cURL command:

```bash
curl --request GET \
  --url http://path_to_your_api/ \
  --header 'authorization: Bearer really-long-string-which-is-test-your-access-token'
```

Replace the value of `http://path_to_your_api/` with your protected API endpoint path (you can find all the available API endpoints in the next section) and execute the command. You should receive back a successful response from the server.

You can try out any of our full stack demos to see the client-server Auth0 workflow in action using your preferred front-end and back-end technologies.

### API Endpoints

These endpoints require the request to include an access token issued by Auth0 in the authorization header.

#### 🔐 Get rewards data

Provides rewards data using a customer ID.

```bash
GET /api/accounts/:id
```

##### Response

###### If rewards data is not found

```bash
Status: 404 Not Found
```

###### If rewards data is found

```bash
Status: 200 OK
```

```json
{
  "id": "9087654321",
  "balance": 830,
  "alerts": {
    "text": false,
    "email": true
  }
}
```
