// Adventures In Code
// Listing 5.04
// http://jsbin.com/cigafu/edit?js,console

function Location(title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
}

Location.prototype.addExit = function(title, destination) {
    this.exits[title] = destination;
};

Location.prototype.log = function() {
    var title;

    console.log("--------------------------------------");
    console.log(this.title + "...");
    console.log(this.description);

    console.log("Exits:");
    for (title in this.exits) {
        console.log("\t\t" + title);
    }
};

var currentLocation;

var location1 = new Location("The Kitchen", "You are in a large kitchen. There is a strong stench of decay.");

var location2 = new Location("The Library", "You are in a dusty, old library. Ancient books line every wall.");

location1.addExit("north", location2);


currentLocation = location1;

currentLocation.log();


/**
 * Adventures
 *
 * 1) Add an exit for location2 that points back to location1.
 *
 * 2) Make location2 the current location.
 *    Log the current location to the console.
 *
 */