export function subtractHours(date: Date, numOfHours: number) {
    const dateCopy = new Date(date.getTime());

    dateCopy.setHours(dateCopy.getHours() - numOfHours);

    return dateCopy;
}

export function formatRelativeDate(date: Date): string {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - date.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
    } else if (diffInHours > 0) {
        return `${diffInHours} час${diffInHours > 1 ? 'а' : ''} назад`;
    } else if (diffInMinutes > 0) {
        return `${diffInMinutes} минут${diffInMinutes > 1 ? 'ы' : 'у'} назад`;
    } else {
        return 'только что';
    }
}