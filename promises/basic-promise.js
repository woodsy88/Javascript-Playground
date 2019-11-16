// As you can see the promise checks the done global constant,
  // and if that's true, we return a resolved promise, otherwise a rejected promise.

let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    console.log("TCL: workDone", workDone)
    
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    console.log("TCL: why", why)

    reject(why)
  }
})
console.log(isItDoneYet)


//===

const checkIfItsDone = () => {
  isItDoneYet
  .then(ok => {
    console.log(ok)
  })
  .catch(err => {
    console.error(err)
  })
}

console.log(checkIfItsDone)

//===

// In this example, we call fetch() to get a list of TODO items from the todos.json file found in the domain root,
//  and we create a chain of promises.

const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  }
  return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

// call fetch API
fetch('/todos.json')
  .then(status)
  .then(json)
  .then(data => {
    console.log('Request succeeded with JSON response', data)
  })
  .catch(error => {
    console.log('Request failed', error)
  })