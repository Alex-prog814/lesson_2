// classList
// let block = document.querySelector('#block');
// console.log(block);
// block.classList.add('newClass');
// block.classList.add('newClass2');
// block.classList.remove('newClass');
// block.classList.toggle('newClass');
// console.log(block.classList.contains('newClass'));

// let date = new Date().getHours();
// // console.log(date);
// if(date > 15){
//     document.body.classList.add('theme-color__dark');
// }else{
//     document.body.classList.add('theme-color__light');
// };

// let block = document.querySelector('#block');
// block.style.backgroundColor = 'blue'
// block.style.width = '250px';
// block.style.height = '250px';

// block.setAttribute('style', 'background-color: green; width: 200px; height: 200px');

// let styles = {
//     color: "white",
//     border: "2px solid yellow"
// };
// Object.assign(block.style, styles);

// insertAdjacentHTML
// 'beforebegin' - добавит элемент(html) перед элементом к которому подключились(на одном уровне)
// 'afterbegin' - добавит элемент(html) в начало элемента к которому подключились(структура внутри элемента)
// 'beforeend' - добавит элемент в конец элемента к которому подключились(структура внутри элемента)
// 'afterend' - добавит элемент(html) непосредственно после элемента к которому подключились(на одном уровне)

// let block = document.querySelector('#block');
// block.insertAdjacentHTML('afterbegin', '<span> *** </span>');
// block.insertAdjacentHTML('afterbegin', '<span> ***** </span>');
// block.insertAdjacentHTML('beforebegin', '<a href="https://google.com">Google</a>');
// block.insertAdjacentHTML('afterend', '<a href="https://yandex.com">Yandex</a>');

// block.insertAdjacentHTML('beforeend', '<a href="https://google.com">Google</a>');

// append/prepend/before/after
// let block = document.querySelector('#block');
// let newNode = document.createElement('h1');
// newNode.innerText = 'Hello, JS!';
// block.append(newNode);

// let newNode2 = document.createElement('h2');
// newNode2.innerText = 'Hello, World!';
// block.prepend(newNode2);

// block.before(newNode, newNode2);
// block.after(newNode2);

// let products = [
//     {title: 'Title1', price: 900},
//     {title: 'Title2', price: 800},
//     {title: 'Title3', price: 700},
//     {title: 'Title5', price: 500},
//     {title: 'Title1', price: 900},
//     {title: 'Title2', price: 800},
//     {title: 'Title3', price: 700},
//     {title: 'Title5', price: 500},
//     {title: 'Title1', price: 900},
//     {title: 'Title2', price: 800},
//     {title: 'Title3', price: 700},
//     {title: 'Title5', price: 500}
// ];
// let list = document.querySelector('ul');
// console.log(list);
// list[0].innerHTML = `<li>${products.}</li>`
// products.forEach(item => {
//     let newLi = document.createElement('li');
//     newLi.innerText = `Title: ${item}; price: ${item.price}`;
//     list.append(newLi);
// });

// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li');
// let button = document.querySelector('button');
// let li = document.getElementsByTagName('li');

// button.addEventListener('click', () => {
//     const newLi = document.createElement('li');
//     newLi.innerText = 'Hello, elem!';
//     ul.append(newLi);
//     console.log(li);
// });