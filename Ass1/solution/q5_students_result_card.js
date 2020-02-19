// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

// Function generates random number which is rounded.
const generaterandomMarks= ()  => Math.round(Math.random()*100);
// Class Student
class Student{
    constructor(id,name,grammer,accounts,physics){
        this.id = id;
        this.name = name;
        this.grammer = grammer;
        this.accounts = accounts
        this.physics = physics;
    }
    // function member of Student class that generates the Students percentage
    getStudentPercentage(){
        let secondSubject = (this.physics === 0) ? this.accounts:this.physics
        let percentage = ((this.grammer + secondSubject)/2);
        return `The percentage of marks for ${this.name} is Percentage: ${percentage}`;
    }
}

// sudo code to generate marks for 100 students.
for (i =1; i<101; i++){
    var Studentreport = [];
    // generating 50 students for accounts + grammer
if(i%2===0){
    Studentreport[i] = new Student(100+i,'Student'+i,generaterandomMarks(),generaterandomMarks(),'');
     console.log(Studentreport[i].getStudentPercentage());

}else{
       // generating 50 students for Physics + grammer
    Studentreport[i] = new Student(100+i,'Student'+i,generaterandomMarks(),'',generaterandomMarks()); 
     console.log(Studentreport[i].getStudentPercentage());
    
}

}

