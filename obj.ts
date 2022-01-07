const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Tim",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favouriteActivites: string[];
favouriteActivites = ["Sports"];

if (person.role === Role.AUTHOR) {
  console.log("its author");
}
