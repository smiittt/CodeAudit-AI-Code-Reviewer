const aiService = require("../services/ai.services");

module.exports.review = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  try {
    console.log("Content Generating..........");
    const result = await aiService.generateContent(code);
    res.send(result);
    console.log("Content Generated");
  } catch (error) {
    res.status(500).send("Error generating content");
  }
};
