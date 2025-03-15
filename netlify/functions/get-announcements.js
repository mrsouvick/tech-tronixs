const Airtable = require("airtable");

exports.handler = async (event, context) => {
  // Initialize Airtable with environment variables
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

  try {
    // Fetch all records from the "Announcements" table
    const records = await base("Announcements").select().all();

    // Return the records as JSON
    return {
      statusCode: 200,
      body: JSON.stringify(records),
    };
  } catch (error) {
    // Handle errors
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch announcements." }),
    };
  }
};