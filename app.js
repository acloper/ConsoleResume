console.log("Name:" + " Alex Loper".toUpperCase());
console.log("Career: Warehouse Manager");
console.log("Description: I run one of the Armstrong Relocation warehouses in downtown Birmingham.");
console.log("Intrests:");
console.log("- I like to play video games");
console.log("- Anime");
console.log("- football");

console.log("My Previous Expereince:");

function displayPosition(company, title, description) {
  console.log("- " + description + " for " + company + " as a " + title);
}

displayPosition("felinis pizza", "chef", "cooked pizza for customers");
displayPosition("Home Depot", "deliveries employee", "got everything ready to be delivered");
displayPosition("Zealandia Capital", "debt collector", "called people who owed money on their timeshares");

console.log("My Skills:");
displaySkill("- Grand Champion Rocket League player", true);
displaySkill("- I can touch my tounge to my nose", false);
displaySkill("- Spanish", false);
displaySkill("- Built my own PC", true);
displaySkill("- film buff", false);
displaySkill("- scratch golfer", true);

function displaySkill(name, isCool) {
  if (isCool) {
    console.log("BAM!: " + name);
  } else {
    console.log(name);
  }
}
