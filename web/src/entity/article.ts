export interface Article {
  id: number;
  description: string;
  content: string;
  title: string;
  // 点击量
  hits: number;
  createdAt: number;
}
