import { Router, Request, Response } from 'express';
import Contact from '../models/Contact';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, company, message } = req.body;
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Name, email, and message are required.' });
      return;
    }
    const contact = await Contact.create({ name, email, company, message });
    res.status(201).json({ success: true, id: contact._id });
  } catch (err) {
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

export default router;
