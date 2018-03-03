import Rx from "rxjs";

/******* 
every- every only runs on complete and runs a test on every case
 *******/

const range = Rx.Observable.range(1, 30);

range.every(n => n % 2 == 0).subscribe(aObservable("even?"));
range.every(n => typeof n === "number").subscribe(aObservable("number"));

function aObservable(name) {
  return function(e) {
    console.log(`subscriber ${name}: ${e}`);
  };
}

//todo: delay and delay-when
