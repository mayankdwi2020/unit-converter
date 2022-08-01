/* // Default values
//Meter to feet = 1(meter) * 3.280(foot)
//Feet to meter = 1(foot) / 3.280(foot)
//Litre to gallon = 1(litre) / 3.785(gallon)
//Gallon to litre = 1(gallon) * 3.785(litre)
//Kilo to pound = 1(kilo) * 2.205 (pound)
//Pound to kilo = 1(pound) / 2.205 (kilo)
*/

const input = document.getElementById("input");
const convertButton = document.getElementById("convert");
const meter = document.getElementById("meter"); //paragraph that will contain meter/feet values
const litre = document.getElementById("litre"); //paragraph that will contain litere/gallon values
const kilo = document.getElementById("kilo"); //paragraph that will contain kilo/pound values

//This function does three things:
//Taking defaultvalues, and metric values in text as parameters
//multiplying/dividing input value with default values and rounding the output to 3 decimal places
//Returing a template litreal that can be later added as the text for the respective result paragraphs
function unitConversion(defaultValue, metricOne, metrictwo) {
  let convertedValueOne = `${input.valueAsNumber * defaultValue}`;
  let convertedValueTwo = `${input.valueAsNumber / defaultValue}`;
  convertedValueOne = Math.round(convertedValueOne * 1000) / 1000;
  convertedValueTwo = Math.round(convertedValueTwo * 1000) / 1000;
  return `${input.valueAsNumber} ${metricOne} = ${convertedValueOne} ${metrictwo} | ${input.valueAsNumber} ${metrictwo} = ${convertedValueTwo} ${metricOne}`;
}
//This function takes the element and adds the callback function into its innetHTML

function innerHTML(element, callback) {
  element.innerHTML = callback;
}
//Event listener on the button
convertButton.addEventListener("click", () => {
  innerHTML(meter, unitConversion(3.28, "meter", "foot"));
  innerHTML(litre, unitConversion(3.785, "litre", "gallon"));
  innerHTML(kilo, unitConversion(2.205, "kilo", "pound"));
});
