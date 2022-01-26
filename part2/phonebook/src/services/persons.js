import React from "react";
import axios from "axios";
// const baseURL = "http://localhost:3001/persons";
// connect to local backend server
// const baseURL = "http://localhost:3001/api/persons";
// connect to heroku backend server
const baseURL = "https://infinite-ridge-50582.herokuapp.com/api/persons";

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => {
    return response.data;
  });
};

const create = (newPerson) => {
  const request = axios.post(baseURL, newPerson);
  return request.then((response) => {
    return response.data;
  });
};

const update = (id, newPerson) => {
  const request = axios.put(`${baseURL}/${id}`, newPerson);
  return request.then((response) => {
    return response.data;
  });
};

const erase = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  return request.then((response) => {
    console.log(response);
    return response.data;
  });
};

export default { getAll, create, update, erase };
