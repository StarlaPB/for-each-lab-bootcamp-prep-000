function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const myArray = ["Me", "Myself", "Irene"]

  myArray.forEach(callback)

  return myArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
