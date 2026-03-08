import { Observable, pipe } from "rxjs"
import { from } from "rxjs"
import { map } from "rxjs"
import { interval, take, fromEvent, debounceTime } from "rxjs"
const observable = new Observable(subscribe => {
    subscribe.next(1)
    subscribe.next(2)
    subscribe.next(3)
    subscribe.complete()
})

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log("done")
    }
})
from([1, 2, 3]).pipe(map((x) => x * 2)).subscribe(console.log)

const timer = interval(1000)

timer.subscribe((e) => {
    console.log(e)
})

interval(1000).pipe(take(5)).subscribe(console.log)

const input = document.getElementById("search");

const stream = fromEvent(input, "input")

stream
  .pipe(
    debounceTime(5000),
    map((event) => event.target.value),
  )
  .subscribe(console.log);

