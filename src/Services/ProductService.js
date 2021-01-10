import http from '../http';                                                                                                                             
const getAll = (query) => {
    const uri = `/get-products?search=${query}`;
    return http.get(uri);
}
const remove = id => {
    return http.delete(`/delete-product/${id}`);
}
const create = (data) => {
    return http.post(`/create-product`, data);
}


export default {
    getAll,
    remove,
    create
}