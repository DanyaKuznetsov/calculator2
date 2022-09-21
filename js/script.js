let buttons = document.querySelector('.buttons');//создаём переменную куда попадают все кнопки
let AC = document.querySelector('#AC');//создаём переменную для кнопки очистки
let input = document.querySelector('input');
buttons.onclick = function (e) {//создаём e function чтобы мы получали информацию о клике в нутри дива buttons
    if (input.value.length < 13) {//если кол-во символов меньше 13
        let target = e.target;//создаём переменную куда попадёт нажатая кнопка
        if (target.classList.contains('dark-grey')) {//если у нажатой кнопки есть такой класс
            if (input.value == 0 && target.innerHTML != '.') {
                input.value = '';
            }
            input.value = input.value + target.innerHTML;
            AC.innerHTML = 'C';
            if (input.value.length > 6) {//если кол-во цифр больше 6 то делаем цифры меньше
                input.classList.add('zoomout1');
            }
            if (input.value.length > 7) {//если кол-во цифр больше 7 то делаем цифры ещё меньше
                input.classList.add('zoomout2');
            }
            if (input.value.length > 11) {//если кол-во цифр больше 11 то делаем цифры ещё меньше
                input.classList.add('zoomout3');
            }
            console.log(target);//выводим таргет в консоль
        }
        if (target.classList.contains('orange')) {
            let lastSymbol = input.value[input.value.length - 1];
            if (lastSymbol != '+' && lastSymbol != '-' && lastSymbol != '*' && lastSymbol != '/') {
                if (target.innerHTML != '=') {//елси кнопка на которую мы нажали это не равно
                    input.value = input.value + target.value;
                    AC.innerHTML = 'C';
                } else {
                    input.value = eval(input.value)//переводит строку в числовые значения и производит расчёт
                }
            }
        }
        if (target.classList.contains('procent')) {//находит один процент от числа
            input.value = input.value / 100;
        }
        if (target.classList.contains('negative')) {
            console.log(input.value[0])
            let firstSymbol = input.value[0];
            let lastSymbol = input.value[input.value.length - 1];
            if (lastSymbol != '+' && lastSymbol != '-' && lastSymbol != '*' && lastSymbol != '/') {
                if (firstSymbol == '-') {
                    input.value = input.value.slice(1)
                }else{
                    input.value = '-' + input.value;
                }
            }else{
                input.value = input.value + '-';
            }
        }
    }
}
AC.onclick = function () {
    if (AC.innerHTML == 'AC') {
        input.value = 0;
    } else {
        input.value = input.value.substring(0, input.value.length - 1);
        if (input.value.length == 0) {
            input.value = '0';
            AC.innerHTML = 'AC';
        }
    }
}