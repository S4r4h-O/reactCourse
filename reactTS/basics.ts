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
