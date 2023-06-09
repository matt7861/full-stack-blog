import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // TEMP DATA
  const posts = [
    {
      id: 1,
      title: "1 Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque nulla asperiores, quam repellat aspernatur dicta voluptatem laborum? Facilis totam id laudantium, magni repellat dolorem eveniet ipsam necessitatibus laborum deserunt?",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "2 Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque nulla asperiores, quam repellat aspernatur dicta voluptatem laborum? Facilis totam id laudantium, magni repellat dolorem eveniet ipsam necessitatibus laborum deserunt?",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "3 Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque nulla asperiores, quam repellat aspernatur dicta voluptatem laborum? Facilis totam id laudantium, magni repellat dolorem eveniet ipsam necessitatibus laborum deserunt?",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title: "4 Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque nulla asperiores, quam repellat aspernatur dicta voluptatem laborum? Facilis totam id laudantium, magni repellat dolorem eveniet ipsam necessitatibus laborum deserunt?",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      title: "5 Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque nulla asperiores, quam repellat aspernatur dicta voluptatem laborum? Facilis totam id laudantium, magni repellat dolorem eveniet ipsam necessitatibus laborum deserunt?",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      title: "6 Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque nulla asperiores, quam repellat aspernatur dicta voluptatem laborum? Facilis totam id laudantium, magni repellat dolorem eveniet ipsam necessitatibus laborum deserunt?",
      img: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
