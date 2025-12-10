export default function  calculateTotalPrice(price, quantity){
    if (price* quantity < 0){
        return"invalid"

    }
    return price * quantity
}console.log(calculateTotalPrice(-6 ,3));
