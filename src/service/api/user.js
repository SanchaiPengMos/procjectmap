import axios from "../../axios/axios";


const apiGetUser = () => {

    return axios.get("/public/api/v1/user/getuser")
 }

  export {
      apiGetUser
  }