const request = require("supertest");
const app = require("../server");

describe("Backend Api error handling", () => {
   
    it("should throw error if no quiz has been generated yet", async () => {
        const response = await request(app).get("/generated-questions");

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error', 'No quiz has been generated yet.');
    });
});


describe("Server", () => {
    it("should generate quiz questions", async () => {
        const response = await request(app)
            .post("/generate-quiz-questions")
            .send({
                topic: "History",
                expertise: "Intermediate",
                numQuestions: 5,
                questionStyle: "Pirate",});

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Quiz generated successfully.');
    });

    it("should get generated questions", async () => {
        const response = await request(app).get("/generated-questions");

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('generatedQuiz');
    });
});

describe("Handle nonexsitant variables", () => {
    it("should throw an error", async () => {
        const response = await request(app)
            .post("/generate-quiz-questions")
            .send({
                topic: "History",
                numQuestions: 5,
                questionStyle: "Pirate",});

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Please provide all required fields.');
    });
});