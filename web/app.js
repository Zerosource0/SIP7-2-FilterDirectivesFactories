var examApp = angular.module('examApp', []);

examApp.controller('ExamController', ['$scope', function ($scope) {
        var self = this;

        var studentsInfo = {};
        studentsInfo.allCourses = [
            {courseId: 1000, courseName: "Basic Programming"},
            {courseId: 1001, courseName: "Advanced Programming"},
            {courseId: 1003, courseName: "DataBase Intro"}
        ];
        studentsInfo.students = [];
        studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
        studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
        studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
        studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});


        self.title = "Student Grade Sheet";
        self.predicate = "name";
        self.reverse = false;
        self.studentsInfo = studentsInfo;
        self.courseInfo = studentsInfo.allCourses;

    }]);

examApp.filter('average', function () {

    return function (input) {

        var size = 0;
        var x = parseInt(0);
        for (var i = 0; i < input.length; i++) {
            console.log(input[i].grade);
            if(input[i].grade != null){
            x = x + parseInt(input[i].grade);
            size++;
            }
        }
        x =  x/size;
        return x;   
    };
});