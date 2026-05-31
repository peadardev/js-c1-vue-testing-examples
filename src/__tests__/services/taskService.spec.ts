import { describe, it, expect, vi } from 'vitest';
import { getTasks } from '@/services/taskService';

describe('taskService.ts', () => {
  it('hauria de tornar la llista de tasques quan la resposta és correcta', async () => {
    //arrange
    const tasquesMock: Task = [
      { id: 1, title: 'apren vue' },
      { id: 2, title: 'apren testing' },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(tasquesMock),
      })
    );

    //act
    const resultat = await getTasks();

    //assert
    expect(resultat).toEqual(tasquesMock);
    expect(fetch).toHaveBeenCalledOnce();
  });

  it('hauria de llençar una excepció quan la resposta falla', async () => {
    //arrange
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    //act & assert
    await expect(getTasks()).rejects.toThrow('Error en obtenir les tasques');
  });
});
