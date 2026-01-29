type BlogDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Detail Blog</h1>
      <p>Slug: {slug}</p>
    </main>
  );
}
