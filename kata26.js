// Sales Tax
// This function calculates the total sales and total tax, grouped by company.
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


const calculateSalesTax = function(salesData, taxRates) {
  const output = createObjectOfCompanyNames(salesData)
  console.log("createObjectOfCompanyNames", output)
  

};

calculateSalesTax(companySalesData, salesTaxRates)

// Helper Function Expressions - These will be hoisted.
function createObjectOfCompanyNames(salesData) {
  const output = {};
  for (let data of salesData) {
    output[data["name"]] = undefined;
  }
  return output
}


function createCompanyObject() {

}


function calculateTotalSales() {
  
}


function calculateTotalTaxes() {
  const output = {};

}