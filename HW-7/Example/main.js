var dogArray = [];  // this array will hold all our dogs

// this variable allows us to change which dog we are going to show
var count = 0;

class Dog
{
  // all the variables will get set and then we can access them
  // the dogImagePath is just the path to the image, not the actual image
  constructor(name, breed, dogImagePath)
  {
    this.name = name;
    this.breed = breed;
    this.dogImagePath = dogImagePath;
  }

  // the toString returns the name and breed together (concatenated)
  toString()
  {
    return "Name: " + this.name + "<br>Breed: " + this.breed;
  }

  // this getter returns just the name
  get theName()
  {
    return this.name;
  }

  // this getter returns just the breed
  get theBreed()
  {
    return this.breed;
  }

  // this getter returns the path to the dog image
  get theDogImagePath()
  {
      return this.dogImagePath;
  }
}

function createDogs()
{
    // created two dogs sending in information into the constructor
    // the argument is the name, the second is the breed
    var dog1 = new Dog("Mo", "English Bulldog", "images/bulldog.jpg");
    var dog2 = new Dog("Lucy", "Saint Bernard", "images/saintbernard.jpg");

    // we now have an array with two dogs in it
    dogArray.push(dog1);
    dogArray.push(dog2);
}

function displayDogInformation()
{
    // we need to get the dog object
    // we use the count variable from the top to get a dog from the array
    var dog = dogArray[count];

    // this returns each individual property in the object
    document.getElementById("name").innerHTML = dog.theName;
    document.getElementById("breed").innerHTML = dog.theBreed;
    document.getElementById("dogimage").src = dog.theDogImagePath;

    // this calls the toString which returns the name and breed concatenated together
    document.getElementById("alldoginfo").innerHTML = dog.toString();

    // increment the count variable to get the next dog
    count++;
    // if we get to the top of our array, start over at the bottom
    if(count >= dogArray.length)
    {
        count = 0;
    }

}