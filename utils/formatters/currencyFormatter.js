export default function formatCurrency(amount) {
    const formattedAmount = Number(amount).toLocaleString('cs-CZ');
    const currencySymbol = 'Kč';

    return `${formattedAmount} ${currencySymbol}`;
}