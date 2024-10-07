const screen = document.getElementById("screen");
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const delBtn = document.getElementById("delBtn");

const max_len = 10;
const operator_symbols = ["+", "-", "*", "/"];


// Digit buttons functionality
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (screen.textContent == "0") { // Replace the initial 0, if applicable. Prevents leading 0's.

            const value = digit.textContent; // Get the value of the digit button
            screen.textContent = value; 
        }

        else if (screen.textContent.length <= max_len) { // Prevent the screen from overflowing
            
            const value = digit.textContent; 
            screen.textContent += value; 
        }
        
    });
});

// Operator buttons functionality
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        
        // Only allow one operator on the screen at once for now
        // Using .some to check if the screen already has an operator in it:
        const has_operator = operator_symbols.some(op => screen.textContent.includes(op));

        if (!has_operator) {
            // If there's no operator, append the clicked operator
            screen.textContent += operator.textContent;
        }
    });
});

// Equals button functionality
equalsBtn.addEventListener("click", () => {
    screen.textContent = eval(screen.textContent);
});

// Clear button functionality
clearBtn.addEventListener("click", () => {
    screen.textContent = "0";
});

// Del button functionality
delBtn.addEventListener("click", () => {
    // Remove the last character of the screen text content, or set to 0 if it's 1 char
    if (screen.textContent.length <= 1) {
        screen.textContent = "0";
    }
    else {
        screen.textContent = screen.textContent.slice(0, -1);
    }
});


