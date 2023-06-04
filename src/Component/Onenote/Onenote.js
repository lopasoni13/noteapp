import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/slice/noteSlice";

function Onenote(props) {
  const displach = useDispatch();

  return (
    <>
      <div className="relative p-2 w-[90%] h-[300px] mx-auto border-solid rounded-lg border-[2px] border-green-700  shadow-xl">
        <h3 className="text-xl font-medium">{props.title}</h3>
        <hr className="bg-green-700 h-[2px]" />
        <p className="h-[200px] overflow-y-auto">{props.discription}</p>
        <button
          onClick={() => displach(deleteNote(props.id))}
          className="absolute bottom-3 right-3 p-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
        >
          delete
        </button>
      </div>
    </>
  );
}

export default Onenote;
