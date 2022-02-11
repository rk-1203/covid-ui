export const getFormattedDate = (date = new Date()) => {
    date = new Date(date);
    const day = date.toLocaleDateString("en-US", { day: '2-digit' });
    const month = date.toLocaleDateString("en-US", { month: 'short' });
    const year = date.toLocaleDateString("en-US", { year: 'numeric' });
    return `${day} ${month} ${year}`;
}

export const getFormattedTime = (date = new Date()) => {
    date = new Date(date);
    const time = date.toLocaleTimeString("en-US", { hour: 'numeric', minute: 'numeric' });
    return time;
}

export const getFormattedNumber = (num) => {
    const formattedNumber = num.toLocaleString('en-IN');
    return formattedNumber;
} 