const employees = {
    // method 1 to define function in object
    compName: "hk",
    calcTax() {
        console.log("your tax is 10%")
    },
    // method 2
    // calcTax2 : function(){
    //     console.log("your tax is 20%")
    // }
}

const employee1 = {
    salary: 50000,
    calcTax() {
        console.log("your tax is 20%") //employee1.calcTax() will call this instead of employees calcTax() function because own methods has higher priority when both objects have same function
    }
}

// method to enherite one objects properties or prototype to another object
employee1.__proto__ = employees // here employee1 can use properties and methods of employees