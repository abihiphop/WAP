// ================== LAB 8 - QUESTION NUMBER - 1 #FILTER FUNTION ========================

String.prototype.filter = function (inputStr) { //Overriding the filter function of String object
    return this.split(" ").filter(str => str != inputStr).reduce((str1, str2) => str1 + " " + str2).trim();
}

console.log("This house is not nice and is not wonderful!".filter("not"));

// ================== LAB 8 - QUESTION NUMBER - 2 #BUBBLE SORT ===========================

[].__proto__.bubbleSort = function () {
    let input = this;
    for (let i in input) {
        for (let j in input) {
            if (input[j] > input[i]) {
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
    return input;
}
console.log([5, -8, 0, 23, 1, 0, 3, -2, 1].bubbleSort());

// ==================== LAB 8 - QUESTION NUMBER - 3 #PERSON ===============================
function Person1(name) {
    this.name = name;
}
const teacher = new Person1("Xing");
teacher.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}

teacher.teach("WAP");

// using Objects.create
const person = {
    name: "",
    teaches: function (subject) {
        return this.name + " is now teaching " + subject;
    }
}
const p1 = Object.create(person);
p1.name = "xing";

console.log(p1.teaches("WAP"));

// ==================== LAB 8 - QUESTION NUMBER - 4 #PERSON, STUDENT and PROFESSOR ===============================

// Using Object Prototype Approach 
const Person = {
    name: "Abrha",
    age: 30,
    greeting: function () {
        console.log("\nGreetings, my name is " + this.name + " and I am " + this.age + " years old");
    },
    salute() {
        console.log("\nGood morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }

}

// Creating Student and Professor objects from Person 

const Student = Object.create(Person);
Student.major = function (maj) {
    this.major = maj;
}
Student.greeting = function () {
    console.log("\nHey, my name is " + this.name + " and I am studying " + this.major);
}

const Professor = Object.create(Person);
Professor.department = "CS";
Professor.greeting = function () {
    console.log("\nGreeting from Proffessor");
}
Professor.salute = function () {
    console.log("\nGood day, my name is " + this.name + " and I am in the " + this.department + " department");
}
// now creating instance of the Student and Professor objects
const student1 = Object.create(Student);
student1.setMajor = "Programmiig",
    student1.greeting();
student1.salute();

const proffessor1 = Object.create(Professor);
proffessor1.greeting();
proffessor1.salute();


// Using the function constructor approach
function Person2() {
    this.name = "Abrha";
    this.age = 25
}
Person2.prototype.greeting = function () {
    console.log("\nGreetings, my name is " + this.name + " and I am " + this.age + " years old");
}
Person2.prototype.salute = function () {
    console.log("\nGood morning!, and in case I dont see you, good afternoon, good evening and goodnight!");
}
function Student2() {
    Person2.call(this);
    this.major = "WAP";
}
Student2.prototype = Object.create(Person2.prototype);
Student2.prototype.greeting = function () {
    console.log("\nHey, my name is " + this.name + " and I am studying " + this.major);
}
function Professor2() {
    Person2.call(this)
    this.department = "CS"
}
Professor2.prototype = Object.create(Person2.prototype);
Professor2.prototype.greeting = function () {
    console.log("\nGreeting from Proffessor");
}
Professor2.prototype.salute = function () {
    console.log("\nGood day, my name is " + this.name + " and I am in the " + this.department + " department");
}
const student2 = new Student2();
const proffessor2 = new Professor2();

student2.greeting();
student2.salute();

proffessor2.greeting();
proffessor2.salute();
