
// import some email api


export async function sendEmail({ to, subject, html }) {
    return await resend.emails.send({
        from: "serviceEmail@ortegas.com",
        to,
        subject,
        html,
    });
}