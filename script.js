const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const generateBtn = document.getElementById('btn');
document.getElementById('number-container').textContent = number[0];
generateBtn.addEventListener('click', function (){
    let output = number[Math.floor(Math.random() * number.length)];
    document.getElementById('number-container').textContent = output;
})