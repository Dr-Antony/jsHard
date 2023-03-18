const entries = [
    ['name','Anton'],
    ['age',24]
];

const map = new Map(entries);

// console.log(map.get('name'));

map.set('job','fullstack');
// console.log(map);

// map.delete('job');
// console.log(map);

// console.log(map.size)

// map.clear();

// console.log(map.size)
// console.log(map.has('name'));


// for(let val of map.values()) {
//     console.log(val)
// };
// for(let key of map.keys()) {
//     console.log(key)
// };

// const array = [...map]; 
// const arrayAnalog = Array.from(map)

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj);

const users = [
    {name: 'Anton'},
    {name: 'Bozhena'},
    {name: 'Sergey'}
];

const visits = new Map();

visits.set(users[0], new Date())
.set(users[1], new Date())
.set(users[2], new Date())

function lastVisit(user) {
    return visits.get(user)
};

// console.log(lastVisit(users[2]))