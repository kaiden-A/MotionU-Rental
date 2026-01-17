import SibApiV3Sdk from "sib-api-v3-sdk";

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

export async function sendEmail({ to, subject, html }) {
  try {
    const response = await emailApi.sendTransacEmail({
      sender: { email: "amirikhwanfaisal@gmail.com", name: "Motion-U : Motion-U Rental Services" },
      to: [{ email: to }],
      subject,
      htmlContent: html,
    });
    console.log("✅ Email sent:", response.messageId);
    return true;
  } catch (err) {
    console.error("❌ Email error:", err);
    return false;
  }
}

export default sendEmail;
