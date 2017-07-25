'use strict';

module.exports = function(Smsinbox) {
  Smsinbox.deleteInboxGreaterId = function(minId,cb) {
    Smsinbox.destroyAll( {id: {gte: minId}}, function (err, info) {
      var response = "Num of deletes : "+info.count;

      cb(null, response);
      //console.log(response);
    });
  }

    Smsinbox.remoteMethod (
      'deleteInboxGreaterId',
      {
        http: {path: '/deleteInboxGreaterId', verb: 'post'},
        accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
        returns: {arg: 'output', type: 'string'}
      }
    );

};
