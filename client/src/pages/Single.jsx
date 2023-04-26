import React from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://picsum.photos/200/300" alt="" />
        <div className="user">
          <img src="https://picsum.photos/200/300" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis
          sequi, ipsa error quas illo ullam necessitatibus officia minima
          laudantium cupiditate rem beatae veritatis enim. Rem ab consectetur
          quas nisi?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
