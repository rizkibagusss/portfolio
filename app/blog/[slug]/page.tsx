import { supabase } from "../../lib/supabase";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !blog) {
    return <p>Blog tidak ditemukan</p>;
  }

  return (
    <article>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </article>
  );
}
