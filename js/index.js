//alert('Hello!');

let greetings = 'world!';
//alert(greetings);

const message='Hello ' + greetings;
alert(message);

const userAge= parseFloat(prompt('Enter your age'));
alert('Your age is: ' +userAge);
alert(add(1,3));

//зробити нову змінну, назвати її nextAge, присвоїти в неї userAge збільшений на 1, вивести на екран nextAge

const nextAge = userAge+1;
alert(nextAge);

if(userAge>=18){
    alert("You are adult");
}else{
    alert("You are underaged");
}

function add(a,b){
    const result=a+b;
    return result;
}