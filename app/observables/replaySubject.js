import Rx from "rxjs";

/***************** 
 replay subject takes a number, 
 the number indicates the minumum number of values 
 the subscriber will recieve 
 *************/
export const rSubject = new Rx.ReplaySubject(4);
