describe('sum', () => {
  afterAll(() => {});
  it('adds', () => {
    expect(1 + 1).toBe(2);
  });
  it.only('adds again', () => {
    expect(1 + 2).toEqual(3);
  });
});
