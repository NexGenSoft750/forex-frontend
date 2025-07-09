// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
  },
  MARKETS: {
    DATA: `${API_BASE_URL}/api/markets/data`,
    SYMBOL: (symbol: string) => `${API_BASE_URL}/api/markets/data/${symbol}`,
  },
  EDUCATION: {
    COURSES: `${API_BASE_URL}/api/education/courses`,
    COURSE: (id: string) => `${API_BASE_URL}/api/education/courses/${id}`,
    TUTORIALS: `${API_BASE_URL}/api/education/tutorials`,
    LEARNING_PATH: `${API_BASE_URL}/api/education/learning-path`,
    ENROLL: (id: string) => `${API_BASE_URL}/api/education/courses/${id}/enroll`,
  },
  ABOUT: {
    COMPANY: `${API_BASE_URL}/api/about/company`,
    TEAM: `${API_BASE_URL}/api/about/team`,
    HISTORY: `${API_BASE_URL}/api/about/history`,
    ACHIEVEMENTS: `${API_BASE_URL}/api/about/achievements`,
    CONTACT: `${API_BASE_URL}/api/about/contact`,
  },
}; 