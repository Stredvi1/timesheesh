export default function formatWorkTime(amount) {
    const formattedAmount = Number(amount.string).toLocaleString('cs-CZ');
    const currencySymbol = 'Kč';

    return `${formattedAmount} ${currencySymbol}`;
}