/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
 var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    const n = energy.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const minEnergy = energy[i];
        const minExperience = experience[i];
        if (initialEnergy <= minEnergy) {
            const need = minEnergy - initialEnergy + 1;
            ans += need;
            initialEnergy += need;
        }
        if (initialExperience <= minExperience) {
            const need = minExperience - initialExperience + 1;
            ans += need;
            initialExperience += need;
        }
        initialEnergy -= minEnergy;
        initialExperience += minExperience;
    }
    return ans;
};


console.log(minNumberOfHours(5, 3, [1,4,3,2], [2,6,3,1]));
console.log(minNumberOfHours(2, 4, [1], [3]));