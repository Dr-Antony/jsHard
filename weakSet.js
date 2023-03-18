const userss = [
    {name: 'Anton'},
    {name: 'Bozhena'},
    {name: 'Sergey'}
];

const vis = new WeakSet();

vis.add(userss[0]).add(userss[1]);

console.log(vis.has(userss[0]))