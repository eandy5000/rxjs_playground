import Rx from "rxjs";
import { higher } from "../observers";
/*************** 
 an instance operator lets you subscribe to an operator 
 and change the stream,
 in this example sumTen uses start with and scan to add the numbers 
****************/

export const tenCount = new Rx.Observable(observer => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  count.forEach(num => observer.next(num));
});

tenCount.subscribe(higher("plain"));

const sumTen = tenCount.startWith(0).scan((acc, v) => acc + v);

sumTen.subscribe(higher("running total"));
