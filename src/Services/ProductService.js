import http from '../http';                                                                                                                             
const getAll = () => {
    return http.get(`/get-products`);
}
const remove = id => {
    return http.delete(`/delete-prodct/${id}`);
}
const create = (data) => {
    return http.post(`/create-product`, data);
}


export default {
    getAll,
    remove,
    create
}