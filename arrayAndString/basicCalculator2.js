// Implement a basic calculator to evaluate a simple expression string.

// The expression string contains only non - negative integers, +, -, *, / operators and empty spaces.

// The integer division should truncate toward zero.

function basicCalculator (s) {
    const stack = [];
    let num = 0;
    let operator = "+";
    s = s.replace(/\s/g, "");

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue;

        if (/\d/.test(s[i])) {
            num = num * 10 + parseInt(s[i]);
        }

        if (/\D/.test(s[i]) || i === s.length - 1) {
            if (operator === "+") stack.push(num);
            else if (operator === "-") stack.push(-num);
            else if (operator === "*") stack.push(stack.pop() * num);
            else if (operator === "/") stack.push(~~(stack.pop() / num));
            // a double NOT bitwise operator to replace Math.floor,
            // takes away everything to the right of decimal point

            operator = s[i];
            num = 0;
        }
    }

    return stack.reduce((acc, cur) => parseInt(acc) + parseInt(cur));

    // essentailly two stacks, one to keep track of current number (num),
    // one to keep all visited numbers (stack)
}
