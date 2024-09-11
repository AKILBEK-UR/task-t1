interface Card {
    name:string
    price:number
}
let cards: Card[] = []
function addCard(name:string, price:number){
    const item: Card = {name,price}
    cards.push(item);
    return `${name} has been added to Cards!`
}

function totalPrice(items:Card[]):number{
    return items.reduce((total, item) => total + item.price, 0)
}

console.log(addCard('Apple', 1.99));
console.log(addCard('Banana', 0.99));

//calculate
const totalCost = totalPrice(cards);
console.log(`Total cost: $${totalCost}`);
