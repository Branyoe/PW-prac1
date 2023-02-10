const greet = () => console.log('Hello');
greet();

//functions as parameterr
logGreeting = fn => fn();
logGreeting(greet);
//Estamos pasando la función greet 
//como parámetro e invocandola con el 
//nombre del argumento "fn"

//functions expression
let greetMe = () => console.log('Hello from the function expression');
greetMe();

logGreeting(greetMe)
//functions are first class, pass it as a parameter

