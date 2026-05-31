export interface Task {
  id: number;
  title: string;
}

export async function getTasks(): Promise<Task[]> {
  const response = await fetch('http://api.ejemplo.com/tasks');

  if (!response.ok) {
    throw new Error('Error en obtenir les tasques');
  }

  return response.json();
}
