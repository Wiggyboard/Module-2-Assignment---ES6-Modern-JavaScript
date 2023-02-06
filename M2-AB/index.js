let loans = [];

let customer1 = {
    id: 0,
    customerName: "John",
    phoneNumber: "555-1234",
    address: "1234 Elm St",
    loanAmount: 1000,
    interest: 10,
    loanTermYears: 5,
    loanType: "Personal",
    description: "loan description",
    calculatedLoanAmount: function() {
        return this.loanAmount + (this.loanAmount * (this.interest * .01) * this.loanTermYears);
    }
}

let customer2 = {
    id: 1,
    customerName: "Sarah",
    phoneNumber: "555-5678",
    address: "5678 Baker St",
    loanAmount: 4000,
    interest: 8,
    loanTermYears: 10,
    loanType: "Business",
    description: "loan description",
    calculatedLoanAmount: function() {
        return this.loanAmount + (this.loanAmount * (this.interest * .01) * this.loanTermYears);
    }
}

let customer3 = {
    id: 2,
    customerName: "Mark",
    phoneNumber: "555-1379",
    address: "1379 Washington St",
    loanAmount: 2000,
    interest: 6,
    loanTermYears: 3,
    loanType: "Personal",
    description: "loan description",
    calculatedLoanAmount: function() {
        return this.loanAmount + (this.loanAmount * (this.interest * .01) * this.loanTermYears);
    }
}

let customer4 = {
    id: 3,
    customerName: "Lisa",
    phoneNumber: "555-9731",
    address: "9731 Greene St",
    loanAmount: 500,
    interest: 15,
    loanTermYears: 1,
    loanType: "Personal",
    description: "loan description",
    calculatedLoanAmount: function() {
        return this.loanAmount + (this.loanAmount * (this.interest * .01) * this.loanTermYears);
    }
}

let customer5 = {
    id: 4,
    customerName: "Jed",
    phoneNumber: "555-2846",
    address: "2846 Reed St",
    loanAmount: 80000,
    interest: 9,
    loanTermYears: 12,
    loanType: "Business",
    description: "loan description",
    calculatedLoanAmount: function() {
        return this.loanAmount + (this.loanAmount * (this.interest * .01) * this.loanTermYears);
    }
}

loans.push(customer1, customer2, customer3, customer4, customer5);
loans.forEach((item) => console.log(item.calculatedLoanAmount()));