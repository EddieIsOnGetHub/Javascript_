

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

theList.pop(); 
theList.shift(); 
theList.unshift("FIRST"); 
theList[3] = "hello World"; 
theList[2] = "MIDDLE"; 
theList.splice(4)
theList.push("LAST"); 
console.log(theList);

StoreItems = [];

let Item1 = { ItemName: "Laptop1", 
            cost: "15000", 
            moddle: "10",
            quantity: "10",
          };

let Item2 = { ItemName: "Laptop2", 
          cost: "10000", 
          moddle: "5",
          quantity: "20",
        };

let Item3 = { ItemName: "Laptop3", 
        cost: "5000", 
        moddle: "3",
        quantity: "30",
      };

let quantity = Item3.quantity
console.log(Item3.quantity)

let Item4 = {
    cost: "2000",
    moddle: "15",
    quantity: "1"
}

let inv = [Item1,Item2,Item3,Item4]
console.log(inv)