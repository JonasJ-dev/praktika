// function testStart() {
//     let question = document.getElementById()
// };

function nextQuestion(){
    const questions = document.querySelectorAll('.question');

    for(let i = 0; i < questions.length; i++) {
        if (questions[i].classList.contains('selected')) {
            questions[i].classList.remove('selected');

            if (questions[i+1]) {
                questions[i+1].classList.add('selected');
            }

            break;
        }
    }
}

function selectAnswer(answerIsCorrect){
    // this.querySelector('')
    // // answerIsCorrect
    // document.querySelector('question')
    const question = document.querySelector('.question.selected');
    
    // document.querySelectorAll('.question.selected input').forEach(el => {
    //     el.setAttribute('disabled', true);
    // });

    if (answerIsCorrect) {
        question.querySelector('.correct-answer').classList.add('selected');
    } else {
        question.querySelector('.incorrect-answer').classList.add('selected');
    }
    question.querySelector('.answer').classList.remove('d-none');
}