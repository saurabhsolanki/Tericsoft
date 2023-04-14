import * as types from "./actionType";
import axios from "axios";

export const dataPost = (data) => (dispatch) => {
  axios.post("https://mockjson-0nv3.onrender.com/saurabh", data).then((res) => {
    dispatch(dataGet());
    alert("Data added");
  });
};
export const dataGet = () => async (dispatch) => {
 let res= await axios.get("https://mockjson-0nv3.onrender.com/saurabh")
    dispatch({ type: types.getDatauccess, payload: res.data });

};

export const dataDelete = (id) => (dispatch) => {
  axios.delete(`https://mockjson-0nv3.onrender.com/saurabh/${id}`).then((res) => {
    dispatch(dataGet());
  });
};
export const dataUpdate = (id, data) => (dispatch) => {
  axios.patch(`https://mockjson-0nv3.onrender.com/saurabh/${id}`, data).then((res) => {
    dispatch(dataGet());
    alert("Data Updated Successfully")
  });
};
