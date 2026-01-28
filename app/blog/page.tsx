type BlogPost = {
  id: number;
  title: string;
};

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Belajar Next.js dari Nol",
  },
  {
    id: 2,
    title: "Kenapa Git Penting untuk Developer",
  },
  {
    id: 3,
    title: "Kenapa kita harus bersa",
  },
];

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <p>Tulisan dan catatan apapun tentang aktivitas saya</p>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
