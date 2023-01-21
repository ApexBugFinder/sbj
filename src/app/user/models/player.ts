export interface Player{
  id: Number;
  name: string;
  limit: Number;
  created_at: Date | undefined;
}

export const defaultPlayer = {
  id: 1,
  name: 'testUser12',
  limit: 0,
  created_at: undefined,
};
