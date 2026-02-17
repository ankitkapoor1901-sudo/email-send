require('dotenv').config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Request for Trade Information and Importer–Exporter Contacts</title>
</head>
<body style="font-family: Arial, Helvetica, sans-serif; color:#000000;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding: 10px">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px; width:100%;">
          <tr>
            <td style="font-size:14px; line-height:1.6; text-align:left;">

              <p>Dear Sir / Madam,</p>

              <p>Greetings from India.</p>

              <p>We hope this message finds you well.</p>

              <p>
                We would like to formally introduce
                <strong>NKA Global Exports</strong>, an India-based merchant exporting organization engaged in
                facilitating international trade of agricultural and food commodities including Rice, Spices,
                Pulses, Coffee, Tea, Fruits, and Vegetables.
              </p>

              <p>
                As part of our ongoing efforts to explore bilateral trade opportunities and strengthen commercial
                cooperation, we are seeking guidance and publicly available information related to trade and market
                access in your esteemed country.
              </p>

              <p>
                In this regard, we respectfully request your support in sharing, or guiding us to,
                <strong>official importer–exporter directories, buyer databases, trade associations, or relevant
                commercial resources</strong> pertaining to agricultural and food products.
              </p>

              <p>
                The information requested will be used strictly for legitimate business development and trade
                promotion purposes, in compliance with all applicable laws and ethical business practices.
              </p>

              <p>Additionally, we would appreciate any guidance regarding:</p>

              <ul style="padding-left:20px;">
                <li>Recognized importers or distributors in your country</li>
                <li>Relevant trade bodies or chambers of commerce</li>
                <li>Trade fairs, buyer–seller meets, or official trade promotion programs</li>
              </ul>

              <p>
                We sincerely value the role of the Embassy in promoting international trade and would be grateful
                for your kind assistance.
              </p>

              <p>Thank you for your time and consideration.</p>

              <p>
                Yours faithfully,<br><br>
                <strong>Ankit Kapoor</strong><br>
                Director<br>
                <strong>NKA Global Exports</strong><br>
                WhatsApp / Call: +91-9211993105<br>
                Email:
                <a href="mailto:info@nkaglobalexports.com" style="color:#000000; text-decoration:none;">
                  info@nkaglobalexports.com | contact@mail.nkaglobalexports.com
                </a><br>
                Website:
                <a href="http://www.nkaglobalexports.com" target="_blank" style="color:#000000; text-decoration:none;">
                  www.nkaglobalexports.com
                </a>
              </p>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const msg = {
  from: {
    email: "support@notify.nkaglobalexports.com",
    name: "Ankit Kapoor | NKA GLOBAL EXPORTS"
  },
  replyTo: "contact@mail.nkaglobalexports.com",
  subject: "Request for Trade Information and Importer–Exporter Contacts",
  html: htmlContent,
  trackingSettings: {
    clickTracking: { enable: false },
    openTracking: { enable: false }
  },
  personalizations: [
    {
      to: [{ email: "5augankit@gmail.com" }],
    },
    {
      to: [{ email: "ankit.kapoor1901@gmail.com" }],
    }
  ]
};

sgMail.send(msg)
  .then(() => console.log("Bulk emails sent"))
  .catch(err => console.log(err.response?.body || err));
