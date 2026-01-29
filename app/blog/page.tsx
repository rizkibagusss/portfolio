import Link from "next/link";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
};

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Belajar Next.js dari Nol",
    slug: "belajar-nextjs",
  },
  {
    id: 2,
    title: "Kenapa Git Penting untuk Developer",
    slug: "kenapa-git-penting",
  },
  {
    id: 3,
    title: "Kenapa kita harus bersabar",
    slug: "kenapa-harus-bersabar",
  },
];

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <p>Tulisan dan catatan apapun tentang aktivitas saya</p>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
