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

hobbies = ["Coding", "Music"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Sarah",
  age: 22,
};

let people: {
  name: string;
  age: number;
}[]; // Array of objects (persons)

// Type inference
// Rely on type inference and not type without needing

let course = "React - The Complete Guide";

// course = 1234
