const express = require("express");
const router = express.Router();
const { authCheck, profileCheck,loginCheck,tokenVerifier } = require("../middlewares/auth");
const {
insertQuestion,fetchQuestion,randomQuizCreation,insertQuiz,getAllQuiz
} = require("../controller/question");



//Route to Fetch Questions
router.post("/get-questions",fetchQuestion);


//Route to Fetch Questions
router.post("/create-random-quiz",randomQuizCreation);





// Route to create user
router.post("/upload-question", insertQuestion );


// Route to save quiz
router.post("/save-quiz", insertQuiz );

// Route to get quiz
router.post("/get-all-quiz", getAllQuiz );



module.exports = router;
