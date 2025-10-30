window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1; // 1–5 seconds
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved in ${randomTime} seconds`);
    }, randomTime * 1000);
  });
  window.promises.push(promise);
}

Promise.any(window.promises)
  .then((result) => {
    document.getElementById("output").textContent = result;
  })
  .catch((error) => {
    document.getElementById("output").textContent = error;
  });



