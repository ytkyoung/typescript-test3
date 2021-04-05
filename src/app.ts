// interfaces

import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 400);
// docTwo = new Payment('mario', 'plumbing work', 500);

// const docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'shoun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('i spent', amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name);
};

greetPerson(me);

console.log(me);

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// const invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// // invOne.client = 'yoshi';
// // invTwo.amount = 400;

// invoices.forEach((inv) => {
//   //   inv.client = 'something else';
//   console.log(inv.client, inv.details, inv.amount, inv.format());
// });

// console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instanceof
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
   values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end')
});

// tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;

let student: [string, number];
student = ['chun-li', 234234];



// GENERICS
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
// let docTwo = addUID('hello')

console.log(docOne.name)


// Array
// last
// makeArr: 2 generics, return, overwrite inference, default value
// addFullName: extends
// interfaces
// props
// useState
// jsx generic

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);

console.log(l)

const l2 = last<string>(["a", "b", "c"]);

console.log(l2)



const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v2 = makeArr("a", "b");
const v3 = makeArr<string | null, number>("a", 5);

console.log(v)
console.log(v2)
console.log(v3)



const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  };
};

const v4 = makeFullName({ firstName: "bob", lastName: "junior", age: 15 });
// const v5 = makeFullName({ another: "bob", lastName: "junior", age: 15 });

console.log(v4);


interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;


// with Interfaces


enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}


// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: { name: 'shaun'}
// }

// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: 'shopping List',
//   data: ['bread', 'milk', 'toilet roll']
// }

// console.log(docThree, docFour);


const docOne1: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: {title: 'name of the wind'}
}

const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: {name: 'yoshi'}
}


console.log(docOne1, docTwo);
