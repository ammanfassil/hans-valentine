    function checkAnswer()
    
    {
        let score = 0;

        let q1 = document.querySelector('input[name="q1"]:checked')?.value;
        let q2 = document.querySelector('input[name="q2"]:checked')?.value;
        let q3 = document.querySelector('input[name="q3"]:checked')?.value;
        let q4 = document.querySelector('input[name="q4"]:checked')?.value;

        if (q1 === "C") score++;
        if (q2 === "E") score++;
        if (q3 === "H") score++;
        if (q4 === "L") score++;

        let resultText = "";

    if (score === 4) 
        {
        resultText = "✅ Congratulations! You are verified as Han Nguyen!";
        document.getElementById("rest-of-site").style.display = "block";  
        } 
    else if (score === 3 && q3 === "G") 
        {
        resultText = "✅ You and I both know that you lied about your height, but you shall pass.";
        document.getElementById("rest-of-site").style.display = "block";  
        } 
    else if (q4 === "J" || q4 === "K") 
        {
        resultText = "❌ Girl. Try again.";
        }
    else 
        {
        resultText = `❌ You got ${score} out of 4 correct. Try again!`;
        }

    document.getElementById("quiz-result").innerText = resultText;

}

function showValentineResponse() {
    const valentineChoice = document.querySelector('input[name="valentine"]:checked');
    if (valentineChoice) {
        const responseText = valentineChoice.value === 'yes' ? "🎉 Yay! Thank you! 🎉" : "I have a gun";
        document.getElementById('response').textContent = responseText;
    }
}