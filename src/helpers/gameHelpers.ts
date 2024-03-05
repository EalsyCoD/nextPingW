import { type GameData } from '@/types/types';

// Проверяем, является ли объект data экземпляром типа GameData
export function isGamesActionProps(data: any): data is GameData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'producer' in data &&
    'title' in data &&
    'id' in data
  );
}
