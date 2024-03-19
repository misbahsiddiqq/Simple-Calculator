import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "firtvalue", type: "number", message: "Enter first digit" },
    { name: "secondvalue", type: "nuumber", message: "Enter second digit" },
    { name: "operator",
        type: "list",
        choices: ["addition", "substraction", "multiplication", "division"],
        message: "Select on of the operators to perfrorm operation" }
]);
if (answer.operator === "addition") {
    console.log(answer.firtvalue + answer.secondvalue);
}
else if (answer.operator === "substraction") {
    console.log(answer.firtvalue - answer.secondvalue);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firtvalue * answer.secondvalue);
}
else if (answer.operator === "division") {
    console.log(answer.firtvalue / answer.secondvalue);
}
else {
    console.log("Please enter a valid operator");
}
;
