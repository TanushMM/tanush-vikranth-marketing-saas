const admin = require("firebase-admin");

const serviceAccount = require("../../../tanush-vikranth-marketing-saas-firebase-adminsdk-14x9f-a295ec87aa.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
