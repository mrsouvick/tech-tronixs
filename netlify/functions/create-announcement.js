const Airtable = require("airtable");

exports.handler = async (event, context) => {
  const { title, content } = JSON.parse(event.body);

  const base = new Airtable({ apiKey: process.env.patRtmvtVnbTkVYvH.f01f44c5990df5e8e31eff5e2babbe113e359581fc77a23e43b6303c2c17dbc9}).base(
    process.env.appojM8mJknDOjZqG
  );

  try {
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