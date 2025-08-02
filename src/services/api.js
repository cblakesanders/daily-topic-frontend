const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const apiService = {
  async getDailyTopic() {
    try {
      const response = await fetch(`${API_BASE_URL}/daily-topic`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching daily topic:', error);
      throw error;
    }
  },

  // Future method for when you add video functionality
  async getEducationalVideo(topic) {
    try {
      const response = await fetch(`${API_BASE_URL}/video?topic=${encodeURIComponent(topic)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching educational video:', error);
      throw error;
    }
  }
}; 