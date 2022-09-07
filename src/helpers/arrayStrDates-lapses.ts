export const createArray = (hace: number): string[] => {

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    let arrayFechasStr: string[] = [];
    
    arrayFechasStr.push(today.toDateString());
    arrayFechasStr.push(yesterday.toDateString());

    //arrayFechasStr.push(weekday[actual.getDay()], actual.toLocaleDateString());
    for (let index: number = 0; index < hace; index++) {
        yesterday.setDate(yesterday.getDate() - 1);
        arrayFechasStr.push(yesterday.toDateString());
    }

    return arrayFechasStr;

}