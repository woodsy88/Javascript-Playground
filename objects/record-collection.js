var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));


function updateRecords(id, prop, value) {
    console.log(prop);
    console.log(value);
    console.log(id);

  // use the id to find the specific object in the collection
    var updateItem = collection[id];
    console.log(updateItem);
  
  // does the given property from the params exist in that object already?
    console.log(updateItem.hasOwnProperty(prop));
 

  //  If prop isn’t ”tracks” and value isn’t empty (“”), update or set the value for that record album’s property.
  if (prop !== "tracks" && value !== "") {
       updateItem[prop] = value;
       console.log(updateItem);
  }
 
  // If prop is ”tracks” and the tracks array isn't empty, and the tracks property exists in the array already, then push the value onto the end of the album’s existing tracks array.
  console.log(updateItem.hasOwnProperty(prop));
  var tracks = "tracks";
  
  if (prop == "tracks" && updateItem[tracks] !== [] && updateItem.hasOwnProperty(prop)) {
    console.log(updateItem[tracks]);
    updateItem[tracks].push(value);
    console.log(updateItem[tracks]);

  }
  
  // If prop is ”tracks ”but the album doesn’t have a ”tracks” property, create an empty array before adding the new value to the album’s corresponding property.
  if (prop == "tracks" && updateItem.hasOwnProperty(prop) == false) {
     updateItem.tracks = [];
     updateItem.tracks = [value];
     console.log(updateItem);
  }

  // If value is empty (“”), delete the given prop property from the album.
  if (value == ""){
    console.log(updateItem);
    console.log(updateItem[prop]);      
    delete updateItem[prop];
    console.log(updateItem);
  }

  console.log(updateItem);
  console.log(collection);
  return collection;
}

// Alter values below to test your code

updateRecords(5439, "artist", "ABBA")
updateRecords(5439, "tracks", "Take a Chance on Me")
// updateRecords(2548, "artist", "")
// updateRecords(1245, "tracks", "Addicted to Love")
updateRecords(2468, "tracks", "Free"); 
updateRecords(2548, "tracks", "")
// updateRecords(1245, "album", "Riptide")