import { connectDatabase, insertDocument, getAllDocuments } from '../../../helpers/db-util';

const handler = async (req, res) => {
  const { eventId } = req.query;

  let client;
  try {
    client = await connectDatabase('events');
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (!email.includes('@') || !name || !text) {
      res.status(422).json({ message: 'Invalid input' });
      client.close();
    }

    const newComment = { email, name, text, eventId };

    let result;
    try {
      result = await insertDocument({
        client,
        collection: 'comments',
        document: newComment,
      });
      newComment._id = result.insertedId;
      res.status(201).json({ comments: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed' });
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments({
        client,
        collection: 'comments',
        sort: { _id: -1 },
      });
      res.status(200).json({ comments: documents });
    } catch {
      res.status(500).json({ message: 'Getting comments failed.' });
    }
  }

  client.close();
};

export default handler;
