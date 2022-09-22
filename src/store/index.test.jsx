import store from '.';

describe('store', () => {
  it('should create store', () => {
    expect(store).toBeTruthy();
  });

  it('should create initial state', () => {
    const state = store().getState();
    expect(state).toBeTruthy();
  });
});
