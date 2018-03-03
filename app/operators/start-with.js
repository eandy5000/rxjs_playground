import Rx from "rxjs";

/******* 
startWith- allow you to create an intial value or 
gives you an intial value if it takes a while for the 
observable to kick in
 *******/

const timer = Rx.Observable.timer(3000, 1000);

timer
  .take(10)
  .map(n => {
    if (typeof n === "String") {
      return n;
    }
    return n + n;
  })
  .startWith("waiting...")
  .subscribe(aObserver("start with"));

function aObserver(name) {
  return function(e) {
    console.log(`subscriber ${name}: ${e}`);
  };
}
