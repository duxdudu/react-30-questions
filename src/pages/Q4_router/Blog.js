import { Link, Outlet } from "react-router-dom";

function Blog() {
  const posts = [
    { id: 1, title: "Blog 1" },
    { id: 2, title: "Blog 2" },
    { id: 3, title: "Blog 3" },
  ];
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to the blog section! Choose a post to read: </p>
      <ul style={{display:"flex" , gap:"10px"}}>
        {posts.map((post) => (
          <div >
            <Link to={`/blog/${post.id}`}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
              ":hover": { color: "blue" },
            }}
            >{post.title} </Link>
            <br />
          </div>
        ))}
      </ul>
      {/* Outlet renders child routes */}
      <Outlet />
    </div>
  );
}

export default Blog;
