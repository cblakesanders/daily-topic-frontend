# Daily Topics Frontend

A React application for displaying daily educational topics for elementary students.

## 🚀 Features

- **Daily Topic Display**: Shows educational content with topic title, paragraph, and grammar exercises with answer key
- **Video Integration**: Embeds educational videos from the API response
- **About Section**: Explains the tool's purpose and mission
- **Contact Form**: Email contact form for feedback and questions
- **Kid-Friendly UI**: Colorful, engaging design perfect for 4th-grade students
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Error Handling**: Graceful error handling with retry functionality
- **Loading States**: Smooth loading animations
- **API Integration**: Connects to FastAPI backend at localhost:8000

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   └── features/        # Feature-specific components
│       ├── DailyTopic.js
│       └── DailyTopic.css
├── services/
│   └── api.js          # API communication layer
├── hooks/
│   └── useDailyTopic.js # Custom hook for topic data
├── utils/
│   └── helpers.js      # Utility functions
├── styles/             # Global styles
├── assets/             # Images, icons, etc.
└── App.js              # Main app component
```

## 🛠️ Setup & Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Backend API
The app is configured to connect to your FastAPI backend at `http://localhost:8000`. Make sure your backend is running before testing the frontend.

### API Endpoints
- `GET /daily-topic` - Fetches the current daily topic with the following structure:
  ```json
  {
    "topic": "Solar Energy",
    "paragraph": "The sun provides light and warmth to our planet. Plants use sunlight to make their own food through photosynthesis. Solar panels can convert sunlight into electricity for our homes and schools.",
    "grammar_exercise": "the sun is hot plants need water birds can fly",
    "grammar_answer_key": [
      "The sun is hot.",
      "Plants need water.",
      "Birds can fly."
    ],
    "video_url": "https://www.youtube.com/embed/example",
    "status": "FastAPI is working!"
  }
  ```
  
  **Note**: The grammar exercise and answer key are generated in a single LLM call to ensure perfect matching between the sentences with errors and their corrections.

- `POST /send-email` - Sends contact form emails to your Gmail account
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Feedback",
    "message": "Great tool!"
  }
  ```
  
  **Note**: Requires Gmail SMTP configuration. See `EMAIL_SETUP.md` in the backend directory.

- `GET /video?topic={topic}` - Future endpoint for educational videos

## 🎨 UI Components

### DailyTopic Component
The main component that displays:
- Topic title and header
- Educational paragraph content
- Educational video (if available)
- Grammar exercise with mistakes to find
- Answer key for teachers (collapsible)
- Refresh button to get new topics

### Styling
- Uses Comic Sans MS font for kid-friendly appearance
- Gradient backgrounds and colorful design
- Responsive layout for all screen sizes
- Smooth animations and hover effects

## 🔌 API Integration

### useDailyTopic Hook
Custom React hook that manages:
- API calls to fetch daily topics
- Loading states
- Error handling
- Data refresh functionality

### API Service
Handles all communication with the backend:
- GET requests to fetch topic data
- Error handling and logging
- Future video API integration

## 🚀 Future Enhancements

1. **Video Integration**: Embed educational videos from YouTube API
2. **Interactive Exercises**: Add interactive grammar exercises
3. **Progress Tracking**: Track student progress and completion
4. **Offline Support**: Cache topics for offline viewing
5. **Accessibility**: Improve accessibility features
6. **Animations**: Add more engaging animations and transitions

## 🐛 Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure your FastAPI backend has CORS middleware configured:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### API Connection Issues
- Verify your backend is running on localhost:8000
- Check the browser console for error messages
- Ensure the `/daily-topic` endpoint is working

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎯 Target Audience

This app is designed specifically for 4th-grade elementary students with:
- Simple, intuitive navigation
- Large, readable text
- Colorful, engaging design
- Educational content at appropriate reading level
