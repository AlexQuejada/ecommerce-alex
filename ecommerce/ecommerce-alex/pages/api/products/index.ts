import type { NextApiRequest, NextApiResponse } from 'next';
import { SHOP_CONSTANTS, db } from '../../../database';
import { Product } from '../../../models';
import { IProduct } from '../../../interfaces';

type Data = { name: string } | IProduct[];

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getProducts(req, res);
    default:
      return res.status(400).json({
        name: 'Bad request',
      });
  }
}

async function getProducts(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { gender = 'all' } = req.query;
  let condition = {};
  if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
    condition = { gender };
  }
  await db.connect();
  const products = await Product.find(condition)
    .select('title images price inStock slug -_id')
    .lean();

  await db.disconnect();

  return res.status(200).json(products);
}
