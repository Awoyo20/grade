let score = prompt( "What is your score?");
let score_A = 80;
let score_B = 70;
let score_C = 60;
let score_D = 50;
let score_F = 0;

if (score>= 80){
    letter = "A";
}

else if (score >=70){
    letter = "B";
}
else if (score >=60){
    letter = "C";
}
else if (score >=50){
    letter = "D";
}
else {
    letter = "F"
}

console.log(score);
console.log(score_A);
console.log(score_B);
console.log(score_C);
console.log(score_D);
console.log(score_F);


let score_100 = ('A');
let score_70 = ('B');
let score_60 = ('C');
let score_50 = ('D');
let score_49 = ('F');


console.log(score);
console.log(score_100);
console.log(score_70);
console.log(score_60);
console.log(score_50);
console.log(score_49);

let studentScore = prompt("What is your score?")
let studentName = prompt("What is your Name?")

if(studentScore >=80 && studentScore <=100){
console.log('${studentName}, your score is ${studentScore}and you have B')
} else if(studentScore >=70 && studentScore <80){
    console.log('${studentName}, your score is ${studentScore}and you have A')
}else if(studentScore >=60 && studentScore <70){
    console.log('${studentName}, your score is ${studentScore}and you have C')
} else if(studentScore >=50 && studentScore <60){
    console.log('${studentName}, your score is ${studentScore}and you have D')
} else if(studentScore <50){
    console.log('${studentName}, your score is ${studentScore}and you have f')
} else{
    console.log('${studentName}, you must be a thief to type an invalid score')
}
