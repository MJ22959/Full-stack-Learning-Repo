const arr=['apple', 'banana', 'orange']
arr.splice(2,0,'Kiwi')
console.log(arr);

arr.sort((a,b)=> a.localeCompare(b));
console.log(arr);

const numArr=[1,2,3,4,5];
const someArr= numArr.some((item)=> item>=5)
console.log(someArr);

someArr ? arr.map(item=> console.log(item*2)):""

const names = ["ram","shyam","hari","sita","gita"];

names.forEach((item)=> console.log(item.charAt(0).toUpperCase()+item.slice(1)))

const students = [
    {
        name: "John",
        age: 24,
        isStudent: true,
        address : {
          city: "New York",
          state: "NY"
        }
    },
    {
        name: "Jane",
        age: 25,
        isStudent: true,
        address : {
          city: "Kathmandu",
          state: "Bagmati"
        }
    },
    {
        name: "Bob",
        age: 26,
        isStudent: true,
        address : {
          city: "Kathmandu",
          state: "Bagmati"
        }
    }
]

students.forEach(student => {
    if(student.address.state==="Bagmati"){
        console.log(student.name)
    }
});

students.forEach(student => {
    if(student.isStudent===true){
        console.log(student.name)
    
    }
})

const student= students.filter((item) => item.isStudent=== true).map(item => item.name)
console.log(student);

//print the names of students in descending order of their ages
students.sort((a,b)=> b.age-a.age).map(item=> item.name)
students.forEach(student =>{
  console.log(student.name+' '+ student.age);
});

// calculate the minimum and maximum ages
const ages = [19,22,19,24,20,25,26,24,25,24]
ages.sort((a,b) => a-b)
console.log("The minimum age is: "+ages[0]);
console.log("The maximum age is: "+ages[ages.length-1]);

// Calculate median
const median = ages.length % 2 === 0 ? (ages[ages.length/2 - 1] + ages[ages.length/2]) / 2 : ages[Math.floor(ages.length/2)];
console.log("The median age is: "+median);

// calculate average
const average = ages.reduce((acc, curr) => acc + curr, 0) / ages.length;
console.log("The average age is: "+average);

// calculate range
const range = ages[ages.length-1] - ages[0];
console.log("The range of ages is: "+range);

// compare (min-average) and (max-average)
const minAverageDiff = Math.abs(ages[0] - average);
const maxAverageDiff = Math.abs(ages[ages.length-1] - average);
console.log("The difference between the minimum age and the average is: "+minAverageDiff);
console.log("The difference between the maximum age and the average is: "+maxAverageDiff);

// find the countries containing 'land' in their name 
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland','Nepal','Thailand','Switzerland','Poland','Ireland','England','India'];
let countryWithLand = countries.filter(country => country.includes('land'));
console.log("Countries with 'land' in their name: "+countryWithLand);

// Find the middle country(ies) in the countries array
let middle= countries[Math.floor(countries.length/2)];
const middleCountries = countries.length % 2 === 0 ? countries.slice(countries.length/2 - 1, countries.length/2 + 1) : [countries[Math.floor(countries.length/2)]];
console.log("The middle country is: "+middle);
console.log("The middle countries are: "+middleCountries);

// find the countries with first half of the countries array
const firstHalfCountries = countries.slice(0, Math.ceil(countries.length / 2));
console.log("The first half of the countries array: "+firstHalfCountries);

// find the countries with second half of the countries array
const secondHalfCountries = countries.slice(Math.floor(countries.length / 2));
console.log("The second half of the countries array: "+secondHalfCountries);

//find the countries with first half of the countries array checking for both even and odd length of countries array
const firstHalfCountriesChecked = countries.length % 2 === 0 ? countries.slice(0, countries.length / 2) : countries.slice(0, Math.ceil(countries.length / 2));
console.log("The first half of the countries array (checked): "+firstHalfCountriesChecked);

//find the countries with second half of the countries array checking for both even and odd length of countries array
const secondHalfCountriesChecked = countries.length % 2 === 0 ? countries.slice(countries.length / 2) : countries.slice(Math.floor(countries.length / 2));
console.log("The second half of the countries array (checked): "+secondHalfCountriesChecked);

const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [
      { description: "Salary",
         amount: 5000 },
      { description: "Freelance",
         amount: 2000 } 
    ],
    expenses: [
      { description: "Rent", 
        amount: 1000 },
      { description: "Groceries",
         amount: 500 }
    ],
    totalIncome: function() {
      return this.incomes.reduce((acc, income) => acc + income.amount, 0);
    },
    totalExpense: function() {
      return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    },

    accountInfo(){
      return `${this.firstName} ${this.lastName} has a total income of ${this.totalIncome()} and total expenses of ${this.totalExpense()}.`;
    },

    addIncome(description, amount){
      this.incomes.push({ description, amount });
    },

    addExpense(description, amount){
      this.expenses.push({ description, amount });
    }, 

    accountBalance(){
      return this.totalIncome() - this.totalExpense();
    } 
  }

console.log(personAccount.accountInfo());
console.log(personAccount.totalExpense());
personAccount.addExpense("Transport", 200);
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());

