import { NextApiResponse, NextApiRequest } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Establecer el contenido para /ads.txt
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('google.com, pub-7217160576021116, DIRECT, f08c47fec0942fa0');
}
