// /api/groq-handler.ts
import "dotenv/config";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { type, prompt, content } = await req.json();
    if (!content) {
      return new Response(
        JSON.stringify({ error: "Missing 'content' field." }),
        {
          status: 400,
        }
      );
    }

    let result;

    if (type === "summarize") {
      result = await summarizeContent(content);
    } else if (type === "call") {
      if (!prompt) {
        return new Response(
          JSON.stringify({ error: "Missing 'prompt' field for 'call' type." }),
          {
            status: 400,
          }
        );
      }
      result = await call(prompt, content);
    } else {
      return new Response(
        JSON.stringify({
          error: "Invalid 'type'. Must be 'summarize' or 'call'.",
        }),
        {
          status: 400,
        }
      );
    }

    return new Response(JSON.stringify({ result }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
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
