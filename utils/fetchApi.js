import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "40fc5b3a25msh35f9c5f4e64228ep12d396jsn388c747b1ee4",
    },
  });
  return data
};

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '40fc5b3a25msh35f9c5f4e64228ep12d396jsn388c747b1ee4'
//   }
