//Project
//Today we will build a Zodiac Application together, we will get user inputs and check if it matches any 'existing signs'. If they match an existing sign, we will display an image of the zodiac sign, as well as some information about that sign.
// Create array of 12 objects, with 3 properties each (these are our zodiacs).
// Set up HTML with an h1, an input, and a button. Make our function run on the button click.
// Set up three empty HTML elements to receive the three properties of a given object.
// When the function runs, grab the value of the user’s input and match it against the name property of each object in our array (try to find the matching zodiac).
// If it matches, print the three properties of the object with the matching name into the three empty HTML elements.
// Break the for loop.


//
//Steps For Making a JavaScript Project
//Paper Prototype the layout of the project (draw out how you want the app to look).
//Create the HTML needed to accept user data and a place to display the results (you will usually create a form with input elements to get user data and a div with some id to select to display results).
//Write pseudocode for the JavaScript Logic (this is a halfway point between plain english and pure JavaScript).
//Example of pseudocode: 
//select an input element by id and store it in a variable
//Write the JavaScript to capture user data and compare it to existing data, if they typed a zodiac sign out you can display that info to them.
//Example of JavaScript: 
//var userHairColor = document.getElementById('userColor'); 
//console.log(userColor);
//Style the finished product with some CSS.
//Working Project Examples
//Zodiac Example 1 Zodiac Example 2


var signs = [
{
  name: 'Aries',
	date: 'Mar 21 - Apr 19',
	image: 'img/12-Aries1.jpg', 
	knownAs: 'The Ram',
	horoscope: 'The pioneer and trailblazer of the horoscope wheel, Aries energy helps us initiate, fight for our beliefs and fearlessly put ourselves out there.'
},
{
	name: 'Taurus',
	date: 'Apr 20 - May 20',
	image: 'img/Taurus-512.png',
	knownAs: 'The Bull',
	horoscope: 'The persistent provider of the horoscope family, Taurus energy helps us seek security, enjoy earthly pleasures and get the job done.'
},
{
	name: 'Gemini',
	date: 'May 21 - Jun 20',
	image: 'img/2-Gemini1.jpg',
	knownAs: 'The Twins',
	horoscope: 'The most versatile and vibrant horoscope sign, Gemini energy helps us communicate, collaborate and fly our freak flags at full mast.'
},
{
	name: 'Cancer',
	date: 'Jun 21 - Jul 22',
	image: 'img/3-Cancer1.jpg',
	knownAs: 'The Crab',
	horoscope: 'The natural nurturer of the horoscope wheel, Cancer energy helps us connect with our feelings, plant deep roots and feather our family nests.'
},
{
	name: 'Leo',
	date: 'Jul 23 - Aug 22',
	image: 'img/leo.svg',//Leo by Ilaria Bernareggi from the Noun Project
	knownAs: 'The Lion',
	horoscope: 'The drama queen and regal ruler of the horoscope clan, Leo energy helps us shine, express ourselves boldly and wear our hearts on our sleeves.'
},
{
	name: 'Virgo',
	date: 'Aug 23 - Sep 22',
	image: 'img/5-Virgo1.jpg',
	knownAs: 'The Virgin',
	horoscope: 'The masterful helper of the horoscope wheel, Virgo energy teaches us to serve, do impeccable work and prioritize wellbeing—of ourselves, our loved ones and the planet.'
 },
{
	name: 'Libra',
	date: 'Sep 23 - Oct 22',
	image: 'img/6-Libra1.jpg',
	knownAs: 'The Scales',
	horoscope: 'The balanced beautifier of the horoscope family, Libra energy inspires us to seek peace, harmony and cooperation-and to do it with style and grace.'
},
{
	name: 'Scorpio',
	date: 'Oct 23 - Nov 21',
	image: 'img/7-scorpio1.jpg',
	knownAs: 'The Scorpion',
	horoscope: 'The most intense and focused of the horoscope signs, Scorpio energy helps us dive deep, merge our superpowers and form bonds that are built to last.'
},
{
	name: 'Sagittarius',
	date: 'Nov 22 - Dec 21',
	image: 'img/8-Sagittarius1.jpg',
	knownAs: 'The Archer',
	horoscope: 'The worldly adventurer of the horoscope wheel, Sagittarius energy inspires us to dream big, chase the impossible and take fearless risks.'
	},
	{
	name: 'Capricorn',
	date: 'Dec 22 - Jan 19',
	image: 'img/9-Capricorn1.jpg',
	knownAs: 'The Goat',
	horoscope: 'The measured master planner of the horoscope family, Capricorn energy teaches us the power of structure and long-term goals.'
},
{
	name: 'Aquarius',
	date: 'Jan 20 - Feb 18',
	image: 'img/Aquarius.svg',////Aquarius by Meaghan Hendricks from the Noun Project
	knownAs: 'The Water Bearer',
	horoscope: 'The mad scientist and humanitarian of the horoscope wheel, futuristic Aquarius energy helps us innovate and unite for social justice.'
},
{
	name: 'Pisces',
	date: 'Feb 19 - Mar 20',
	image: '/img/11-Pisces1.jpg',
	knownAs: 'The Fish',
	horoscope: 'The dreamer and healer of the horoscope family, Pisces energy awakens compassion, imagination and artistry, uniting us as one.'
}
];

// Allows user to hit enter key to see results
var btn = document.getElementById('userdata');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);

var input = document.getElementById("zodiacSign");
var myH2 = document.getElementById("name");
var myH5 = document.getElementById("date");
var myH4 = document.getElementById("knownAs");
var myP = document.getElementById("horoscope");
//var myImg = document.getElementById("image");

function getInfo() {

	for(var i = 0; i < signs.length; i++) {
		if(input.value == signs[i].name) {
      myH2.innerText = signs[i].name;
      myH5.innerText = signs[i].date;
      myH4.innerText = signs[i].knownAs;
      myP.innerText = signs[i].horoscope;
      //myImg.innerText = signs[i].image;
      document.getElementById("image").src = signs[i].image


      return; //will break a function 
    }
  };
      alert("Please try entering your sign again.");
}



