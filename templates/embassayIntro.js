module.exports = (data) =>  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Request for Trade Information</title>
</head>
<body style="margin-top: 0; font-family: Arial, Helvetica, sans-serif; color:#000000;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="left">
        <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tr>
            <td style="font-size:14px; line-height:1.6; text-align:left;">

              <p>Dear Sir / Madam,</p>

              <p>Greetings from India.</p>

              <p>We hope this message finds you well.</p>

              <p>
                We would like to introduce <strong>${data.company}</strong>, an India-based merchant 
                exporting organization engaged in facilitating international trade of agricultural and food commodities.
              </p>

              <p>
                Our key product categories and corresponding HS Codes are as follows:
              </p>

              <p><strong>Fruits & Vegetables (Chapter 7 & 8)</strong></p>
              <ul style="margin:0 0 14px 20px; padding:0;">
                <li>070110 – Seed potatoes, fresh or chilled</li>
                <li>070310 – Onions and shallots, fresh or chilled</li>
                <li>070960 – Capsicum/Pimenta (e.g., green chilies), fresh or chilled</li>
                <li>080300 – Bananas, including plantains, fresh or dried</li>
                <li>080610 – Fresh grapes</li>
                <li>081010 – Fresh strawberries</li>
                <li>080450 – Guavas, mangoes, and mangosteens</li>
              </ul>

              <p><strong>Pulses – Dried Leguminous Vegetables (Chapter 7)</strong></p>
              <ul style="margin:0 0 14px 20px; padding:0;">
                <li>071310 – Dried peas (Pisum sativum), shelled</li>
                <li>071320 – Dried chickpeas (garbanzos), shelled</li>
                <li>071331 – Urad and moong beans</li>
                <li>071333 – Kidney beans, including white pea beans</li>
                <li>071340 – Dried lentils, shelled</li>
              </ul>

              <p><strong>Rice & Cereals (Chapter 10)</strong></p>
              <ul style="margin:0 0 14px 20px; padding:0;">
                <li>100610 – Rice in the husk (paddy/rough)</li>
                <li>100620 – Husked (brown) rice</li>
                <li>100630 – Semi or wholly milled rice (including Basmati)</li>
                <li>100199 – Wheat and meslin (other than seed quality)</li>
                <li>100590 – Maize (corn)</li>
                <li>100820 – Millet</li>
              </ul>

              <p><strong>Coffee, Tea & Spices (Chapter 9)</strong></p>
              <ul style="margin:0 0 16px 20px; padding:0;">
                <li>090111 – Coffee, not roasted or decaffeinated</li>
                <li>090240 – Black tea (fermented) and partly fermented tea</li>
                <li>090411 – Whole black pepper</li>
                <li>091010 – Ginger</li>
                <li>091030 – Turmeric</li>
                <li>090830 – Cardamoms</li>
                <li>090930 – Cumin seeds</li>
              </ul>

              <p>
                As part of our efforts to understand trade opportunities and market access in your country,
                we are seeking guidance on publicly available trade-related information.
              </p>

              <p>
                We respectfully request your support in sharing, or directing us to, official importer and exporter
                directories, buyer databases, trade associations, or other relevant commercial resources related
                to these agricultural and food products.
              </p>

              <p>
                The information will be used strictly for legitimate business development purposes and in
                compliance with applicable laws and ethical business practices.
              </p>

              <p>Additionally, we would appreciate any guidance regarding:</p>

              <ul style="margin:0 0 16px 20px; padding:0;">
                <li>Recognized importers or distributors</li>
                <li>Relevant trade bodies or chambers of commerce</li>
                <li>Trade fairs or official trade promotion programs</li>
              </ul>

              <p>
                We value the role of the Embassy in promoting international trade and would be grateful for your
                kind assistance.
              </p>

              <p>Thank you for your time and consideration.</p>

              <p>
                Yours faithfully,<br><br>
                <strong>${data.sender}</strong><br>
                Director<br>
                <strong>${data.company}</strong><br>
                Phone / WhatsApp: +91-9211993105<br>
                Email: info@nkaglobalexports.com<br>
                Website: www.nkaglobalexports.com
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
