import axios from "axios";

let rootUrl = "http://localhost:8080";

// wrap get
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(rootUrl + url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        });
    });
}

// wrap post
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(rootUrl + url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        });
    });
}