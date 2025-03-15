const Airtable = require("airtable");

exports.handler = async (event, context) => {
  // Initialize Airtable
  const base = new Airtable({ apiKey: process.env.patRtmvtVnbTkVYvH.f01f44c5990df5e8e31eff5e2babbe113e359581fc77a23e43b6303c2c17dbc9 }).base(
    process.env.appojM8mJknDOjZqG
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