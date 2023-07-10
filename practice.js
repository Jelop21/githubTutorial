let employees =[
{
    id: 101,
    firstName: "Jay",
    lastName: "Pillai",
    age: 23,
},
{
    id: 102,
    firstName: "Vijay",
    lastName: "Pillai",
    age: 23,
},
{
    id: 103,
    firstName: "Pankaj",
    lastName: "Shinde",
    age: 22,
    address: {
        city: "Pune",
        state: "Maharashtra",
    },
    skills: ["html", "node js"],
},
];
 employees.forEach(function (emp) {
    console.log(emp.lastName);
 }) 

 const name = employees.map(function (emp) {
    return emp.firstName;
 })
 console.log(name);

 const employee = employees.filter(function (emp) {
    return emp.id == "101";
 }).map(function (emp) {
    return emp.firstName;
 })
 console.log(employee);

