const person = {
  name: "Tim",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favouriteActivities: string[];
favouriteActivities = ["Sorts"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
