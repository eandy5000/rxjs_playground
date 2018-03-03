import Rx from "rxjs";

/******* 
filter
do-operator- can't change the stream but allows you to see what is in the middle
 *******/
const rangeObs = Rx.Observable.range(0, 20);

rangeObs.filter(n => n % 2 === 0).subscribe(anObserver("simple"));

function anObserver(name) {
  return function(e) {
    console.log(`subscriber ${name}: ${e}`);
  };
}
