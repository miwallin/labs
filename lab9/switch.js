let nummer = 0;
let num = 0;

// Switch 1
switch (nummer) {
    case 0:
        console.log("Nisse");
        break;
    case 1:
        console.log("Per");
        break;
    case 2:
        console.log("Johannes");
        break;
    case 3:
        console.log("Joakim");
        break;
    default:
        console.log("Hans");
}

// Switch 2
switch (true) {
    case (num === 0):
        console.log("Umeå");
        break;
    case (num >= 1 && num <= 5):
        console.log("Stockholm");
        break;
    case (num >= 6 && num <= 9):
        console.log("Mora");
        break;
    case (num >= 10 && num <= 14):
        console.log("Västerås");
        break;
    case (num >= 15 && num <= 19):
        console.log("Göteborg");
        break;
    default:
        console.log("Malmö");
}