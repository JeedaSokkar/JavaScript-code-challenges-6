// main.js
import { add, subtract, multiply, divide } from './calculator.js';
import { logResult } from './logger.js';

const a = 10;
const b = 5;

const sum = add(a, b);
logResult('addition', sum);

const difference = subtract(a, b);
logResult('subtraction', difference);

const product = multiply(a, b);
logResult('multiplication', product);

const quotient = divide(a, b);
logResult('division', quotient);
