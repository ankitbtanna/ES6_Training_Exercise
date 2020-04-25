class IncreasingCounter {
   #value = 0;   // private variable
   counter = 0;  // public variable

   increment() {
      this.#value++;
      this.counter++;
   }

   get value() {
      return this.#value;
   }
}

const counter = new IncreasingCounter();
console.log(counter.counter);

counter.increment();
console.log(counter.counter);
