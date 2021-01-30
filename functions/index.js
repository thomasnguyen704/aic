/*
// tutorial at  https://youtu.be/rRCV9SIyFFg
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

let transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: 'apikey',
    pass: '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'
  }
});

exports.sendEmail = functions.https.onRequest((request, response) => {
  const email_from = 'website';
  const message = 'A contact form has been submitted through the website.';
});
*/