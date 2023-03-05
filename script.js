// Объявление функции startDrag с передачей параметра event
function startDrag(event) {
    // Добавление класса "selected" к элементу, на который нажали и перетаскиваем
    event.target.classList.add('selected');
    // Получение HTML-содержимого выбранного элемента и сохранение в переменной htmlConten
    let htmlContent = event.target.innerHTML;
    // Установка HTML-содержимого в параметр dataTransfer объекта события
    event.dataTransfer.setData('html', htmlContent);
}

// Объявление функции endDrag с передачей параметра event
function endDrag(event) {
    // Нахождение элемента с классом "selected"
    let elem = document.querySelector(".selected");
    // Удаление класса "selected" у найденного элемента
    elem.classList.remove("selected");
}

// Объявление функции enterDrag с передачей параметра event
function enterDrag(event) {
    // Нахождение ближайшего родительского элемента div
    const elem = event.target.closest("div");
    // Нахождение элемента с классом "selected"
    const dragElement = document.querySelector(".selected");
    // Если найденный элемент не является перетаскиваемым элементом
    if (elem != dragElement) {
        // добавляем ему класс "drop"
        elem.classList.add("drop");
    }
}

// Объявление функции leaveDrag с передачей параметра event
function leaveDrag(event) {
    // Нахождение элемента с классом "drop"
    const removeElem = document.querySelector(".drop");
    // Получение элемента, на который было наведено внимание
    const targetElem = event.relatedTarget;
    // Если элемент, на который было наведено внимание имеет класс "dock"
    if (targetElem.classList.contains('dock')) {
        // Удаляем класс "drop" у найденного элемента
        removeElem.classList.remove("drop");
    }
}

// Объявление функции overDrag с передачей параметра event
function overDrag(event) {
    // Отменяем действия по умолчанию
    event.preventDefault();
}
// Объявление функции dropDrag с передачей параметра event
function dropDrag(event) {
    // Ищет елемент который держим
    const draggeble = document.querySelector(".selected");
    // Получаем передаваемые данные с событие dragstart
    const draggedHTML = event.dataTransfer.getData("html");
    // Ищем елемент на который мы навелись
    const dropTarget = event.target.closest("div.drop");
    // Записаваемые елемента на который навелись
    const droppedHTML = dropTarget.innerHTML;
    // Меняем содержимое елемента
    draggeble.innerHTML = droppedHTML
    dropTarget.innerHTML = draggedHTML
}
// Получаем все елементы с классом language
let listBlocks = document.querySelectorAll('.language');
    // Перебираем список блоков с классом 'language'
for ( let block of listBlocks ) {
    // Добавляем проверку события "dragstart" с вызовом функции startDrag
    block.addEventListener('dragstart', startDrag);
    // Добавляем проверку события "dragend" с вызовом функции endDrag
    block.addEventListener('dragend', endDrag);
    // Добавляем проверку события "dragover" с вызовом функции overDrag
    block.addEventListener('dragover', overDrag);
    // Добавляем проверку события "dragleave" с вызовом функции leaveDrag
    block.addEventListener('dragleave', leaveDrag);
    // Добавляем проверку события "drop" с вызовом функции dropDrag
    block.addEventListener('drop', dropDrag);
    // Добавляем проверку события "dragenter" с вызовом функции enterDrag
    block.addEventListener('dragenter', enterDrag);
}
