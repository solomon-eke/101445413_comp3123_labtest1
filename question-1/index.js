function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        const answer = mixedArray.filter(item => typeof item === "string").map(item => item.toLowerCase());

        if (answer.length > 0) {  // Check if the answer array is not empty
            resolve(answer);
        } else {
            reject(new Error("It broke"));
        }
    });
}

// Test case
const mixedArray = ['PIZZA', 10, true, 25, false, 'WING'];

lowerCaseWords(mixedArray)
    .then(answer => console.log(answer))  // Outputs: ['pizza', 'wing']
    .catch(error => console.error(error.message)); // Handles the error
