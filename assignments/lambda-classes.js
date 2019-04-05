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

  adjustGrade(studentObj) {
    let posOrNeg = Math.round(Math.random()) * 2 - 1;
    return studentObj.grade += ((Math.floor(Math.random() * 20) + 1) * posOrNeg);
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = Math.floor(Math.random() * 100) + 1;
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

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }

  graduate(instructorObj) {
    if(this.grade < 70) {
      console.log(`${this.name} has failed Lambda School! Try again!`);
      instructorObj.adjustGrade(this);
      this.graduate(instructorObj);
    }

    return `Congratulations ${this.name}! Your grade is ${this.grade} and you have graduated from Lambda School!`;
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  // Methods
  standup(slackChan) {
    return `${this.name} announces to ${slackChan}, @channel standy times!`;
  }

  debugsCode(studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}'s code on ${subject}.`;
  }
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

const jill = new ProjectManager({
  name: 'Jill',
  location: 'Texas',
  age: 37,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Hey there what's up`
});

console.log(fred.demo(`Spiders`));
console.log(fred.grade(ken, `Web Dev`));

ken.listsSubjects();
console.log(ken.PRAssignment(`Computer Science`));
console.log(ken.speak());
console.log(ken.sprintChallenge(`React`));

console.log(jill.standup(`web19_jill`));
console.log(jill.debugsCode(ken, `web dev`));

console.log(ken.grade);
console.log(jill.adjustGrade(ken));
console.log(ken.grade);
console.log(ken.graduate(jill));