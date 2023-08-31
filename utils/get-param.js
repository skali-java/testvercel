export function getParam(param) {
  const urlParams = new URLSearchParams(location.search);
  return urlParams.get(param);
}

// class Param {
//   constructor(search) {
//     this.urlParams = new new URLSearchParams(search)();
//   }

//   getParam(param) {
//     return this.urlParams.get(param);
//   }
// }
