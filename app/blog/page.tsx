import Link from "next/link";
import { supabase } from "../lib/supabase";

export default async function BlogPage() {
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("id, title, slug")
    .order("created_at", { ascending: false });

  if (error) {
    return <p>Error loading blogs</p>;
  }

  return (
    <main>
      <h1>Blog</h1>

      <ul>
        {blogs?.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
