// src/data.js
import { faker } from '@faker-js/faker';

const generatePost = (id) => ({
  id: id.toString(),
  authorName: faker.person.fullName(),
  authorAvatar: faker.image.avatar(),
  timestamp: faker.date.recent().toLocaleDateString('tr-TR'),
  content: faker.lorem.paragraph(2),
  image: `https://picsum.photos/600/400?random=${id}`,
  likes: faker.number.int({ min: 10, max: 500 }),
});

export const data = Array.from({ length: 10 }, (_, i) => generatePost(i + 1));



// import React from 'react';
// import { mockPosts } from './data'; // Veriyi çekiyoruz
// import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, Container, Stack } from '@mui/material';

// function PostList() {
//   return (
//     <Container maxWidth="sm">
//       <Stack spacing={4} sx={{ my: 4 }}>
//         {mockPosts.map((post) => (
//           <Card key={post.id} elevation={3}>
//             {/* 1. Üst Kısım: İsim ve Avatar */}
//             <CardHeader
//               avatar={<Avatar src={post.authorAvatar} />}
//               title={post.authorName}
//               subheader={post.timestamp}
//             />
            
//             {/* 2. Orta Kısım: Görsel */}
//             <CardMedia
//               component="img"
//               height="300"
//               image={post.image}
//               alt="Post image"
//             />
            
//             {/* 3. Alt Kısım: İçerik */}
//             <CardContent>
//               <Typography variant="body2" color="text.secondary">
//                 {post.content}
//               </Typography>
//               <Typography variant="caption" sx={{ mt: 2, display: 'block', fontWeight: 'bold' }}>
//                 ❤️ {post.likes} Beğeni
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </Stack>
//     </Container>
//   );
// }

// export default PostList;