// src/data.js
import { faker } from '@faker-js/faker';

const generatePost = (id) => ({
  id: id.toString(),
  authorName: faker.person.fullName(),
  authorAvatar: faker.image.avatar(),
  timestamp: faker.date.recent().toLocaleDateString('tr-TR'),
  content: faker.lorem.paragraph(8),
  image: `https://picsum.photos/600/400?random=${id}`,
  likes: faker.number.int({ min: 10, max: 500 }),
});

export const data = Array.from({ length: 10 }, (_, i) => generatePost(i + 1));

