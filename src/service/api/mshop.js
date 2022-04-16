import axios from "../../axios/axios";

const apiSearchShop = (id) => {
    return axios.get(`/public/api/v1/search/management/${id}`)
}

export {
    apiSearchShop
}