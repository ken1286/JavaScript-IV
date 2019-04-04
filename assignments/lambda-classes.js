// CODE here for your Lambda Classes

class Person {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  // Methods
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  // Methods
  demo(subjectStr) {
    return `Today we are learning about ${subjectStr}.`;
  }

  grade(studentObj, subjectStr) {
    return `${studentObj.name} receives a perfect score on ${subjectStr}.`;
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }

  // Methods
  listsSubjects() {
    this.favSubjects.forEach(function(element) {
      console.log(element);
    });
  }

  PRAssignment(subject) {
    return `${this.name} has received a PR for ${subject}.`;
  }
}

class ProjectManager extends Instructor {

}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const ken = new Student({
  name: 'Ken',
  location: 'California',
  age: 32,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'back-end',
  catchPhrase: `See you later`,
  previousBackground: `Napping`,
  className: `WEB19`,
  favSubjects: [`History`, `Coding`, `Video Games`]
});

console.log(fred.demo(`Spiders`));
console.log(fred.grade(ken, `Web Dev`));
ken.listsSubjects();
console.log(ken.PRAssignment(`Computer Science`));
console.log(ken.speak());