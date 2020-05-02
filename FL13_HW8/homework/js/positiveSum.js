function positiveSum(arrayOfNumbers) {
    return arrayOfNumbers.reduce((accumulator, currentvalue) => {
        if (currentvalue > 0) {
            return accumulator + currentvalue;
        } else {
            return accumulator;
        }
    }, 0);
}
positiveSum([2, 4, 6, 8]);
positiveSum([0, -3, 5, 7]);