import { supabase } from "../../lib/supabase";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const { data: blog } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!blog) {
    return <p>Blog tidak ditemukan</p>;
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-10">
        {new Date(blog.created_at).toLocaleDateString()}
      </p>
      <div className="prose max-w-none">{blog.content}</div>{" "}
      <div className=""></div>
    </article>
  );
}
