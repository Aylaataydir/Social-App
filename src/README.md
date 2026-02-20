# Social App

A basic social media app built with React, Vite, Material UI, and React Router.

## Current Features

- Feed page with mock posts
- Profile page with user details
- Friends page with friend cards
- Messages page with chat-style UI
- Responsive layout (desktop + mobile drawer)
- Dark / Light mode toggle
- Routing with nested pages
- npm i faker-js to generate mock data

```js
// Mock function to generate a single post
const generatePost = (id) => ({
  id: id.toString(),
  authorName: faker.person.fullName(),
  authorAvatar: faker.image.avatar(),
  timestamp: faker.date.recent().toLocaleDateString(),
  content: faker.lorem.paragraph(5),
  image: `https://picsum.photos/600/400?random=${id}`,
  likes: faker.number.int({ min: 10, max: 500 }),
});

// Generate 10 mock posts
const mockPosts = Array.from({ length: 10 }, (_, i) => generatePost(i + 1));
```

## Tech Stack

- React
- Vite
- Material UI
- React Router DOM
- Zustand
- Faker (mock data)

## Features To Add

- User authentication (login/register)
- Real backend API integration
- Create / edit / delete posts
- Like, comment, and share system
- Real-time chat with WebSocket
- Friend requests and notifications
- Search users and posts
- Profile editing and image upload
- Save posts / bookmarks
- Pagination or infinite scroll

## UI/UX
