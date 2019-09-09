/* const s1 = 'Hello';
console.log(typeof s1); */

/* const s2 = new String('Hello');
console.log(typeof s2); */

//Object Literal
const book = {
    title: 'James Bond',
    author: 'Ian Flemming',
    year: '2010',
    getSummary: function () {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`;
    }
};
const book1 = {
    title: 'Harry Potter',
    author: 'Ian Smith',
    year: '2000',
    getSummary: function () {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`;
    }
};
console.log(book1.getSummary());
console.log(Object.values(book));
console.log(Object.keys(book));
