const CrossStorageClient = require('cross-storage').CrossStorageClient;

const storage = new CrossStorageClient('http://localhost:4200/hub');
storage.onConnect().then(function() {
  return storage.get("firstName", "lastName", "role");
}).then(function(res) {
  console.log(res);
  document.getElementById("first-name").value = res[0];
  document.getElementById("last-name").value = res[1];
  document.getElementById("role").value = res[2];
}).catch(function(err) {
  console.error(err);
})