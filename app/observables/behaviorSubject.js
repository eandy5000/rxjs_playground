import Rx from "rxjs";
/******* 
 the behavior subject always provides the subscriber with a value,
 either the default value from when the behaviorSubject is defined 
 *******/
export const behaviorSubject = new Rx.BehaviorSubject("Welcome");
