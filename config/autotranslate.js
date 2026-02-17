const cheerio = require("cheerio");
const translate = require("@vitalets/google-translate-api");

/**
 * Convert HTML content into target language
 * @param {string} htmlContent - Original HTML
 * @param {string} targetLang - Language code (e.g., 'fr', 'es', 'ar', 'de')
 * @returns {Promise<string>} - Translated HTML
 */
async function translateHtml(htmlContent, targetLang) {
  const $ = cheerio.load(htmlContent);

  // Function to translate text safely
  async function translateText(text) {
    if (!text.trim()) return text; // Skip empty text
    try {
      const result = await translate(text, { to: targetLang });
      return result.text;
    } catch (err) {
      console.error("Translation error:", err.message);
      return text; // fallback to original text
    }
  }

  // Collect all text nodes
  const textNodes = [];

  $("*").each(function () {
    $(this)
      .contents()
      .filter(function () {
        return this.type === "text" && this.data.trim().length > 0;
      })
      .each(function () {
        textNodes.push(this);
      });
  });

  // Translate sequentially (to avoid rate limits)
  for (let node of textNodes) {
    const translated = await translateText(node.data);
    node.data = translated;
  }

  return $.html();
}

module.exports = translateHtml;
