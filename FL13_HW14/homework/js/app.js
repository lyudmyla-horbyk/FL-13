function Student(name, email) {
  const studentName = name;
  const studentEmail = email;
  const homeworkResult = [];
  this.getName = function () {
    return studentName;
  };
  this.getEmail = function () {
    return studentEmail;
  };
  this.addHomeworkResult = function (topic, success) {
    homeworkResult.push({ topic, success });
  };
  this.getHomeworkResults = function () {
    return homeworkResult;
  };
}
function FrontendLab(students, failedLimit) {
  const failedHomeworksLimit = failedLimit;
  let studentsList = [];
  for (let i = 0; i < students.length; i++) {
    const student = new Student(students[i].name, students[i].email);
    studentsList.push(student);
  }
  this.printStudentsList = function () {
    for (let i = 0; i < studentsList.length; i++) {
      console.log(`name: ${studentsList[i].getName()}, email: ${studentsList[i].getEmail()}`);
      console.log(studentsList[i].getHomeworkResults());
    }
  };
  this.addHomeworkResults = function (homeworkResults) {
    const topic = homeworkResults.topic;
    for (let i = 0; i < homeworkResults.results.length; i++) {
      const { success, email } = homeworkResults.results[i];
      const student = studentsList.find(element => element.getEmail() === email);
      if (student) {
        student.addHomeworkResult(topic, success);
      }
    }
  };
  this.printStudentsEligibleForTest = function () {
    const eligibleStudents = studentsList.filter(function (student) {
      const failedNumber = student.getHomeworkResults().reduce(function (accumulator, currentValue) {
        if (currentValue.success === false) {
          return accumulator + 1;
        }
        return accumulator;
      }, 0);
      return failedNumber <= failedHomeworksLimit;
    });
    for (let i = 0; i < eligibleStudents.length; i++) {
      console.log(`name: ${eligibleStudents[i].getName()}, email: ${eligibleStudents[i].getEmail()}`);
    }
  };
}