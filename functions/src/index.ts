// import * as nodemailer from "nodemailer";
import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";
// import * as nodemailer from "nodemailer";
// import * as cors from "cors";
// const corsHandler = cors({ origin: true });

// const config = functions.config();
// admin.initializeApp();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "czcz@gmail.com",
//     pass: "czczc",
//   },
// });

// const mailOptions = {
//   from: "Arc Development",
//   to: "czcz@czcz.com",
//   subject: "Test",
//   text: "Test",
// };

exports.sendMail = functions.https.onRequest((req, res) => {
  res.send("Succesfull");
});

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: config.user.email,
//     pass: config.user.password,
//   },
// });

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
