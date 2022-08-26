export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://enigmatic-hollows-42088.herokuapp.com/api/v1'
  : 'http://localhost:8080/api/v1';

export const SITE_URL = 'https://pfweb.vercel.app'