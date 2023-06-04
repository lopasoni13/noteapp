import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNote } from "../../redux/slice/noteSlice";
import { nanoid } from "@reduxjs/toolkit";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const dispach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispach(setNote({ title, discription, id: nanoid(10) }));
    setTitle("");
    setDiscription("");
  };

  return (
    <div className="bg-green-100 lg:bg-white flex justify-center items-center overflow-hidden">
      <form onSubmit={handleSubmit} className="w-[80%] lg:w-[60%]" action="">
        <input
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="p-2 my-2 block w-[100%] border-solid rounded-lg border-[2px] focus:border-[3px] border-green-700 outline-none"
          type="text"
          value={title}
          placeholder="Title"
        />
        <textarea
          required
          value={discription}
          onChange={(e) => {
            setDiscription(e.target.value);
          }}
          placeholder="Enter the descipton"
          className="p-2 my-2 block w-[100%] border-solid rounded-lg border-[2px] focus:border-[3px] border-green-700  outline-none"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button
          type="submit"
          className="w-[50%] p-4 bg-green-700 hover:bg-green-800 text-white rounded-md"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
