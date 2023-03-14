// ======================PROTOTYPE============================//
//============================Lesson-1================================//
const person = new Object({
    name: 'Alex',
    age: 25,
    greet: function () {
        console.log('Greet!')
    }
});
Object.prototype.sayHello = function () {
    console.log('Hello')
};
const lena = Object.create(person);
const str = new String('Im string');
// всё является обьектами
//можно вносить в прототип свои функции , создавать свои методы.



// ==========Что такое контекст this. Как работает call, bind, apply============//
//==================================Lesson-2============================================//
function hello() {
    console.log('hello', this)
};

const user = {
    name: 'Anton',
    age: 24,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
};

const bozhena = {
    name: 'Bozhena',
    age: 23
};

const lenaInfo = user.logInfo.bind(bozhena, 'Front', '23124134') //нужно самому вызвать.
lenaInfo('Front', '23124134')

user.logInfo.call(bozhena, 'Front', '23124134') // вызывается самостоятельно.

user.logInfo.apply(bozhena, ['Front', '23124134']) // Только 2 параметраю Второй параметр - исключительно массив.

//=============================ПРАКТИКА L-1/L-2===================================//

array = [1, 2, 3, 4, 5];

// function multBy(arr, n){
//     return arr.map(function(i){
//         return i*n
//     })
// }

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(array.multBy(2))


//===========================РЕЗЮМЕ===================================
// оно вызывает то, что стоит слева от точки, где мы вызываем данную функцию
// Ключевое слово this всегда динамичное, оно указывает на тот объект в контексте которого оно было вызвано
//  функция bind - в качестве значения этой функции му можем передать тот контекст который будет привязан у вызываемой функции
// сам по this себе указывает на глобальный объект window
//  метод bind на самом деле не вызывает функцию, а возвращает новую функцию которая уже привязала к себе новый контекст
//  метод group у объекта console
//  С помощью метода bind, помимо того что первым параметром мы указываем контекст который должен быть привязан к новой функции, другими параметрами мы можем передавать следующие параметры которые нужны функции
//  Метод call. Отличие от метода bind, что он метод call сразу же вызывает эту функцию, а метод bind в свою очередь возвращает нам новую функцию, и её мы можем вызвать тогда, когда нам угодно
//  Метод apply. В отличие от методов bind и call, где можно бесконечное число параметров, в метод apply мы всегда передаем два параметра. 
// У метода apply второй параметр всегда массив, и этот массив состоит из аргументов которые попадут в эту функцию.
// Метод apply сразу же вызывает эту функцию.
//  Практика с использованием прототипов и контекста (this)
//===========================РЕЗЮМЕ===================================



//=====================Что такое замыкания. Как они работают (+ примеры)=======================
//========================================LESSON-3=============================================

function createCalc(n) {
    return function () {
        console.log(100 * n)
    }
}

const calc = createCalc(5);

//============//

function createIncrementor(n) {
    return function (num) {
        return n * num;
    };
};

const addOne = createIncrementor(3); //замкнули 3 
console.log(addOne(4));
const addTwo = createIncrementor(21) // замкнули 21
console.log(addTwo(3));

//=============//

function urlGenerate(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
};
const comUrl = urlGenerate('com');
console.log(comUrl('google'));



// =========================Асинхронность.Что такое Event Loop. JS SetTimeout 0=======================//
//===========================================LESSON-4=================================================//
console.log('Hi');
setTimeout(function () {
    console.log('hello')
}, 10000);  //
console.log('bb');

// set timeout закидывает функцию в WebApis там оно ждёт указанное время и возвращается в колстак.

