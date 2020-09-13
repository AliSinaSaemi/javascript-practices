var filter_word = "";
var search_word = "";

let data = [
  {
    name: "Alisina",
    followers: 2125,
    team: "red",
    comment: "I am god",
  },
  {
    name: "Alisina",
    followers: 2125,
    team: "red",
    comment: "blue team sucks",
  },
  {
    name: "John wick",
    followers: 40058,
    team: "blue",
    comment: "I will kill you with my pencil case",
  },
  {
    name: "Bill",
    followers: 458,
    team: "red",
    comment: "Always red",
  },
  {
    name: "Rose",
    followers: 458,
    team: "yellow",
    comment: "Yellow always shine",
  },
  {
    name: "Zoro",
    followers: 458,
    team: "yellow",
    comment: "Yellow doesn't suck",
  },
];

for (let index = 0; index < data.length; index++) {
  console.log(
    data[index].name,
    data[index].followers,
    data[index].team,
    data[index].comment
  );
}
function choose_filter_word(value) {
  filter_word = value;
}

function searchbar(value) {
  search_word = value;
}
