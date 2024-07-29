const array = [2,3,11,20,19,14,5,9,7,8,6,4,3,2,12,4,14,35,3,19,18,17,16,15,14];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}
