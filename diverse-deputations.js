// 2. Diverse Deputations
// A professional society is using a program to determine possible diverse deputations of 3 members for an upcoming conference. There are m men and wwomen who are eligible. A deputation is diverse only if it contains at least one man and at least one woman. Two deputations are considered distinct if one has a member that the other does not. Given a number of men and women, determine the number of distinct ways to select a diverse deputation of 3 people.

// Example m = 1 w=3
// There is m = 1 man available and there are w = 3 women. Label them m1, w1, w2, w3 for demonstration. There are 3 possible ways to form a diverse deputation: (m1, w1, w2), (m1, w1, w3) and (m1, w2, w3). The only other possible permutation is (w1, w2, w3), which does not include a man, so it is invalid.

// Function Description
// Complete the function diverse Deputation in the editor below.
// diverseDeputation has the following parameters:
// int m: the number of men available
// int w: the number of women available

// Returns
// int: the number of ways to select a diverse deputation from m men and wwomen

function diverseDeputation(m, w) {
    // Check if there are at least one man and one woman
    if (m === 0 || w === 0 || m + w < 3) {
        return 0;
    }

    // Calculate the number of ways to select a diverse deputation
    let diverseWays = binomialCoefficient(m + w, 3) - binomialCoefficient(m, 3) - binomialCoefficient(w, 3);

    // If both men and women are equal, add combinations of 2 men and 1 woman (or 2 women and 1 man)
    if (m === w) {
        diverseWays += binomialCoefficient(m, 2) * binomialCoefficient(2, 1);
    }

    return diverseWays;
}

// Function to calculate the binomial coefficient (n choose k)
function binomialCoefficient(n, k) {
    if (k === 0 || k === n) {
        return 1;
    }

    let result = 1;
    for (let i = 1; i <= Math.min(k, n - k); i++) {
        result *= n - i + 1;
        result /= i;
    }

    return Math.round(result);
}
