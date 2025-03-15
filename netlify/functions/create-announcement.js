const Airtable = require("airtable");

exports.handler = async (event, context) => {
  // Parse the request body
  const { title, content } = JSON.parse(event.body);

  // Initialize Airtable with environment variables
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

  try {
    // Create a new record in the "Announcements" table
    await base("Announcements").create([{ fields: { Title: title, Content: content } }]);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Announcement created successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create announcement." }),
    };
  }
};