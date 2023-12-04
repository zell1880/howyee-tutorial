/* hashmap(datatype) */

books = [
  {
    id: 1,
    title: "Harry Potter 1",
    authorId: 1,
  },
  {
    id: 2,
    title: "Harry Potter 2",
    authorId: 1,
  },
  {
    id: 3,
    title: "LotR",
    authorId: 2,
  },
  {
    id: 4,
    title: "Witcher",
    authorId: 3,
  },
];

authors = [
  {
    id: 1,
    name: "JK",
  },
  {
    id: 2,
    name: "J.R.R",
  },
  {
    id: 3,
    name: "AS",
  },
  {
    id: 4,
    name: "FG",
  },
];
let ex = {};
let a = "name";
let b = "age";
ex.age = 26;
ex["b"] = "howyee";
ex[a] = "howyee";
// ex.a = undefined
// ex.name = "howyee"
// ex[b] = 26
// ex.b = 'howyee'

let y = 4;
let z = [1, 2, 3, 4, 5];

let x = z;
let o = y;
o = 1;

z = [1, 2, 3, 4, 5];
// ...z = 1,2,3,4,5
x = [...z];
x[0] = 3;

book = {
  id: 1,
  title: "Harry Potter 1",
  authorId: 1,
};

book2 = {
  id: 3,
  title: "Harry Potter 2",
  authorId: 4,
};
let newBook = { title: "Harry Potter 3", ...book };
newBook = { ...book, title: "Harry Potter 3" };
newBook = { name: "Harry Potter 3", ...book, ...book2 };

console.log(newBook);

function bookWithAuthor(books, authors) {
  let authorNameMap = {};
  authors.forEach((author) => {
    authorNameMap[author.id] = author.name;
  });

  books.forEach((book) => {
    book.authorName = authorNameMap[book.authorId];
  });

  return books;
}

// console.log(bookWithAuthor(books, authors));
// console.log(bookWithAuthor(books, authors)[0].authorName === "JK");

// Expected Outcome
// books = [
//     {
//       id: 1,
//       title: "Harry Potter 1",
//       authorId: 1,
//       author: "JK",
//     },
//     {
//       id: 2,
//       title: "Harry Potter 2",
//       authorId: 1,
//       author: "JK",
//     },
//     {
//       id: 3,
//       title: "LotR",
//       authorId: 2,
//       author: "J.R.R",
//     },
//     {
//       id: 4,
//       title: "Witcher",
//       authorId: 3,
//       author: "AS",
//     },
//   ];
