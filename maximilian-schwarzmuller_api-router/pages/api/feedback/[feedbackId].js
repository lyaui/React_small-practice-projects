import { buildFeedbackPath, extractFeedback } from '.';

const handler = (req, res) => {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  const selectedFeedback = data.find((feedback) => feedback.id === feedbackId);

  res.status(200).json({ item: selectedFeedback });
};

export default handler;
