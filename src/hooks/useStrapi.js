import { useState, useEffect } from 'react';
import { strapiService } from '../services/strapi';

export const useStrapi = () => {
  const [data, setData] = useState({
    destinations: [],
    heroSlides: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(prev => ({ ...prev, loading: true, error: null }));

        const [destinationsResponse, heroSlidesResponse] = await Promise.all([
          strapiService.getDestinations(),
          strapiService.getHeroSlides()
        ]);

        setData({
          destinations: destinationsResponse.data || [],
          heroSlides: heroSlidesResponse.data || [],
          loading: false,
          error: null
        });

      } catch (error) {
        console.error('Strapi API Error:', error);
        setData(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to load content from CMS. Make sure Strapi is running on http://localhost:1337'
        }));
      }
    };

    fetchData();
  }, []);

  return data;
};