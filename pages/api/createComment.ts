import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from '@sanity/client'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.SANITY_API_TOKEN,
    useCdn: process.env.NODE_ENV === 'production'
}

const client = sanityClient(config);

export default async function createComment(req: NextApiRequest, res: NextApiResponse) {
    const { _id, name, email, comment } = JSON.parse(req.body);

    try {
        await client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: _id
            },
            name,
            email,
            comment
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Couldn't submit content", error})
    }
    console.log('Comment submitted');
    return res.status(200).json({ message: "Comment submitted" })
}