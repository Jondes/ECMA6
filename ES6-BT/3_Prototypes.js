// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
/* this.getSummary = function () {
    return `${this.title} was written by 
            ${this.author} in ${this.year}`;
}; */

// get Summary
Book.prototype.getSummary = function () {
    return `${this.title} was written by
        ${this.author} in ${this.year}`;
};
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
};

//Instantiate Object
const book1 = new Book('Jungle rule', 'John Doe', '2013');
const book2 = new Book('Concrete jungle', 'Jane Doe', '20111');


console.log(book2);
