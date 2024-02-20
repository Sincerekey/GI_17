const express = require("express");
require ('openai/shims/node');
const OpenAI = require("openai");
const cors = require("cors");
const app = express();
// const axios = require("axios");

app.use(cors());
app.use(express.json());
let generatedQuiz = null;

const openai = new OpenAI({
  apiKey: "API_KEY_HERE",

});

app.post("/generate-quiz-questions", async (req, res) => {
  try {
    const { topic, expertise, numQuestions, questionStyle } = req.body;
    if(!topic || !expertise || !numQuestions || !questionStyle) {
      return res.status(400).json({ error: "Please provide all required fields." });
    }
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a quiz generator. The quiz will focus on a specific topic, set at a specific level of expertise, with a specified number of questions, and a unique style of questioning such as a 60's gangster, a pirate, a 50's transatlantic accent, etc. It is absolutely imparative that emobdy the selected style in your questions with the utmost authenticity.
        Send all questions at once numbered starting with the question number starting with '1. '. 
        Your responce should only include the questions (No introduction needed), and questions must be open ended. Let's get started; The topic of this quiz is ${topic}, set at ${expertise} level. This quiz will consist of ${numQuestions} questions and should be presented in a ${questionStyle} style of speaking.`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log("Form submitted");

    // Send the generated questions to the /generated-questions route
    generatedQuiz = completion.choices[0].message.content
      .split("\n")
      .filter((question) => question !== "");
    res.json({ message: "Quiz generated successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while generating the quiz questions.",
    });
  }
});

app.get("/generated-questions", (req, res) => {
  if (generatedQuiz === null) {
    res.status(404).json({ error: "No quiz has been generated yet." });
  } else {
    res.json({ generatedQuiz });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

module.exports = app;
