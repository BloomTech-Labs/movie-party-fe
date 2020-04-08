  import axios from "axios";

const authAxios = () => {
  const token = localStorage.getItem("token");
  // console.log('token !! ', token);

  return axios.create({
    headers: {
      Authorization: token
    }
  });
};

export default authAxios;