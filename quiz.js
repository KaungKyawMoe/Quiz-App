{
    const data = 'test';

    let quizList = [
        {question:"1 + 1",choice1:"2",choice2:"1",choice3:"3",answer:"2"},
        {question:"1 - 1",choice1:"2",choice2:"1",choice3:"0",answer:"0"},
        {question:"What is the letter after 'a'",choice1:"a",choice2:"b",choice3:"c",answer:"b"},
        {question:"Capital Of Myanmar",choice1:"Yangon",choice2:"Mandalay",choice3:"Naypyitaw",answer:"Naypyitaw"}
    ]

    let currentQuiz = 0;

    let answerList=[];

    let txtId = document.getElementById('txtId');

    let question = document.getElementById('questions');

    let result = document.getElementById('result');

    let info = document.getElementById('info');

    let resultStr = '';

    function nextQuestions(){
        question.innerHTML = "<div class='header'> Questions "+ +(currentQuiz+1) + ' of '+quizList.length +"</div>" 
        + '<div class="questionName">'+ quizList[currentQuiz].question + '</div>'
        + '<div class="choice">'+ '<input type="radio" name="rdo" value="'+quizList[currentQuiz].choice1+'"/>'
        + '<span class="choiceValue">'+quizList[currentQuiz].choice1 + '</span>'
        + '</div>'
        + '<div class="choice">'+ '<input type="radio" name="rdo" value="'+quizList[currentQuiz].choice2+'"/>'
        + '<span class="choiceValue">'+quizList[currentQuiz].choice2 + '</span>'
        +'</div>'
        + '<div class="choice">'+ '<input type="radio" name="rdo" value="'+quizList[currentQuiz].choice3+'"/>'
        + '<span class="choiceValue">'+quizList[currentQuiz].choice3 + '</span>'
        +'</div>';

    }

    function submitAnswer(){
        
        let result = document.getElementsByName('rdo');

        let answer = '';
        if(result != null){
            for(var item in result){
                if(result[item].checked){
                    answer = result[item].value;
                }
            }
        }else{
            document.getElementById("info").innerHTML = "Please choose one";
        }

        if(answer == ''){
            document.getElementById("info").innerHTML = "Please choose one";
        }
        else{
            answerList.push(answer);
        }

        currentQuiz += 1;

        if(currentQuiz === quizList.length){
            generateResult();
        }
        else{
            nextQuestions();
        }
        
    }

    function generateResult(){

        resultStr = '';
        let correctCount = 0;
        let isTrue = false;

        for(let result in quizList){
            
            isTrue = answerList[result] === quizList[result].answer ? true : false;

            if(isTrue){
                correctCount++;
            }

            resultStr += "<div class='header'> Questions "+ (result+1) +"</div>"
            + '<div class="questionName">'+ quizList[result].question + '</div>';

            if(answerList[result] === quizList[result].choice1){
                resultStr += '<div class="choice'+ (isTrue ? ' success' : ' error')
                +'">'+ '<input type="radio" name="rdo" value="'+quizList[result].choice1+'"/>'
                + '<span class="choiceValue">'+quizList[result].choice1 + '</span>'
                + '</div>';
            }
            else{
                resultStr += '<div class="choice">'+ '<input type="radio" name="rdo" value="'+quizList[result].choice1+'"/>'
                + '<span class="choiceValue">'+quizList[result].choice1 + '</span>'
                + '</div>';
            }

            if(answerList[result] === quizList[result].choice2){
                resultStr += '<div class="choice'+ (isTrue ? ' success' : ' error')
                +'">'+ '<input type="radio" name="rdo" value="'+quizList[result].choice2+'"/>'
                + '<span class="choiceValue">'+quizList[result].choice2 + '</span>'
                + '</div>';
            }
            else{
                resultStr += '<div class="choice">'+ '<input type="radio" name="rdo" value="'+quizList[result].choice2+'"/>'
                + '<span class="choiceValue">'+quizList[result].choice2 + '</span>'
                + '</div>';
            }

            if(answerList[result] === quizList[result].choice3){
                resultStr += '<div class="choice'+ (isTrue ? ' success' : ' error')
                +'">'+ '<input type="radio" name="rdo" value="'+quizList[result].choice3+'"/>'
                + '<span class="choiceValue">'+quizList[result].choice3 + '</span>'
                + '</div>';
            }
            else{
                resultStr += '<div class="choice">'+ '<input type="radio" name="rdo" value="'+quizList[result].choice3+'"/>'
                + '<span class="choiceValue">'+quizList[result].choice3 + '</span>'
                + '</div>';
            }
            
            resultStr += '<div> Answer is <b>'+ quizList[result].answer +'</b></div>'+'</div>';
        }
        
        result.innerHTML = resultStr;

        info.innerHTML = 'Correct <b>'+correctCount+' of '+quizList.length+'</b>';
    }

    nextQuestions();
}