require("dotenv").config();

const sgMail = require("@sendgrid/mail");
const personalizations = require("./convert_mailIdFormat");
const buildMailConfig = require("./mailConfig");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Exploring Long-Term Export Partnership</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; color:#000000;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="left">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td style="font-size:14px; line-height:1.6; text-align:left;">

              <p>Dear Sir / Madam,</p>

              <p>Greetings from India.</p>

              <p>We hope this message finds you well.</p>

              <p>
                We would like to introduce <strong>NKA Global Exports</strong>, an India-based merchant exporting
                organization engaged in facilitating international trade of agricultural and food commodities,
                including <b>Rice, Spices, Pulses, Coffee, Tea, Fruits, and Vegetables</b>.
              </p>

              <p>
                We are currently in the process of expanding our supplier network and came across your organization
                as a potential partner. Our objective is to build <b>long-term, mutually beneficial relationships with
                reliable manufacturers and suppliers</b> who are interested in accessing global markets without taking
                on the complexities of export operations.
              </p>

              <p>
                As a merchant exporter, our role is to act as your export facilitation partner, where:
              </p>

              <ul style="padding-left:20px; margin:0 0 16px 0;">
                <li>You may continue to focus on production, packaging, quality control, and statutory compliance</li>
                <li>We handle international buyer sourcing, market development, export documentation, logistics coordination, and overseas communication</li>
                <li>Commercials are structured on a transparent margin-based pricing model, ensuring fair value for both parties</li>
                <li>No export-related operational burden is placed on your team</li>
              </ul>

              <p>
                We believe this approach allows manufacturers to grow export volumes steadily while minimizing
                risk and administrative involvement.
              </p>

              <p>
                If this aligns with your business objectives, we would welcome the opportunity to discuss a possible
                tie-up and understand your product range, certifications, and export readiness at your convenience.
              </p>

              <p>
                Thank you for your time and consideration. We look forward to your response.
              </p>

              <p>
                Warm regards,<br><br>
                <strong>Ankit Kapoor</strong><br>
                Director<br>
                <strong>NKA Global Exports</strong><br>
                WhatsApp / Call: +91-9211993105<br>
                Email:
                <a href="mailto:info@nkaglobalexports.com" style="color:#000000; text-decoration:none;">
                  info@nkaglobalexports.com
                </a>
                |
                <a href="mailto:contact@mail.nkaglobalexports.com" style="color:#000000; text-decoration:none;">
                  contact@mail.nkaglobalexports.com
                </a><br>
                Website:
                <a href="https://www.nkaglobalexports.com" target="_blank" style="color:#000000; text-decoration:none;">
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
    email: "support@mail.nkaglobalexports.com",
    name: "Ankit Kapoor | NKA GLOBAL EXPORTS",
  },
  replyTo: "contact@mail.nkaglobalexports.com",
  subject: "Exploring Long-Term Export Partnership Opportunity",
  html: htmlContent,
  trackingSettings: {
    clickTracking: { enable: true },
    openTracking: { enable: true },
  },
  personalizations,
};

sgMail
  .send(msg)
  .then(() => console.log("Bulk emails sent"))
  .catch((err) => console.log(err.response?.body || err));
