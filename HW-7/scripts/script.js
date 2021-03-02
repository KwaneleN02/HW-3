var myLogoArray = new Array();

var count = 0;

//class introduction, always captialize first letter of the class
class Logo

{
		//constructor
    constructor(title, logoimgPath, description, author, year)
    {
        this.title =  title;
        this.description = description;
        this.author = author;
        this.year = year;
        this.logoimgPath = logoimgPath;
    }

		//Using the 'get' element to return the constructor
    //get the Title
    get theTitle()
    {
        return this.title;  
    }

    //Get the image path
    get LogoimgPath()
    {
      return this.logoimgPath;
    }

    //Let's get the Description
    get theDescription()
    {
     return this.description;
    }

    //Let's get the author
    get theAuthor()
    {
     return this.author; 
    }
    
    //Now to the year
    get theYear()

    {
     return this.year;
    }
}

//To store all objects into the array
//Eventually randomize images. 
function bringArray()
{
    var myLogo1 = new Logo("M", "images/m.png", "Reject Logo", "Kwanele", "2021");
    var myLogo2 = new Logo("greenin", "images/greenin.png", "Environmental Sustrainability logo", "Kwanele", "2020");
    var myLogo3 = new Logo("ID", "images/id.png", "Innovative Designs Logo", "Kwanele", "2020");
    var myLogo4 = new Logo("pianolessons", "images/piano.png", "Piano Lessons doodle", "Kwanele", "2021");
    var myLogo5 = new Logo("Spotless", "images/spotless.png", "Spotless Logo Design", "Kwanele", "2021");
//Push my Array
    myLogoArray.push(myLogo1);
    myLogoArray.push(myLogo2);
    myLogoArray.push(myLogo3);
    myLogoArray.push(myLogo4);
    myLogoArray.push(myLogo5);
}

//To Print Objects
function printInformation() 
{
	var logo = myLogoArray[count];

  document.getElementById("title").innerHTML = logo.theTitle;
  document.getElementById("author").innerHTML = logo.theAuthor;
  document.getElementById("description").innerHTML = logo.theDescription;
  document.getElementById("year").innerHTML = logo.theYear;
  document.getElementById("logo-output").src = logo.logoimgPath;

  count++;
    // if we get to the top of our array, start over at the bottom
    if(count >= myLogoArray.length)
    {
        count = 0;
    }

}