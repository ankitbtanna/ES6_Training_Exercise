class IncreasingCounter {
    #value = 0;

    increment() {
        this.#value++;
    }

    get value() {
        return this.#value;
    }
}

const counter = new IncreasingCounter();
console.log(counter.#value);

counter.increment();
console.log(counter.#value);