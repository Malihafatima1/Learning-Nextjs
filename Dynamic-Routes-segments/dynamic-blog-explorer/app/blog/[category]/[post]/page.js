async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
  }

export default async function PostPage({params}) {
    const { category, post }=await params;

    const data = await getPost(post);

    return (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
    
          <p>Category: {category}</p>
        </div>
      );
}