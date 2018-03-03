import Rx from "rxjs";

/******* 
From takes anything that is iterable and turns it into a Observable,
Including a promise or a generator
 *******/
const arr = [1, 1, 2, 3, 5, 8];
const arrPromise = new Promise((resolve, reject) => resolve(arr));

const fromOb = Rx.Observable.from(arrPromise);

fromOb.subscribe(anObserver("from"));

function anObserver(name) {
  return function(e) {
    console.log(`subscriber ${name}: ${e}`);
  };
}
