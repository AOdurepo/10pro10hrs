const quizData = [
    {
        question: 'How can you access the local flow variables in the Flow Designer?',
        a: 'As help cards in the Help panel',
        b: 'As new icons in the Flow properties',
        c: 'As data pills in the data panel',
        d: 'As seperate tabs on the Home page',
        correct: 'c'
        
    }, {

        question: 'In addition to the article ID, what do the knowledge management notification emails include to determine if an article is relevant?',
        a: 'Article ratings',
        b: 'Date and time',
        c: 'Customer feedback',
        d: 'Title of the article',
        correct: 'd'

    }, {
        question: 'What do you configure to instruct fields how to behave on a form when a UI policy is triggered?',
        a: 'Client Script',
        b: 'UI Policy Action',
        c: 'UI Actions',
        d: 'Data Policy',
        correct: 'b'
    },  {   
        question: 'Which menu provides options related to viewing, configuring, creating favourites and saving form data?',
        a: 'Form Column Menu',
        b: 'Form Personalisation Menu',
        c: 'Form Layout Menu',
        d: 'Form Context Menu',
        correct: 'd'
    }, {
        question: 'What do each record and each field correspond to in a table?',
        a: 'Each record and field corresponds to a column in a table',
        b: 'Each record and field corresponds to a row in a table',
        c: 'Each record corresponds to a column in a table, and each field to a tow on that table',
        d: 'Each record corresponds to a row in a table and each field to a column on that table',
        correct: 'd'
    }
]
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuestion = 0;
let score = 0; 

// loadQuizQuestion() - we want this function to call everytime we submit.

loadQuizQuestion()

// getElementById is used to target elements
// innerText (attribute) is used to insert data into the element(s)

function loadQuizQuestion() {
    const currentQuizQuestion = quizData[currentQuestion]
    questionEl.innerText = currentQuizQuestion.question
    a_text.innerText = currentQuizQuestion.a
    b_text.innerText = currentQuizQuestion.b
    c_text.innerText = currentQuizQuestion.c
    d_text.innerText = currentQuizQuestion.d


    // a_text.innerText = quizData[currentQuestion].a

//    currentQuestion++;
}
  

function getSelected() {
 //   console.log('hi');
    const answerEls = document.querySelectorAll('.answer');
// How would this work vs getElementsByClassName()  ???

// learn more about he forEach() method
     answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            return answerEl.id;

        }
       // if(answer.checked){
            
       // 
     

    });

     return undefined; 

}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if(answer && answer === quizData[currentQuestion].answer) {   
       
        currentQuestion++;   
    }
    
    

            if(currentQuestion < quizData.length) {

                    loadQuizQuestion() }   
            
            else {
                     // ToDo: Show results 
                   alert('You completed this Quiz!')
                }
    // getSelected();
    // loadQuizQuestion();
})