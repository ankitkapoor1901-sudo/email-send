require('dotenv').config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Regarding Export Collaboration</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; font-size:14px; color:#000000;">

<p>Dear Sir / Madam,</p>

<p>Greetings from India.</p>

<p>I hope you are doing well.</p>

<p>
I am writing to reach out regarding a possible collaboration related to agricultural exports.
</p>

<p>
We represent <b>NKA Global Exports</b>, an India-based merchant exporting organization working with manufacturers
in products such as <b>rice, spices, pulses, coffee, tea, fruits, and vegetables</b>.
</p>

<p>
Our approach is to support manufacturers by managing <b>overseas buyers and export coordination</b>,
while suppliers continue to focus on production, packaging, quality, and compliance.
Commercials are generally structured on a margin-based model.
</p>

<p>
If this is something your organization may be open to discussing, I would be glad to understand
your product range and explore possibilities further at your convenience.
</p>

<p>
Thank you for your time.
</p>

  <p>
  Warm regards,<br>
  Ankit Kapoor<br>
  Director<br>
  NKA Global Exports<br>
  WhatsApp / Call: +91-9211993105<br>
  Email: info@nkaglobalexports.com
  </p>
</body>
</html>
`;

const msg = {
  from: {
    email: "support@supplychain.nkaglobalexports.com",
    name: "Ankit Kapoor | NKA GLOBAL EXPORTS"
  },
  replyTo: "contact@mail.nkaglobalexports.com",
  subject: "Exploring Long-Term Export Partnership Opportunity",
  html: htmlContent,
  trackingSettings: {
    clickTracking: { enable: false },
    openTracking: { enable: false }
  },
  personalizations: [
    {
      to: [{ email: "5augankit@gmail.com" }],
    }
  ]
};

sgMail.send(msg)
  .then(() => console.log("Bulk emails sent"))
  .catch(err => console.log(err.response?.body || err));
