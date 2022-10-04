// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const data = {
  name: 'javier',
  lastName: 'miz',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ error: 'failed to load data' });
  }
}
