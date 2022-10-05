class Player {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const guardsCenters = [new Player('Lorenzo Brown', 32, 196), new Player('Jaime Fernández', 29, 186), new Player('Darío Brizuela', 27, 188), new Player('Alberto Díaz', 28, 191), new Player('Rudy Fernández', 37, 196), new Player('Sebas Saiz', 28, 205), new Player('Willy Hernangómez', 28, 209), new Player('Usman Garuba', 20, 203)];

const roster = [new Player('Jaime Pradilla', 21, 205), new Player('Xabier López-Arostegui', 25, 201), new Player('Juancho Hernangómez', 26, 205), new Player('Joel Parra', 22, 200)];

for (player of guardsCenters) {
    roster.push(player);
}

const tallGuys = roster.filter(player => player.height > 200);

tallGuys.forEach(p => {
    console.log(p.name + " " + p.age + " " + p.height);
});