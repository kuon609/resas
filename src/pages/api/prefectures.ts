// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type PrefecturesResponse = {
  prefCode: number
  prefName: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Promise<PrefecturesResponse[] | null>>) => {
  const response = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    headers: {
      'X-API-KEY': `${process.env.RESAS_API_KEY}`,
    },
  })
  const data = await response.json()
  res.status(200).json(data)
}

export default handler
