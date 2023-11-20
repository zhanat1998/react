export const util = (arr) => {
    // console.log(arr);
    const res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].localName === 'button') continue;
        res[arr[i].name] = arr[i].value;
    }
    return res;
}