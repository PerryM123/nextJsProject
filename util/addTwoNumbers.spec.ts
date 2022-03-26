import addTwoNumbers from './addTwoNumbers';

describe('Ingredient DAL', () => {
  let ingredientId: number
  beforeAll(async () => {
    console.log('beforeAll');
  })
  afterAll(async () => {
    console.log('afterAll');
  })

  describe('addTwoNumbers', () => {
    it('should add two numbers', async () => {
      const x: number = 12;
      const y: number = 1;
      expect(addTwoNumbers(x, y)).toEqual(13);
      expect(addTwoNumbers(x, y)).not.toEqual(11);
    })
  })
})
