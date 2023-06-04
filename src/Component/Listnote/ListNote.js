import React from "react";
import Onenote from "../Onenote/Onenote";
import { useSelector } from "react-redux";

function ListNote() {
  const data = useSelector((state) => state.noteSlice.note);
  return (
    <>
      <div className=" bg-green-100  overflow-hidden h-[100%]">
        <div className="mt-1  grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-5 w-[85%] h-[100%] lg:overflow-y-auto  mx-auto pb-52">
          {data &&
            data.map((item) => {
              return (
                <Onenote
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  discription={item.discription}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ListNote;
