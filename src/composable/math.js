export const fixedDecimal = (number) => {
    return Math.round(number * 10) / 10;
}

export const moneyFormatter = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency:'USD'
})
