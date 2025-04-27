// /api/groq-handler.ts
import "dotenv/config";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { type, prompt, content } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Missing 'content' field." });
    }

    let result;

    if (type === "summarize") {
      result = await summarizeContent(content);
    } else if (type === "call") {
      if (!prompt) {
        return res
          .status(400)
          .json({ error: "Missing 'prompt' field for 'call' type." });
      }
      result = await call(prompt, content);
    } else {
      return res.status(400).json({
        error: "Invalid 'type'. Must be 'summarize' or 'call'.",
      });
    }

    return res.status(200).json({ result });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function summarizeContent(content) {
  const data = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that summarizes description in a concise and informative way.",
      },
      {
        role: "user",
        content: `Please summarize the following description and only return the summary text with no leading and trailing info messages:\n\n${content}`,
      },
    ],
  });

  return data.choices[0].message.content;
}

async function call(prompt, content) {
  const data = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: `Only return the relevant text and not other considerations of yours and avoid giving extra notes. Here is the content: ${content}`,
      },
    ],
  });

  return data.choices[0].message.content;
}
