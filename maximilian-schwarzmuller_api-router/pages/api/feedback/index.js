import fs from 'fs';
import path from 'path';

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), 'data', 'feedback.json');
};

export const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

const handler = (req, res) => {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text: feedbackText,
    };

    // store that in a database or in a file
    const filePath = buildFeedbackPath();
    // 先讀取再覆蓋
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    // 201 Created 成功狀態碼表示請求成功且有一個新的資源已經依據需要而被建立
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ message: 'This works!', feedback: data });
  }
};

export default handler;
