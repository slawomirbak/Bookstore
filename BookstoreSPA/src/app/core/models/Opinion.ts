export interface Opinion {
  id: string;
  authorId: string;
  authorAvatar: string;
  authorFullName: string;
  likes: number;
  dislikes: number;
  created: string;
  description: string;
}
