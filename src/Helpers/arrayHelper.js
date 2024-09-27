export const findIndex = (currentList, currentData, compare = 'id') => {
  return [...currentList].findIndex((element) => element[compare] == currentData[compare]);
};

export const findElement = (currentList = [], currentData, compare = 'id') => {
  return currentList[findIndex(currentList, currentData, compare)] ?? {};
};