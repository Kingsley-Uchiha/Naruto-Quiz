const correctAnswers = ["B", "A", "C", "C", "C", "A", "B", "C", "C", "B"];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    const resultCont = document.querySelector('.result');
    const resultDisplay = document.querySelector('.result span');
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value]
    
    // Check Answers
    for (let i = 0; i < 10; i++) {
        if( userAnswers[i] === correctAnswers[i]) {
            score += 10;
        }
    }
    console.log(score);

    // Display Result
    resultCont.classList.remove('d-none');
    if(score <= 30) {
        resultDisplay.style.color = 'crimson';
    }else if(score >= 70) {
        resultDisplay.style.color = 'green';
    }else {
        resultDisplay.style.color = 'white';
    }
    let oth = 0;
    resultDisplay.textContent = `${oth}%`;
    const counter = setInterval(() => {
        if(oth == score) {
            resultDisplay.textContent = `${oth}%`;
            clearInterval(counter);
        }else {
            oth++;
            resultDisplay.textContent = `${oth}%`;
        }
    }, 50);

    scrollTo(top);
})