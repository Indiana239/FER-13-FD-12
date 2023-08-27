function promise(func, timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (!timeout) {
        reject(new Error("timeout does not exist"));
      }
      resolve(func ? func() : null);
    }, timeout || 3000);
  });
}

export default promise;
