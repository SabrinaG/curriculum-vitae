import { renderHook } from '@testing-library/react-hooks';
import { useResumeDefaultContext } from '../ResumeContext';

describe('useResumeDefaultContext.ResumeContext tests', () => {
  let ctx;

  beforeEach(() => {
    const { result } = renderHook(() => useResumeDefaultContext());
    ctx = result;
  });

  it('Should create the context', () => {
    expect(ctx.current.name).toBeDefined();
    expect(ctx.current.role).toBeDefined();
  });
});
