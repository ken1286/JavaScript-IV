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
    return `Hello my name is ${this.name}, I am from ${this.location}`;
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
    return `Today we are learning about ${subjectStr}`;
  }

  grade(studentObj, subjectStr) {
    return `${studentObj.name} receives a perfect score on ${subjectStr}`;
  }
}

class Student extends Person {

}

class ProjectManager extends Instructor {

}