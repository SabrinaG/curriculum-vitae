import React from 'react'; 
import { renderHook } from '@testing-library/react-hooks';
import { useResumeDefaultContext } from '../ResumeContext';

describe('useResumeDefaultContext.ResumeContext tests', () => {
  let ctx;
  const { result } = renderHook(() => useResumeDefaultContext());

  beforeEach(() => {
    ctx = result;
  });

  it('Should create the context', () => {
    expect(ctx.current.name).toBeDefined();
    expect(ctx.current.role).toBeDefined();
    expect(ctx.current.setName).toBeDefined();
    expect(ctx.current.setRole).toBeDefined();
  });
});
