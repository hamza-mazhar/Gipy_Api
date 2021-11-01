import axios from 'axios';
// in future here can be added more api

const getGifRequest = (url, method) => axios({ method, url });

export { getGifRequest };
