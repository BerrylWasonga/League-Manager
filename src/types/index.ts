export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface Player {
  id: string;
  fullName: string;
  gender: 'male' | 'female';
  age: number;
  category: string;
  parentName: string;
  parentPhone: string;
  location: string;
  team: string;
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  id: string;
  name: string;
  category: string;
  players: Player[];
}

export interface AttendanceRecord {
  id: string;
  playerId: string;
  date: string;
  present: boolean;
  player: Player;
}

export interface AttendanceStats {
  totalPlayers: number;
  presentCount: number;
  absentCount: number;
  percentage: number;
}