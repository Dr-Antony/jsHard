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

// =========================Promise. Что это, как работает=======================//
//===========================================LESSON-5=================================================//

// console.log('Request data..');

// setTimeout(() => {
//     console.log('Preparing data .. ');
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         data: 'working'
//     };
//     setTimeout(() => {
//         backendData.info = true;
//         console.log('Data recived', backendData);
//     },3000)
// }, 2000);

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data ...');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             data: 'working'
//         };
//         resolve(backendData)
//     }, 2000)
// });
// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.info = true;
//             resolve(data)
//         }, 3000)
//     });
// })
//     .then(clientData => {
//         console.log('Data recived', clientData);
//         return clientData;
//     }).then(data => {
//         data.promisInfo = 'NEO';
//         console.log('Modified', data)
//     }) // таким образом, посредством .then можно формировать цепочку(чейн).
// .catch(err => console.error('Error: ', err))     // усли вместо resolve - reject, то методом .catch мы ловим и выводим ошибку.
// .finally(() => console.log('finally'))

// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// };
// sleep(20000).then(()=> console.log('After 2 sec'));

// Promise.all([sleep(10000), sleep(15000)]).then(() => {
//     console.log('All finally')
// }); //метод All выполняет условия только когда все промисы закончатся.

// Promise.race([sleep(10000), sleep(15000)]).then(() => {
//     console.log('Race promises')
// }) // отработает самый первый.

// =========================Объекты с Object.create. Что такое getters, setters=======================//
//===========================================LESSON-6=================================================//
const pers = Object.create({}, {
    name: {
        value: 'Anton',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1998,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'red';
            console.log('Set age', value)
        }
    }
});

for (let keyq in pers) {
    console.log('Key', keyq, pers[keyq])
};
// =========================Все о ES6 Классах=======================//
//===========================================LESSON-7=================================================//

class Animal {
    static type = 'ANIMAL'
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }
    voice() {
        console.log('Im animal')
    }
};

const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})

class Cat extends Animal {
    constructor(options) {
        super(options)
        this.color = options.color
    }
    voice() {
        console.log('Im pus in bus')
    }
    get ageInfo() {
        return this.age * 7;
    }
    set ageInfo(newAge) {
        this.age = newAge;
    }
}
const cat = new Cat({
    name: 'cat',
    age: 2,
    hasTail: true,
    color: 'black'
});

//===========================================LESSON-7=================================================//
//===========================================Практика=================================================//

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }
    hide() {
        this.$el.style.display = 'none'
    }
    show() {
        this.$el.style.display = 'block'
    }
};
class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }
};
const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
});
const box2 = new Box({
    selector: '#box2',
    size: 100,
    color: 'blue'
});

class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
};
const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
});

// =========================Как работает Async, Await. Работа с сервером c fetch=======================//
//===========================================LESSON-8=================================================//

// const delay = (ms) => {
//     return new Promise(r => setTimeout(() => r(), ms))
// };

// const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//     console.log('Fetch todo started..')
//     return delay(2000)
//     .then(()=>{
//         return fetch(url)
//     })
//     .then(response => response.json())
// };
// fetchTodos()
// .then(data => {
//     console.log('Data:', data)
// })
// .catch(e => console.error(e))

// async function fetchAsyncTodos(){
//     try {
//         console.log('Fetch todo started..')
//         await delay(2000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data:', data)
//     } 
//     catch(e){
//         console.error(e)
//     }

// }
// fetchAsyncTodos()

// ========================= Proxy. Объекты, функции, классы. Часть 1=======================//
//===========================================LESSON-9=================================================//
//objects
const persi = {
    name: 'Anton',
    age: 24,
    job: 'Fullstack'
};

const op = new Proxy(persi, {
    get(target, prop) {
        console.log(`Getting prop ${prop}`)
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        }
        else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {
        return ['name', 'age', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('deletitng ..', prop)
        delete target[prop]
        return true
    }
});
//functions
const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn')
        return target.apply(thisArg, args)
    }
});
//Classes
class Persic {
    constructor(name,age) {
        this.name = name
        this.age = age 
    }
};
const PersonProxy = new Proxy(Persic, {
    construct(target, args) {
        console.log('Construct..')
        return new target(...args)
    }
});

const p = new PersonProxy('Anton', 24);