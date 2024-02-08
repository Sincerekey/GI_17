import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";
import QuizContext from "../context.js/QuizContext";

export default function Answer({ onAnswerSubmitted, questionIndex, resetLocalResponse }) {
  // const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(questionIndex);
  const navigate = useNavigate();
  const isFirstRender = useRef(true);
  const [localAnswer, setLocalAnswer] = useState(''); // Local state for answer
  const [localResponse, setLocalResponse] = useState('');

  useEffect(() => {
    // Fetch questions from the backend
    fetchQuestions();
  }, []);
  useEffect(() => {
    setCurrentQuestionIndex(questionIndex);
  }, [questionIndex]);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setLocalAnswer("");
    setLocalResponse(""); // Reset localResponse when question changes
  }, [currentQuestionIndex]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [questions]);

  const fetchQuestions = async () => {
    // Pull questions from the backend
    try {
      const response = await fetch("http://localhost:5000/generated-questions");
      const data = await response.json();
      setQuestions(data.generatedQuiz); // This is the array of questions
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  // const userAnswer = () => {
  //   // if (answer !== "" && questions.length > 0) {
  //     // Perform any necessary actions with the user's answer here
  //     console.log("User's answer:", quanswer);
  //     fetchData(questions[currentQuestionIndex]);
  //     console.log(currentQuestionIndex); // Pass the current question to the fetchData function
  //   // }
  // };

  async function fetchData(question) {
    setIsLoading(true);
    try {
      const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true,
      });

      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `You are an answer generator that is answering questions for a quiz that will focus on a coding language. The current question is: "${question}". Take the user's answer "${localAnswer}" and generate a response to whether the user answered the question correctly or not. Give a percentage on how accurately the user answered the question and explain why the user's answer was that percent accurate.`,
          },
        ],
        model: "gpt-3.5-turbo",
      });

      const data = completion.choices[0].message.content;
      console.log(data);
      setLocalResponse(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false); // Set loading to false after the response is received
    onAnswerSubmitted(); // Notify the parent component that the answer has been submitted
  }

  const goToResultsPage = () => {
    navigate("/results");
  };
  // Function to update the answer state using setAnswer from context
  const updateAnswer = (newValue) => {
    setLocalAnswer(newValue); // Update local answer state
    fetchData(questions[currentQuestionIndex]); // Then fetch data

  };

  const showNextQuestionButton = !isLoading && localResponse;
  const showViewResultsButton = currentQuestionIndex === questions.length - 1;

  // const getNextQuestion = () => {
  //   setAnswer("");
  //   setResponse("");
  //   setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  // };

  return (
    <div>
      <h1>Answer</h1>
      {/* <input
        type="text"
        placeholder="Enter your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      /> */}
      <input
        type="text"
        placeholder="Enter your answer"
        value={localAnswer} // Use localAnswer here
        onChange={(e) => setLocalAnswer(e.target.value)} // Update localAnswer
      />
      <button onClick={() => updateAnswer(localAnswer)}>Submit</button>
      {isLoading && <p>Loading...</p>}
      {localResponse && (
        <div>
          <h2>Response</h2>
          <p>{localResponse}</p>
          {/* {showNextQuestionButton && !showViewResultsButton && (
            <button onClick={getNextQuestion}>Next Question</button>
          )} */}
          {showViewResultsButton && (
            <button onClick={goToResultsPage}>View Results</button>
          )}
        </div>
      )}
    </div>
  );
}
