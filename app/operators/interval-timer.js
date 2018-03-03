import Rx from "rxjs";

/******* 
interval creates an interval at an interval (time)
timer 
 *******/

const int = Rx.Observable.interval(1000);
const timer = Rx.Observable.timer(3000, 1000);

//int.subscribe(myObserver("interval"));
timer.subscribe(myObserver("timer"));

function myObserver(name) {
  return function(e) {
    console.log(`subscriber ${name}: ${e}`);
  };
}
