import { getAllUser } from "../redux/userSlice";
import { axiosInstance } from "../utils/axiosInstance";

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("/users/getallusers");
    dispatch(getAllUser(res.data));
  } catch (err) {
    console.log(err);
  }
};
