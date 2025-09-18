// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Sarah";

let isInstructor: boolean;

isInstructor = false;

// More complex types

let hobbies: string[]; // Array of strings

type Person = {
  name: string;
  age: number;
}; // Type alias

hobbies = ["Coding", "Music"];

let person: Person;

person = {
  name: "Sarah",
  age: 22,
};

let people: Person[]; // Array of objects (persons)

// Type inference
// Rely on type inference and not type without needing

// Type union

let course: string | number = "React - The Complete Guide";

course = 1234;

// Functions and types

function add(a: number, b: number) {
  return a + b;
}

function printOpt(value: any) {
  console.log(value);
} // Void type

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(["a", "b", "c"], "d");
