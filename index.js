function toss(){
    const choices = ['TAIL', 'HEAD','TAIL','HEAD'];
    const choice = choices[Math.floor(Math.random() *4)];
    document.getElementById('result').innerText= choice;

}
var choices=['Sawan','Sneha','Anshul','Harsh','Divyansh','Kishu','Param','Amogh','Dishu','Aarya'];
var pickedName=[];
function player(){
    if(choices.length ===0){
        result.textContent = "Good luck mates";
        return;
    }
    var randomIndex = Math.floor(Math.random()*choices.length);
    var randomPlayer = choices[randomIndex];
    pickedName.push(randomPlayer);
    choices.splice(randomIndex, 1);
    result.textContent = randomPlayer;
}
function reset() {
    choices = pickedName.concat(choices);
    pickedName = [];
    var result = document.getElementById("result");
    result.textContent = "RESULT";
}
