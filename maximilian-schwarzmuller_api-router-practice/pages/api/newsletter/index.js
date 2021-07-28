import { connectDatabase, insertDocument } from '../../../helpers/db-util';

const handler = async (req, res) => {
  // POST
  if (req.method === 'POST') {
    const email = req.body.email;
    if (!email || !email.includes('@'))
      return res.status(422).json({ message: 'Invalid email address.' });

    let client;
    // 1. connecting database
    try {
      client = await connectDatabase('newsletter');
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    // 2. insert document
    try {
      await insertDocument({
        client,
        collection: 'emails',
        document: { email },
      });
      client.close();
    } catch {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    res.status(200).json({ message: 'Signed up!' });
  }
};

export default handler;
