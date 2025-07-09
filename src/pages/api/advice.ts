// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

type Data = {
  response: string;
};

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { skill, message } = req.body;
  const response = await client.responses.create({
    model: "gpt-4o",
    instructions:
      "You are a career coach that gives advice to a user based on their Skill and Message. The response should be in a concise and professional manner. it should consits of the following sections: the first part should be the summary of the users message, the second part should be the advice based on the users skill and experience, suggest them 2 new skill area they could consider. Structure the content in an organized way, the suggestions sould be bullter points and evry paragraph you should end with a dot and start with a capital letter on another line",
    input: `Skill: ${skill}\nMessage: ${message}`,
  });

  res.status(200).json({ response: response.output_text });
}
