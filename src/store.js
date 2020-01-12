import createStore from 'unistore';
import Axios from 'axios';

const initialState = {
    isLoading : true,
    username : '',
    password : '',
    listBook : [],
};
export const store = createStore(initialState)

export const actions = store => ({
    getBook : ()=>{
        const self = this
        const req = {
            method: "get",
            url: "http://localhost:5000/public/book",
            headers: {
              "Content-Type": "application/json"
            }
        }
        Axios(req)
        .then(function(response) {
            store.setState({listBook : response.data.data, isLoading: false})
        })
        .catch(function(error) {
            store.setState({isLoading: false})
        })
    },
    handleSearch : async (state,e) => { 
        let keyword = e.target.value
        getBookByCondition(keyword)
    },
    handleCategory : async (state,e) => { 
        let keyword = e
        console.log('tess keyword category', keyword)
        getBookByCategory(keyword)
    },    
})
export const getBookByCondition = async (keyword) =>{
        const self = this
        const req = {
            method: "get",
            url: `http://localhost:5000/public/book?search=${keyword}`,
            headers: {
              "Content-Type": "application/json"
            }
        }
        Axios(req)
        .then(function(response) {
            store.setState({listBook : response.data.data, isLoading: false})
        })
        .catch(function(error) {
            store.setState({isLoading: false})
        })
}
export const getBookByCategory = async (keyword) =>{
    const self = this
    const req = {
        method: "get",
        url: `http://localhost:5000/public/book`,
        headers: {
          "Content-Type": "application/json"
        },
        data:{
            "jenjang" : `${keyword}`
        }
    }
    Axios(req)
    .then(function(response) {
        store.setState({listBook : response.data.data, isLoading: false})
    })
    .catch(function(error) {
        store.setState({isLoading: false})
    })
}
