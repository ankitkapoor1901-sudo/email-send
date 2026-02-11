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

              <p>
                I hope you are doing well. I am writing to kindly follow up on my earlier email regarding trade information 
                and market guidance for agricultural and food commodities from India.
              </p>
              
              <p>
                We understand that your office receives many inquiries, and we truly appreciate your time 
                and support in promoting international trade. We would be grateful if you could share, or direct us to, 
                any publicly available resources related to:
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

              <p>We would appreciate any guidance regarding:</p>

              <ul style="margin:0 0 16px 20px; padding:0;">
                <li>Official importer or distributor directories</li> 
                <li>Trade associations or chambers of commerce</li>
                <li>Buyer databases or B2B platforms supported by government bodies</li>
                <li>Trade fairs, exhibitions, or trade promotion programs in your country</li>
              </ul>

              <p>
                We assure you that any information provided will be used strictly for legitimate business development 
                purposes in compliance with all applicable laws and ethical trade practices.
              </p>
              <p>
                We sincerely value the support of your esteemed office in fostering international business cooperation and 
                look forward to your guidance.
              </p>
              
              <p>Thank you once again for your time and consideration.</p>

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
