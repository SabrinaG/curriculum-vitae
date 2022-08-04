import { renderHook } from '@testing-library/react-hooks';
import { useUserDefaultContext } from '../UserContext';

describe('Containers.UserContext tests', () => {
  let ctx;

  beforeEach(() => {
    const { result } = renderHook(() => useUserDefaultContext());
    ctx = result;
  });

  it('Should create the context', () => {
    expect(ctx.current.userInfo).toBeUndefined();
    expect(ctx.current.tfvName).toBeUndefined();
    expect(ctx.current.sectoName).toBeUndefined();
  });
});
