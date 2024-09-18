const{numOptions, getRandomNum, getRandomNumDiffFromLast}= require("../utilities.js")

describe('numOptions', () => {
    it('returns an array', () => {
        // Assign
        // Act
        const output = numOptions()
        // Assert
        expect(Array.isArray(output)).toBe(true)
    })
    it('returns an array of length 1, with the single elements value to be 1, when passed 1 as a starting number and ending number', () => {
        // Assign
        const numStart = 1
        const numEnd = 1
        const expected = [1]
        // Act
        const output = numOptions(numStart, numEnd)
        // Assert
        expect(output).toEqual(expected)
        expect(output.length).toBe(1)
    })
    it('returns an array 0f length 10 when passed 1 as starting number and 10 as ending number', () => {
        // Assign
        const numStart = 1
        const numEnd = 10
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // Act
        const output = numOptions(numStart, numEnd)
        // Assert
        expect(output).toEqual(expected)
        expect(output.length).toBe(10)
    })
})

describe('getRandomNum', () => {
    it('returns a number if min is less than max', () => {
        // Assign
        const min = 1
        const max = 3
        // Act
        const output = getRandomNum(min, max)
        // Assert
        expect(typeof output).toBe('number')
    })
    it('returns a number between the two values', () => {
        // Assign
        const min = 1
        const max = 30
        
        for (let i = 0; i < 10000; i++) {
            // Act
            const output = getRandomNum(min, max)
            // Assert
            expect(output).toBeLessThan(31)
            expect(output).toBeGreaterThan(0)
        }
    })
    it('should return  "Min should be less than max" if passed min value that is equal to the max value', () => {
        // Assign
        const min1 = 1
        const max1 = 1
        // Act
        const output = getRandomNum(min1, max1)   
        // Assert
        expect(output).toBe('Min should be less than max')
    })
    it('should return  "Min should be less than max" if passed min value that is greater than the max value', () => {
        // Assign
        const min1 = 4
        const max1 = 1
        // Act
        const output = getRandomNum(min1, max1)   
        // Assert
        expect(output).toBe('Min should be less than max')  
    })
})

describe('getRandomNumDiffFromLast', () => {
    it('returns a number', () => {
        // Assign
        const min = 1
        const max = 2
        // Act
        const ranNumGenerator = getRandomNumDiffFromLast(min, max)
        // Assert
        expect(typeof ranNumGenerator()).toBe('number')
    })
    it('returns a number between the two values', () => {
        // Assign
        const min = 1
        const max = 30
        
        for (let i = 0; i < 10000; i++) {
            // Act
            const ranNumGenerator = getRandomNumDiffFromLast(min, max)
            // Assert
            expect(ranNumGenerator()).toBeLessThan(31)
            expect(ranNumGenerator()).toBeGreaterThan(0)
        }
    })
    it('returns a number between the two values, but not equal to the last number generated', () => {
        // Assign
        const min = 1
        const max = 3
        // Act
        const ranNumGenerator = getRandomNumDiffFromLast(min, max)
        for (let i = 0; i < 10000; i++) {
            const output1 = ranNumGenerator()
            const output2 = ranNumGenerator()
            // Assert
            expect(output1).not.toBe(output2)
        }
    })
    it('should return  "Min should be less than max" if passed min value that is equal to the max value', () => {
        // Assign
        const min1 = 1
        const max1 = 1
        // Act
        const ranNumGenerator = getRandomNumDiffFromLast(min1, max1)
        const output = ranNumGenerator()      
        // Assert
        expect(output).toBe('Min should be less than max')
    })
    it('should return  "Min should be less than max" if passed min value that is greater than the max value', () => {
        // Assign
        const min1 = 4
        const max1 = 1
        // Act
        const ranNumGenerator = getRandomNumDiffFromLast(min1, max1)
        const output = ranNumGenerator()     
        // Assert
        expect(output).toBe('Min should be less than max')  
    })
})