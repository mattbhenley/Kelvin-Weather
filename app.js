// kelvin degrees
const kelvin = 293;

// celsius is 273 degrees lower than kelvin
const celsius = kelvin - 273;

// equation to get fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

/* When you convert from Celsius to Fahrenheit, you often get a decimal number.
Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable. */
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);