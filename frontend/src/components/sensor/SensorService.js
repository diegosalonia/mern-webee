import axios from "axios";

const api = "http://localhost:3000/api";

export const getSensors = async () => {
  return await axios.get(`${api}/sensor`);
};

export const createSensorEvent = async (sensor) => {
  return await axios.post(`${api}/sensorevent`, sensor);
};

export const getSensor = async (_id) => {
  return await axios.get(`${api}/sensor/${_id}`);
};
