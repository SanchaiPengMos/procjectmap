import axios from "../../axios/axios";

const apiGetLocation = () => {

    return axios.get("/public/api/v1/location")
 }

  export {
      apiGetLocation
  }