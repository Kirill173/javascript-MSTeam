var firstNum = prompt('Введите первое значение?', '0');
var operator = prompt('Операция?', '+');
var secondNum = prompt('Введите второе значение?', '0');
var result;

function calculate(operator,num1,num2) {
    
    switch(operator){
        
        case '+':
            return ((+num1) + (+num2));
           
            
        case '*':
            return ((+num1) * (+num2));
          
           
        case '-':
            return ((+num1) - (+num2));
          
            
        case '/':
            return ((+num1) / (+num2));
                     
        default:
            alert("Неизвестная операция");
            }
    
}


result=calculate(operator, firstNum, secondNum);
alert(result);