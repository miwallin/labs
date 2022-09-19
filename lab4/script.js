
const num1 = 75;
const num2 = 12;

console.log(`${num1} plus ${num2} är: ` + (num1 + num2));
console.log(`${num1} minus ${num2} är: ` + (num1 - num2));
console.log(`${num1} gånger ${num2} är: ` + (num1 * num2));

const person = {
    firstname: 'Bob',
    lastname: 'Smith',
    age: 32,
    bio: function () {
      console.log(`Hej, mitt namn är ${this.firstname} ${this.lastname} och jag är ${this.age} år gammal.`);
    }
};

person.bio();