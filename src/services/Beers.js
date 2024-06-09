import axios from "axios";

const http = axios.create({
    baseUrl : "https://ih-beers-api2.herokuapp.com/beers"
})

http.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error(error)
        return Promise.reject(error)
    }
)
export const getBeer = (id) => http.get(`/${id}`)
export const getRandomBeer = (id) => http.get('/random')
export const addBeer = (id) => http.post("/new", beer)

export const getAllBeers = (searchQuery) => {
    return searchQuery ? http.get(`/search?q=${searchQuery}`): http.get('/')
}