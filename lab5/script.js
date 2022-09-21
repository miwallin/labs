const names = ['Kalle', 'Kajsa', 'Knatte', 'Fnatte', 'Tjatte'];

names.pop();

names[1] = 'Magica';

names.push('Joakim');

names.sort();

var place = names.indexOf('Joakim');

names.splice(place, 1);

names.forEach(element => console.log(element));