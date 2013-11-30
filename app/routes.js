var apiClient = require('./api_client');

module.exports = function(match) {
  match('/', function(callback) {
    console.log('index hit');
    callback(null, 'index');
  });

  match('/videos', function(callback) {
    console.log('videos hit');
    apiClient.get('/videos.json', function(err, res) {
      if (err) {
        return callback(err);
      }
      var videos = res.body;
      callback(null, 'videos', {videos: videos});
    });
  });

  match('/videos/:id', function(id, callback) {
    console.log('videos/' + id + ' hit');
    apiClient.get('/videos/' + id + '.json', function(err, res) {
      if (err) {
        return callback(err);
      }
      var video = res.body;
      callback(null, 'video', video);
    });
  });

};
