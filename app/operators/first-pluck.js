import Rx from "rxjs";

/******* 
pluck- in a stream of objects, pass pluck a string and it will return that key
first- only return the the first value and completes when 

in the example we create an interval, map it to an object, 
pluck the name property, complete the observable when first is true
 *******/
const intStream = Rx.Observable.interval(1000);

intStream
  .take(15)
  .map(n => ({ name: `friend ${n}`, number: n }))
  .pluck("name")
  .first(n => n === "friend 6")
  .subscribe(anObserver("pluck"));

function anObserver(name) {
  return function(e) {
    console.log(`subscriber ${name}: ${e}`);
  };
}
