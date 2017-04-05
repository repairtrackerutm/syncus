/**
 * Created by dylan on 4/4/2017.
 */
'use strict';

module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('smsInbox', function(err) {
    if (err) throw err;

    app.models.smsInbox.create([
      {
        "fromPhoneNumber": "2345677",
        "message": "i am a motherfuck** star boy",
        "fromContactName": "the weeknd",
        "read":0
      }
    ], function(err, smsInboxes) {
      if (err) throw err;

      console.log('Models created: \n',smsInboxes);
    });
  });
};
