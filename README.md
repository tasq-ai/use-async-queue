# use-async-queue

A React Hook implementing a queue for sync or async tasks with optional
concurrency limit. Default concurrency is 8. Set to `Infinity` or less than 1
for no concurrency limit.

Inspired by
[@caolan/async.queue](http://caolan.github.io/async/docs.html#queue).

## Usage

- Create a queue with some concurrency. Register for notifications as tasks
  are processed and finished.
- Add tasks to it. A task is an object with an `id` (some unique value that
  makes sense for your use case -- a number, a url, etc.) and a `task` (a
  function that returns a Promise).
- **Demo: https://codesandbox.io/s/use-async-queue-demo-53y89**

```javascript
import useAsyncQueue from 'use-async-queue';

// Example shows a task fetching a url, but a task can be any operation.
const url = 'some url';

const inflight = task => {
  console.log(`starting on ${task.id}`);
};

const done = task => {
  console.log(`fetched ${task.id}: ${task.result}`);
};

const drain = () => {
  console.log('all done');
};

const queue = useAsyncQueue({
  concurrency: 4,
  inflight,
  done,
  drain,
});

const { add, stats } = queue;

add({ id: url, task: () => fetch(url).then(res => res.text()) });
```

## TODO

- [x] return numInFlight, numRemaining, numDone
- [x] catch
- [x] pending/inflight
- [x] inflight callback
- [ ] timeouts
- [ ] start, stop methods
- [X] drain callback
- [ ] use events instead of/in addition to callbacks
