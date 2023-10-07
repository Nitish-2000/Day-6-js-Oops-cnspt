//Template literals
//This is more preferred methode aganist traditional way of printing
const user1 = {
    name : "Bob",
    age : 23,
    address : {
        line1 : "6/2, AAA",
        line2 : "BBB (TK)",
        line3 : "CCC (DT)"
    }
}
console.log(`This is an empample for "Template Literals"
* we can add n number of lines
* we can also print get values ${user1.address.line1}
* This an commonly used methode of printing `);

//using this key word and template literals inside object methode
const user2 = {
    name : "Robbin",
    age : 23,
    address : {
        line1 : "6/2, CCC",
        line2 : "DDD (TK)",
        line3 : "EEE (DT)"
    },
    fulladdress :function() {
        console.log(`${this.age}`);
        console.log(`${this.address.line1}`)
    }
}
user2.fulladdress();

//java script classes
//classes
class Cars  {
      constructor(Company,Model,Year,Color){
        this.Company=Company;
        this.Model = Model;
        this.Year = Year;
        this.Color= Color;
      }
      drive(){
        console.log(`This is an Semi automatic car
                     with variable transmission and power dooms`)
    }
}
const car1 = new Cars("Honda","City","2015","Red");
console.log(`The color of the ${car1.Company} model car is ${car1.Color}`);

const car2 = new Cars("Suzuki","Baleno","2018","white");
console.log(car2.drive());


//get and set methode
























