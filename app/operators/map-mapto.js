import Rx from "rxjs";

/******* 
    map changes the stream value
    mapTo combines multiple streams (I think)?
 *******/
const rangeOb = Rx.Observable.range(0, 9);
const testMapTo = Rx.Observable.interval(1000);
//rangeOb.map(n => n * n).subscribe(myObserver("map"));
rangeOb.mapTo({ test: "a test message" }).subscribe(myObserver("mapTo"));

function myObserver(name) {
  return function(e) {
    console.log(`subscriber ${name}: ${e}`);
  };
}
