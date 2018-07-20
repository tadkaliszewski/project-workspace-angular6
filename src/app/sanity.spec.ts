describe('addTwoNumbers', () => {

  function addTwoNumbers(a: number, b: number): number {
    return a + b;
  }

  it('should add two numbers', () => {
    // GIVEN:

    // WHEN:
    const myResult = addTwoNumbers(100, 200);

    // THEN:
    expect(myResult).toEqual(300);
  });
});
