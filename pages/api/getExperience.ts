import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

type Data = {
  experiences: Experience[];
};

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[] ->
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // go to the backend, excute query and pull back into here
  const experiences: Experience[] = await sanityClient.fetch(query);

  res.status(200).json({ experiences });
}
