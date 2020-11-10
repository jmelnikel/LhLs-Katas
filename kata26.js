/* eslint-disable func-style */
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
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateSalesTax = (salesData, taxRates) => {
  const output = createObjectOfCompanyNames(salesData);
  for (const sales of salesData) {
    const totalSales = calculateTotalSales(sales.sales);
    output[sales.name].totalSales += totalSales;
    const totalTaxes = calculateTotalTaxes(totalSales, taxRates, sales.province);
    output[sales.name].totalTaxes += totalTaxes;
  }
  return output;
};
console.log(calculateSalesTax(companySalesData, salesTaxRates));

// function declarations will be hoisted.
// eslint-disable-next-line func-style
function createObjectOfCompanyNames(salesData) {
  const output = {};
  for (const data of salesData) {
    output[data.name] = {
      totalSales: 0,
      totalTaxes: 0
    };
  }
  return output;
}

function calculateTotalSales(salesArray) {
  let output = 0;
  for (const sale of salesArray) {
    output += sale;
  }
  return output;
}

function calculateTotalTaxes(salesTotal, taxRates, province) {
  const taxRate = taxRates[province];
  return salesTotal * taxRate;
}