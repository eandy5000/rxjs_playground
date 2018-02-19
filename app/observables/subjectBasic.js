import Rx from "rxjs";

/****
 basic subject, when you chain next and send a value it 
 only sends the value if you have already subscribed
 ****/
export const pracSubject = new Rx.Subject();
