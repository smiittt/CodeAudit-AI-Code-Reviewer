const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
    Your task is to thoroughly review the provided code. Identify any errors, issues, or areas where the code can be optimized. Pay close attention to best practices such as code readability, performance optimization, security considerations, and adherence to coding conventions. Look for potential improvements and suggest changes to enhance the overall quality of the code.

  Once the review is done, provide the following structured feedback:
  
  Overview: A brief summary of the overall code and its purpose.
  Identified Issues: A list of specific errors or issues you found in the code.
  Best Practices: Suggestions on best practices that should be followed in the code.
  Code Improvements: Detailed explanation of improvements, including changes in logic, structure, or formatting.
  Updated Code: The improved version of the code with necessary corrections and enhancements, ready for implementation.
  
  The goal is to ensure the code is clean, efficient, and follows industry standards, making it easier to maintain and scalable in the long term.
    `,
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = { generateContent };
