const validationMessages = password => {
  const validationArray = [];

  if (!password) {
    validationArray.push('The password cannot be null');
    return validationArray;
  }
  if (/\s+/.test(password)) {
    validationArray.push('The password cannot contain whitespaces');
  }
  if (password.length > 8) {
    validationArray.push(
      'The password cannot be greater than 8 characters in length'
    );
  }
  if (password.length < 8) {
    validationArray.push(
      'The password cannot be less than 8 characters in length'
    );
  }
  if (!/\d+/.test(password)) {
    validationArray.push('The password must contain at least one number');
  }
  if (!/[A-Z]+/.test(password)) {
    validationArray.push(
      'The password must contain at least one uppercase letter'
    );
  }
  return validationArray;
};
export default validationMessages;
