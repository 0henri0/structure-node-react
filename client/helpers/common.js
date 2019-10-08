export const cutStringInArray = (arrayInput, valueChange = '') => {
  for (let i = 0; i < arrayInput.length; i++) {
    if (!arrayInput[i][valueChange]) {
      return;
    }
    arrayInput[i][valueChange] = arrayInput[i][valueChange].substr(0, 20);
  }

  return arrayInput;
}
