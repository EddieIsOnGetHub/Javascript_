class Menu {
    Menu1 = 10;
    #Menu2 = 20;

    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    calTotal() {
        return (this.value1 * this.Menu1) + (this.value2 * this.#Menu2);
    }
    get total() {
        return this.calTotal();
    }
}

const value1 = new Menu(2, 0); // 20
const value2 = new Menu(1, 3); // 70
const val3 = new Menu(3, 2); // 70

console.log(value1.total);
console.log(value2.total);
console.log(val3.total);

