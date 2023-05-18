# capstone-client

This is a mobile application that uses an OpenAI Api back-end server to retrieve and generate baby names based on the choices of gender, letter, and continent.
The Tikl App helps users generate unique and meaningful names for their babies. The app provides a user-friendly interface and offers various features to explore and discover the perfect name for your little one.

## Front-End

The App is very simple to use and goes through the series of pages as follows:
* Start Page
* SignIn Page - Login Credentials
* Gender Page - Pick a baby boy, girl or random choice.
* Pick a Letter - Based on gender choice, the letter color will correspond to the previous choice. Once the letter is chosen, this indicates a darker color upon clicked.
* Pick a Continent - The Continent choice is linked to the previous choices and gives a confirmation to the decision made.
* Render a Result - The OpenAI api generates a name based on every choice.

## Back-End or capstone-server

- The backend is a Node/Express app with one post method that generates a prompt to be sent to the OpenAI text language model. Their API calls this a “completion”. The prompt is in the format “Suggest a <gender> name or gender from a region<continent> starting with the letter <letter>”. 
- The post method receives gender, letter, and continent/region, in the request body of the POST and then calls the OpenAI method to generate a name. This name result (a text string) is returned to the client app and then displayed on the results page.
- The OpenAI language model currently being used is “text-davinci-003” which is one of the more advanced models. We also pass in a “temperature” which is used to provide more variation on subsequent requests if the same prompt is passed a second time.

## Reference

- https://platform.openai.com/docs/api-reference/completions