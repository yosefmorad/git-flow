export default function applyDiscount(total, discountPercent){
    if (total < 0){
        return "Invalid"
    }
    total = total/100
    return total *(100-discountPercent)
}
console.log(applyDiscount(354, 10))