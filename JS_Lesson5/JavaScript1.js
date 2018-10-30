//Практика:
//1. Создать пустой документ, подключить внешний js файл.
//В JS файле написать код, который добавит в конец тела документа пустой элемент div.
//    div - элементу присвоить цвет фона черный, цвет текста белый(color)
//Сделать кнопку, которая будет менять местами цвет фона и цвет текста.

//2. К предыдущей задаче, добавить таймер.Чтобы после нажатия на кнопку
//и смены цвета фона и текста, через 3 секнуды он менялся обратно.
//На это время(3сек) кнопка должна быть не активной(аттрибут disabled)


// 1) 2) ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var newElement = document.createElement('div');
document.body.appendChild(newElement);
newElement.innerHTML = 'Just Some Text';
newElement.style.backgroundColor = 'yellow';
newElement.style.color = 'red';

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('colChangeB').addEventListener('click', colChangeF);
})



function colChangeF(e, timeout) {
    var temp = newElement.style.backgroundColor;
    newElement.style.backgroundColor = newElement.style.color;
    newElement.style.color = temp;

    if (timeout == undefined) {
        setTimeout(function () {
            document.getElementById('colChangeB').removeAttribute("disabled");
            colChangeF(e, true);
        }, 3000);
        document.getElementById('colChangeB').setAttribute("disabled", "disabled");
    }
    
}

