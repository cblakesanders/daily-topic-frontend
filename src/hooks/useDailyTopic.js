import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const useDailyTopic = () => {
  const [topicData, setTopicData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDailyTopic = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getDailyTopic();
      setTopicData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyTopic();
  }, []);

  const refreshTopic = () => {
    fetchDailyTopic();
  };

  return {
    topicData,
    loading,
    error,
    refreshTopic
  };
}; 