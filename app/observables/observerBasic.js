import Rx from "rxjs";

// basic observable, it only sends values when subscribed to
export const bar = new Rx.Observable(observer => {
  const list = ["foo", "bar", "baz", "soo"];
  observer.next("sync");
  setTimeout(() => {
    list.forEach(i => {
      observer.next(i);
    });
  }, 3000);
});
