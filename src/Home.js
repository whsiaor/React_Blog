import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs")
  //   const [name, setName] = useState("mario");

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  

  return (
    <div className="home">
      {error && <div>{error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <button onClick={() => setName("luigi")}>Change name</button> */}

      {/* <BlogLis3t
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs!"
      /> */}
    </div>
  );
}

export default Home;
