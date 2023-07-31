// This is a function called "cal" that performs calculations based on user input and updates the answer field.
function cal()
{
    // Get the value of the input fields and operator selected by the user
    var n1 = parseFloat(document.getElementById('num_one').value);
    var n2 = parseFloat(document.getElementById('num_two').value);
    var opt = document.getElementById('opt').value;

    // Perform different calculations based on the selected operator
    if(opt === '+')
    {
        // If the operator is '+', add the two numbers and update the answer field
        document.getElementById('answer').value = n1 + n2;
    }

    if(opt === '-')
    {
        // If the operator is '-', subtract the second number from the first number and update the answer field
        document.getElementById('answer').value = n1 - n2;
    }

    if(opt === '*')
    {
        // If the operator is '*', multiply the two numbers and update the answer field
        document.getElementById('answer').value = n1 * n2;
    }

    if(opt === '/')
    {
        // If the operator is '/', divide the first number by the second number and update the answer field
        document.getElementById('answer').value = n1 / n2;
    }
}
// The function takes the values entered by the user, performs the calculation based on the selected operator,
// and updates the answer field with the result. The function assumes that the input fields and answer field have
// corresponding IDs: 'num_one', 'num_two', 'opt', and 'answer'.