import React from "react";

const Menu = () => {
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
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}></div>
      ))}
    </div>
  );
};

export default Menu;
