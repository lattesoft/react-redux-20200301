import axios from "axios";

export const login = (payload, props) => {
  return dispatch => {
    axios.get("https://reqres.in/api/users/5").then(res => {
      props.history.push("/user");
      return dispatch({
        type: "SET_USER",
        payload: res.data.data
      });
    });
  };
};

export const logout = () => {
  return (dispatch)=>{
    dispatch({
        type: "RESET_USER"
    });
  }
};
