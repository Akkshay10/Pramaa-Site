const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      to: "info@pramaa.solutions",
      from: "noreply@pramaa.solutions", 
      subject: "New inquiry from pramaa.solutions",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${event.body.name}</p>
        <p><strong>Email:</strong> ${event.body.email}</p>
        <p><strong>Company:</strong> ${event.body.company}</p>
        <p><strong>Phone:</strong> ${event.body.phone}</p>
        <p><strong>Message:</strong> ${event.body.message}</p>
        <p><strong>Timeline:</strong> ${event.body.timeline}</p>
        <p><strong>Budget:</strong> ${event.body.budget}</p>
      `
    })
  }
}

module.exports = { handler }