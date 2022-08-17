const formatFileName = (str) => {
    // out of stock -> out-of-stock

    const letterArr = str.toLowerCase().split('');

    let output = '';
    letterArr.forEach((letter, idx) => {
        if(letter === ' '){ 
            letterArr[idx] = '-';
        }
        output += letterArr[idx];
    });

    return output;
}

export default formatFileName;