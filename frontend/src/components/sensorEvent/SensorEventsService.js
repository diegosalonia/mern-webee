import axios from "axios";

const api = "http://localhost:3000/api";


export const createSensorEvent = async (sensor) => {
    return await axios.post(`${api}/sensorevent`, sensor);
};

export const getSensorsEvent = async (sensor) => {
    return await axios.get(`${api}/sensorevent`);
};

export const updateSensorEvent = async (id, sensor) => {
return await axios.put(`${api}/sensor/${id}`, sensor);
};

export const deleteSensorEvent = async (id) => {
return await axios.delete(`${api}/sensor/${id}`);
};