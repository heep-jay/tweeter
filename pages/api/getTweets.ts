import type { NextApiRequest, NextApiResponse } from 'next';
import {client} from '../../sanity'
import { Tweet } from '../../typings';
import { groq } from 'next-sanity'

    const feedQuery = groq`
    *[_type == "tweet" && !blockTweet] {
        _id,
        "imageUrl": tweetImage.asset->url,
        ...,
        user->{
        username,
        name,
        bio,
},
    } | order(_createdAt desc)
`

type Data = {
  tweets: Tweet[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const tweets: Tweet[] = await client.fetch(feedQuery)
    console.log(tweets)
  res.status(200).json({tweets})
}
