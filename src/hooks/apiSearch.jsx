import axios from "axios";

const searchImages = async (term) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID V1ln6yM8wnQCE6a2oHJAjVYzNxb0WzOAO1QMWIIgIoM",
    },
    params: {
      query: term,
    },
  });
  return res.data.results;
};

export default searchImages;
