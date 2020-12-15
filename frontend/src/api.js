import axios from 'axios';

export function getPost(postId) {
    return axios.get('http://127.0.0.1:8000/index/portfolio/' + postId + '/');
}