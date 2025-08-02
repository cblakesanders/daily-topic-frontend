const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const emailService = {
  async sendContactEmail(formData) {
    try {
      
      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Backend error:', errorData);
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Backend success response:', result);
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}; 