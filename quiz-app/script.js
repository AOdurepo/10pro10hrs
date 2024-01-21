const quizData = [
    {
        question: "What are 2 ways articles & questions are organized in the knowledge homepage?(all that apply)",
        multi: true,
        answerChoices: {
            a: 'Article Rating',
            b: 'Category',
            c: 'Knwoledge Base',
            d: 'Article Title',
            correct: 'b' && 'c'
        }
       
        }, {
        question: 'What are the steps for applying an update set an instance?',
        multi: true,
        answerChoices: {
        a: 'Log',
        b: 'Commit',
        c: 'Debug',
        d: 'Comment',
        e: 'Retrieve',
        f: 'Preview',
        correct: 'b' && 'e' && 'f'
        }
        }, {
        question: 'What type of scripts are supported for UI Policies??',
        multi: true,
        a: 'onCellEdit()',
        b: 'onChange()',
        c: 'onLoad()',
        d: 'onSubmit()',
        e: 'onRecords()',
        f: 'onExit()',
        correct: 'a' && 'b' && 'c' && 'd' && 'e'
        }, {
        question: 'What is used to add buttons, links, & context menu items on forms & lists?',
        multi: false,
        a: 'UI Actions',
        b: 'Data Policies',
        c: 'UI Policies',
        d: 'Business Rules',
        e: 'Update Set',
        correct: 'a'
        }, {
        question: 'What is captured in an update set? (All that apply)',
        multi: true,
        a: 'New Data Records',
        b: 'Tasks',
        c: 'Client Scripts',
        d: 'Business Rules',
        e: 'Views',
        f: 'New users & groups',
        g: 'Tables',
        h: 'Modified CIs', 
        correct: 'c' && 'd' && 'e' && 'g'
        }
]


function formatQuestionAnswers() {

for (let i=0; i < quizData.length; i++) {

    quizData[i]


}}