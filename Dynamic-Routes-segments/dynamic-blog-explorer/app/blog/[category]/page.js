import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const posts = await getPosts();

  return (
    <div>
      <h1>Category:{category}</h1>

      {posts.slice(0, 10).map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${category}/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
