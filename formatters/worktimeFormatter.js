export default function formatWorkTime(amount) {
    const timeSymbol = 'h';
    return `${amount.string} ${timeSymbol}`;
}