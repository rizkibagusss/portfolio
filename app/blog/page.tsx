import Link from "next/link";
import { supabase } from "../lib/supabase";

export default async function BlogPage() {
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("id, title, slug, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return <p>Error mengambil data blog</p>;
  }

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="grid gap-6">
        <ul>
          {blogs?.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/blog/${blog.slug}`}
                className="block border rounded-xl p-6 mb-3 hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>

                <p className="text-sm text-gray-500">
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
