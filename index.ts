//importing inquirer first

import inquirer from "inquirer";

//setting a variable

const answer = await inquirer.prompt([

//assogning value to these variables

{ name : "firtvalue", type: "number", message: "Enter first digit" },
{name: "secondvalue", type: "nuumber", message: "Enter second digit"},

{name: "operator",
type: "list",
choices:[ "addition", "substraction", "multiplication", "division"],
message:"Select on of the operators to perfrorm operation"}
]);

//using conditional statement and consoling it 

if (answer.operator === "addition"){
    console.log(answer.firtvalue + answer.secondvalue)
}

else if (answer.operator === "substraction"){
    console.log(answer.firtvalue - answer.secondvalue)
}

else if ( answer.operator === "multiplication"){
    console.log(answer.firtvalue * answer.secondvalue)
}

else if (answer.operator === "division"){
    console.log(answer.firtvalue / answer.secondvalue)
}

else {
    console.log("Please enter a valid operator")
};

//Done with a simple calculator