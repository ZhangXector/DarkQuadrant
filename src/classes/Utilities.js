/**
 * Utilities Class: Wrapper class for globally accessible utility functions
 */
class Utilities
{
    /**
     * Returns a weighted random key from a probability object
     * @param probObj An object in the form {key1: prob, key2: prob} where prob
     * is the probabilities that each key will be selected within 0-1 (all
     * probabilities must add up to a total of 1
     * @param rng Random number generation function to call
     * @return {string} Weighted random selection key from the object
     */
    static weightedRandom(probObj, rng)
    {
        let rand = rng();
        let sum = 0;
        for (let key in probObj)
        {
            sum += probObj[key];
            if (rand <= sum)
            {
                return key;
            }
        }
    }
}