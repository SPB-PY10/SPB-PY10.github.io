//Developer: JUNIOR
console.log(`Developer: JUNIOR`);

document.form.wiwe.value = 0;  //Значение калькулятора по умолчанию

var wiwe      =    document.querySelector('#wiwe'),
    wiwe1     =   document.querySelector('#wiwe1'),
    buttonT   = document.querySelector('#buttonT');

function press() { //Поддержка ввода чисел и знаков с клавиатуры
    var e = event.keyCode;
   
    if (e == 49) { //Цифра 1
       
        document.form1.wiwe1.value = document.form1.wiwe1.value + 1; 
    }

    if (e == 50) { //Цифра 2
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + 2; 
    }

    if (e == 51) { //Цифра 3
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + 3; 
    }

    if (e == 52) { //Цифра 4
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + 4; 
    }

    if (e == 53) { //Цифра 5
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + 5; 
    }

    if (e == 54) { //Цифра 6
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + 6; 
    }

    if (e == 55) { //Цифра 7
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + 7; 
    }

    if (e == 56) { //Цифра 8
       
        document.form1.wiwe1.value = document.form1.wiwe1.value + 8; 
    }

    if (e == 57) { //Цифра 9
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + 9; 
    }

    if (e == 48) { //Цифра 0
        document.form1.wiwe1.value = document.form1.wiwe1.value + 0; 
    }
    if (e == 43) { //Знак + (Знак сложения)
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + '+'; 
    }

    if (e == 61 || e == 13) { //Знак = (Вычисление примера)
        
        wiwe.classList.add("inputA");
        wiwe1.classList.add("input1A");
        setTimeout(function() {
            wiwe.classList.remove("inputA");
            wiwe1.classList.remove("input1A");
        }, 300);

        document.form.wiwe.value = eval(document.form1.wiwe1.value).toFixed(2);
        document.form1.wiwe1.value = document.form.wiwe.value;
    }

    if (e == 47 || e == 46) { //Знак / (Знак деления)
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + '/'; 
    }

    if (e == 45) { //Знак - (Знак вычитания)
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + '-'; 
    }

    if (e == 42) { //Знак * (Знак умножения)
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + '*'; 
    }

    if (e == 32) { //Очистка поля ввода
        
        document.form1.wiwe1.value = "";
        document.form.wiwe.value = 0;
    }

    if (e == 96 || e == 1105) { //Удаление последнего символа
        
        document.form1.wiwe1.value = document.form1.wiwe1.value.substr(0, document.form1.wiwe1.value.length - 1);
    }

    if (e == 44 || e == 1073) { //Знак точки
        
        document.form1.wiwe1.value = document.form1.wiwe1.value + '.'; 
    }
    //DeBug
    alert(e);


}


function AC() {     //Очистка поля ввода
    
    document.form1.wiwe1.value = "";
    document.form.wiwe.value = 0;
}

function posl() { //Удаление последнего символа
    
    document.form1.wiwe1.value = document.form1.wiwe1.value.substr(0, document.form1.wiwe1.value.length - 1);
}

function insert(num) { 
    
    document.form1.wiwe1.value = document.form1.wiwe1.value + num;
}

setInterval(function() {//анимация
    buttonT.addEventListener('click', function() {
        wiwe.classList.add("inputA");
        wiwe1.classList.add("input1A");
        setTimeout(function() {
            wiwe.classList.remove("inputA");
            wiwe1.classList.remove("input1A");
        }, 300);
    });
}, 2);

buttonT.addEventListener('click', function(total, total2) {
    total = eval(document.form1.wiwe1.value);
    total2 = eval(document.form.wiwe.value);
    if (total === Infinity) {
        document.form1.wiwe1.value = '';
        document.form.wiwe.value = 'Так нинада!';
        
    }
    if (document.form1.wiwe1.value.length > 8 ) {
        document.form1.wiwe1.value = '';
        document.form.wiwe.value = 'Много чисел!';
    }
});

function total() {  //Подсчет примера и вывод
    var rezultLength = document.form.wiwe.value.length; 

    document.form.wiwe.value = eval(document.form1.wiwe1.value).toFixed(2);
    document.form1.wiwe1.value = document.form.wiwe.value;

}

