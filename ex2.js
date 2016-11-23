function Person(firstName, lastName) {

    if( !(this instanceof Person) ) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.attempts = 0;

}

Person.prototype.flirt = function() {
	var self = this;

    this.interval = setInterval(function() {
    	
        console.log("Cześć, nazywam się " + self.firstName + " " + self.lastName + "! Masz ochotę na drinka?");

        if(++self.attempts === 10) {
            clearInterval(self.interval);
        }

    }, 1000);

};

var person = new Person("Jan", "Kowalski");

person.flirt();
