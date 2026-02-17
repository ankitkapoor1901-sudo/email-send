function buildMailConfig({ htmlContent, from, replyTo, subject }) {
  return {
    from: {
      email: from.email,
      name: from.name || ''
    },
    reply_to: replyTo ? { email: replyTo } : undefined,
    subject: subject,
    html: htmlContent
  };
}

module.exports = buildMailConfig;
