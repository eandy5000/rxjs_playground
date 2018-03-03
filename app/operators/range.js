import Rx from "rxjs";

function myObserver(name) {
  return function(e) {
    console.log(`subscriber ${name}: ${e}`);
  };
}

const rangeObs = Rx.Observable.range(1, 5);

rangeObs.subscribe(myObserver("range"));
