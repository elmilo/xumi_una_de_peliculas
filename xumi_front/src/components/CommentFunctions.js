import axios from "axios";
const XUMI_ENDPOINT = "http://localhost:3001/api/";

export const NewComment = possibleComment => {
  return axios
    .post(XUMI_ENDPOINT + "rating", possibleComment)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log("Error en promise NewComment", err);
    });
};

export const SearchMyComments = criteria => {
  return axios
    .post(XUMI_ENDPOINT + "ratings", criteria)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log("Error en promise SearchMyComments", err);
    });
};

export const DeleteOneOfMyComment = idComment => {
  //console.log("DELETE - idComment: ", idComment);

  return axios
    .delete(XUMI_ENDPOINT + "rating", {data: idComment})
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log("Error en promise DeleteOneOfMyComment", err);
    });
};


