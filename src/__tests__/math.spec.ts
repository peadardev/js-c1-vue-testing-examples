import { describe, expect, it } from 'vitest';
import { sumar } from '@/utils/math';

describe('funció sumar', () => {
  it('hauria de retornar la suma de 2 nombres positius', () => {
    // arrange
    const a = 2;
    const b = 3;

    // act
    const resultat = sumar(a, b);

    //assert
    expect(resultat).toBe(5);
  });

  it('hauria de funcionar per nombres negatius', () => {
    // arrange
    const a = -5;
    const b = 3;

    // act
    const resultat = sumar(a, b);

    //assert
    expect(resultat).toBe(-2);
  });

  it('hauria de tornar un dels operands si l altre és 0', () => {
    // arrange
    const a = -5;
    const b = 0;

    // act
    const resultat = sumar(a, b);

    //assert
    expect(resultat).toBe(-5);
  });
});
