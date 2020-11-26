const CrossStorageClient = require('cross-storage').CrossStorageClient;

const storage = new CrossStorageClient('http://localhost:4200/hub');
storage.onConnect().then(function() {
  return storage.get("song", "band");
}).then(function(res) {
  console.log(res);
  console.log("faflasflshf")
}).catch(function(err) {
  console.error(err);
})