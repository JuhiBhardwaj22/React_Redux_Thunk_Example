import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deletData } from "./Store/action";

const MiddlewareExample = () => {
  const dispatch = useDispatch();
  // Selects the state value from the store.
  const data = useSelector((state) => state.dataReducer.todo);
  // Dispatches action to add the data
  const handleAddData = () => {
    dispatch(addData());
  };
  // Dispatches action to delete the data.
  const handleDeleteData = () => {
    dispatch(deletData());
  };
  return (
    <div>
      <button onClick={handleAddData}>Add Data</button>
      <button onClick={handleDeleteData}>Delete Data</button>

      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default MiddlewareExample;
