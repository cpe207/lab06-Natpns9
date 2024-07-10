import axios from "axios";


// Assign interface/type to the function definition properly
const getUser = async (userId: number)=> {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data.name;
  } catch (error) {
    return "INVALID USER ID"
  }
};

// Test case inputs
const input1 = 1;
const input2 = 100;

// Run
getUser(input1).then((result) => console.log(result)).catch((error) => console.error(error));
getUser(input2).then((result) => console.log(result)).catch((error) => console.error(error));

export default getUser;
//660612141
//Chayanat Hongnueng