const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];


  // lets create our own filter array method
  // it will take two arguments

  function filterArray(collection, callback){
    const newCollection = [];
    for(const user of collection){
        if(callback(user)){
            newCollection.push(user);
        }
    }
    return newCollection
  }

  const blueUsers = filterArray(users, function(user){
    return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin"
  });
  console.log(blueUsers)


  // lets now use the built in method to displa blue users

  const blueUsers2 = users.filter(users => users.favoriteColor === "Yellow" && users.favoriteAnimal === "Penguin")
  console.log(blueUsers2)
console.log(users)