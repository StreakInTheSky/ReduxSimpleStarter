import 'isomorphic-fetch';

export const registerUser = userInfo => dispatch => {
  console.log(userInfo)
  // const url = `http://localhost:3000/api/user`;
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ userInfo })
  // }
  // return fetch(url, options).then(response => {
  //   if (!response.ok) {
  //     const error = new Error(response.statusText)
  //     error.response = response
  //     throw error;
  //   }
  // })
  // .then(() => send("User was registered"))
  // .catch(error => console.error(error));
}
