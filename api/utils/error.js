// created a function for me to create a custom error with a custom 
// statusCode and custom message (passed as props/parametres)
// 
export const errorHandler = (statusCode, message) => {
  const error = new Error(); // JS error constructor / built in
  // here im passing the custom statusCode and
  // message to the new constructed error
  error.statusCode = statusCode;
  error.message = message;
  return error; // throw error
};
