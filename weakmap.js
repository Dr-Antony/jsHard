//В структуре WeakMap ключами могут быть только объекты.

const obj = { name: 'Anton'};

const mapp = new WeakMap([[obj, 'WeakMap']]);

console.log(mapp)

//======================//

const cach = new WeakMap();

function cacheUser(user){
    if(!cach.has(user)){
        cach.set(user,Date.now())
    };
    return cach.get(user)
};

let anton = {name: 'Anton'};
let bozhena = {name: 'Bozhena'};

cacheUser(anton);
cacheUser(bozhena);
anton = null;

console.log(cach.has(anton))