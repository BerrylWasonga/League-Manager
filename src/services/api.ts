import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
  },
};

// Player APIs
export const playerAPI = {
  register: async (playerData: any) => {
    const response = await api.post('/players', playerData);
    return response.data;
  },
  getAll: async () => {
    const response = await api.get('/players');
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/players/${id}`);
    return response.data;
  },
  search: async (query: string) => {
    const response = await api.get(`/players/search?q=${query}`);
    return response.data;
  },
};

// Attendance APIs
export const attendanceAPI = {
  mark: async (data: { playerId: string; date: string; present: boolean }) => {
    const response = await api.post('/attendance', data);
    return response.data;
  },
  getByDate: async (date: string) => {
    const response = await api.get(`/attendance/${date}`);
    return response.data;
  },
  getStats: async (startDate: string, endDate: string) => {
    const response = await api.get(`/attendance/stats?start=${startDate}&end=${endDate}`);
    return response.data;
  },
};

// Team APIs
export const teamAPI = {
  getAll: async () => {
    const response = await api.get('/teams');
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/teams/${id}`);
    return response.data;
  },
  create: async (teamData: any) => {
    const response = await api.post('/teams', teamData);
    return response.data;
  },
};

export default api;