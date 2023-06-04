import React from "react";
import CreateNote from "../../Component/Createnote/CreateNote";
import ListNote from "../../Component/Listnote/ListNote";

function Home() {
  return (
    <div className="mt-[60px]  md:grid grid-cols-2-add	md:h-[96vh]  ">
      <CreateNote />
      <ListNote />
    </div>
  );
}

export default Home;
