var myName = "Annie";    
var age = 21;           
var isSrtudent = true;  

var hobbies = [
  "music",
  "travelling",
  "toy"
];

var anotherPerson = {
  name: "Bob",
  age: 45,
  likesToCook: false
};

console.log(anotherPerson);

let collection = {
  "collectionName": "VINYL RECORD COLLECTION",
  "owner": "ANNSEU",
  "formed": 2024,
  "active": true,
  "members": [
    {
      "name": "Can I love?",
      "singer": "Cosmic Boy",
      "genre": "Hip Hop",
      "publishyear": 2024,
      "publishregion": "South Korea",
      "tracklist": ["소화불량"]
    },
    {
      "name": "Tangled",
      "singer": "Mandy Moore, Donna Murphy",
      "genre": "Soundtrack",
      "publishyear": 2015,
      "publishregion": "United States",
      "tracklist": ["When Will My Life Begin?", "I See the Light."]
    },
    {
      "name": "La la land",
      "singer": "Justin Hurwitz",
      "genre": "Soundtrack",
      "publishyear": 2016,
      "publishregion": "United States",
      "tracklist": ["City of stars"]
    }
  ]
}

let container = document.getElementByld("container");


for (let i = 0; i < collection.length; i++) {
  let itemName = collection[i].Name;
  let newP = document.createElement("p");
  newP.innerText = itemName;
  container.appendChild(newP);
}