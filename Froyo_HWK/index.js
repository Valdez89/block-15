// Below is an object created for the survey labeled as customer.

const customer = {
    firstName:"Jake",
    lastName: "Smith",
    email: "jaeksmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}

// Using bracket notation to update errors corrected by the customer.

    customer['email'] = "Jak3Smith1992@email.com";
    customer['phone'] = 3195551234;
    customer['zipCode'] = "63132";
    customer['favoriteFlavors'] = ['coffe', 'strawberry','matcha'];


// Deleting 2 properties requested from management.

delete customer ['zipCode'];
delete customer ['favoriteFlavors'];

// Management wants topping, future flavors, and today's purchase cost added.
// Jake the customer provides the information being entered below for new properties.

const customer['toppings'] = ['chocolate sprinkles', 'wafer straws', and 'gummy bears'];
const customer['favoriteFlavors'] = ['mango'];
const customer['todaysPurchaseCost'] = 5.32;

// The following new results will be added to the final survey.
// The output will be printed through an array.

const keys = Object.keys(customer);
console.log(keys);


