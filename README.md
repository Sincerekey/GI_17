# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Certainly! Here's an updated version of your README with instructions for downloading the application from the provided GitHub repository and opening it in Visual Studio Code:

---

# LRNR App

LRNR is a cutting-edge application powered by React, Node.js, and the OpenAI API. With LRNR, users can generate custom quizzes using OpenAI's advanced algorithms, providing a unique and interactive learning experience. LRNR harnesses the power of OpenAI to create personalized quizzes tailored to users' preferences. By leveraging OpenAI's capabilities, LRNR not only generates quizzes but also evaluates the accuracy of users' responses, offering valuable feedback to enhance learning outcomes. Stay tuned for updates as we continue to evolve LRNR and provide users with an unparalleled learning platform.

## Installation

### Downloading the Application:

1. **Download the Application Zip**:
   - Click on [this link](https://github.com/Leran-Johnson/lrnr-app/archive/refs/heads/main.zip) to download the application as a zip file.

2. **Extract the Zip File**:
   - Once the download is complete, extract the contents of the zip file to your desired location on your local machine.

### Backend Installation:

1. **Install Node.js**: If you haven't already, [download and install Node.js](https://nodejs.org/).
2. **Navigate to the Backend Directory**: Open your terminal and navigate to the directory where your backend code resides (usually named `backend` or similar).
3. **Initialize `package.json`**: Run the following command to create a `package.json` file:
   ```bash
   npm init -y
   ```
4. **Install Required npm Packages**:
   ```bash
   npm install express openai cors axios
   ```

### Frontend Installation:

1. **Ensure Node.js is Installed**: Make sure Node.js is installed on your system. If not, [download and install Node.js](https://nodejs.org/).
2. **Navigate to the Frontend Directory**: In your terminal, navigate to the directory containing your frontend code (usually named `frontend` or similar).
3. **Initialize `package.json`**: Run the following command to create a `package.json` file:
   ```bash
   npm init -y
   ```
4. **Install Required npm Packages**:
   ```bash
   npm install react react-dom react-router-dom typewriter-effect bootstrap cypress jess
   ```

### Additional Steps:

1. **Configure Your Backend**:
   - Set up routes, middleware, and any other necessary configurations in your Express app.
   - Ensure your OpenAI API credentials are correctly configured if you're using the `openai` package.
   - (Security for the API-KEY is imperative so we recommend using a .env to store your API- KEY to be safe)

2. **Configure Your Frontend**:
   - Create React components as needed.
   - Utilize the installed packages in your React components.

### Running the Application:

1. **Start Your Backend Server**:
   - Navigate to your backend directory in the terminal.
   - Run the following command to start the Express server:
     ```bash
     node your-backend-file-name.js
     ```

2. **Start Your Frontend Development Server**:
   - Navigate to your frontend directory in the terminal.
   - Run the following command to start the development server:
     ```bash
     npm start
     ```

3. **Access Your Application**:
   - Open your web browser and go to `http://localhost:3000` (or the port specified by your frontend server) to view your application.

### Opening the Application in Visual Studio Code:

1. **Open Visual Studio Code**:
   - Launch Visual Studio Code on your computer.

2. **Open the Application Folder**:
   - In Visual Studio Code, go to `File > Open Folder...` and navigate to the folder where you extracted the application files.

3. **Start Coding**:
   - You're now ready to start coding and modifying the application as needed!

## Usage

1. **Accessing the Quiz**: 
   - After running both servers, visit the home page.
   - To start a quiz, either click the "Go to quiz" button in the middle of the screen or select the "Quiz" text link in the nav bar.

2. **Setting Quiz Parameters**:
   - Once redirected to the quiz page, choose parameters such as Topic, Expertise, Number of questions, and Question style.
   - Click the submit button to proceed.

3. **Taking the Quiz**:
   - Each question will be presented individually.
   - Type your answer in the input box provided and submit.
   - Receive a grade and an explanation for each answer.
   - Click "Next Question" to move to the subsequent question.

4. **Reviewing Results**:
   - After answering all questions, a "Results" button will appear.
   - Click it to access a comprehensive overview of the quiz along with your answers.



## Testing 
 **Running the backend test**:
 - In the Visual Studio terminal run the code
```
npm run test
```
-  This will run all four test for the backend. The quiz generation Api function and its error handling will be tested.
  
**Running the frontend test**:
- In the Visual Studio terminal run the code
```
npm run cy:open
```
- This will test various routes and client side functionality.




