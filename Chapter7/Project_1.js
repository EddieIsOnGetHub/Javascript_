class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    };
};



const person1 = new Employee("Eddie", "V.Waveren", 10);
const person2 = new Employee("Kyle", "Boltman", 5);
const person3 = new Employee("michelle", "Strydom", 3)
const workers = [person1, person2, person3];


Employee.prototype.details = function(){
    return this.first + " " + this.last + " has worked here " + this.years + " years";
}

workers.forEach((person) => {
    console.log(person.details());
});

