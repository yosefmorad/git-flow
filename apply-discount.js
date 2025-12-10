export default function applyDiscount(total, discountPercent){
    if (total < 0){
        return "Invalid"
    }
    if (discountPercent > 100){
        return "discount incourrect"
    }
    total = total/100
    return total *(100-discountPercent)
}
