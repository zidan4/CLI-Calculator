import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(): void {
  rl.question("Enter expression (e.g., 3 + 4): ", (input) => {
    const [a, op, b] = input.split(" ");
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    let result: number;

    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Unsupported operation.");
        ask();
        return;
    }

    console.log(`Result: ${result}`);
    ask();
  });
}

ask();
