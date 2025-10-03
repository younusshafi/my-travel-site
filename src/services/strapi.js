import axios from 'axios';

const STRAPI_URL = 'http://localhost:1337';

const api = axios.create({
  baseURL: STRAPI_URL,
});

export const strapiService = {
  // Get all destinations with images populated
  getDestinations: async () => {
    const response = await api.get('/api/destinations?populate=*');
    return response.data;
  },

  // Get active hero slides
  getHeroSlides: async () => {
    const response = await api.get('/api/hero-slides?filters[active][$eq]=true&populate=*');
    return response.data;
  },

  // Get single destination by slug
  getDestination: async (slug) => {
    const response = await api.get(`/api/destinations?filters[slug][$eq]=${slug}&populate=*`);
    return response.data;
  }
};