const jsquiz = [
    {
        ques:"Q.1: HTML stands for",
        a:"HyperText Markup Language",
        b:"HyperText Machine Language",
        c:"HyperText Marking Language",
        d:"HighText Marking Language",
        correct:"a"

    },
    {
        ques:"Q.2: What is the correct syntax of doctype in HTML5",
        a:"</doctype html>",
        b:"<doctype html>",
        c:"<doctype html!>",
        d:"<!doctype html>",
        correct:"d"  
    },
    {
        ques:"Q.3: Which of the following is used to read an HTML page and render it?",
        a:"Web server",
        b:"Web network",
        c:"Web browser",
        d:"web matrix",
        correct:"c"

    },
    {
        ques:"Q.4: sWhich of the following tag is used for inserting the largest heading in HTML",
        a:"head",
        b:"<h1>",
        c:"<h6>",
        d:"heading",
        correct:"b"

    },
    
    
    
    ];
    
    const quiz= document.getElementById('quiz')
    const answerEls = document.querySelectorAll('.answer')
    const quesEl = document.getElementById('ques')
    const a = document.getElementById('opt1')
    const b = document.getElementById('opt2')
    const c = document.getElementById('opt3')
    const d = document.getElementById('opt4')
    const submitbtn = document.getElementById('submit')
    
    
    
    let qsCount = 0
    let mark = 0
    
    loadQuiz()
    
    function loadQuiz() {
    
    deselectAnswers()
    
    const currentjsquiz = jsquiz[qsCount]
    
    quesEl.innerText = currentjsquiz.ques
    a.innerText = currentjsquiz.a
    b.innerText = currentjsquiz.b
    c.innerText = currentjsquiz.c
    d.innerText = currentjsquiz.d
    }
    
    function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
    }
    
    function getSelected() {
        
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
    }
    
    
    submitbtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === jsquiz[qsCount].correct) {
           mark++
       }
    
       qsCount++
    
       if(qsCount < jsquiz.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Your Points ${mark}/${jsquiz.length} </h2>
    
           <button onclick="location.reload()">Do you want to play again?</button>
           `
           
       }
    }
    })
    
    