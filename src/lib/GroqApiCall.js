export async function summarizeContent(description) {
  const res = await fetch("/api/groq-handler", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "summarize",
      content: description,
    }),
  });

  const data = await res.json();
  return data.result;
}

export async function call(prompt, content) {
  console.log(prompt, content);
  const res = await fetch("/api/groq-handler", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "call",
      prompt,
      content,
    }),
  });

  const data = await res.json();
  console.log(data);
  return data.result;
}

// const summarizeContent = async (content) => {
//   const data = await groq.chat.completions.create({
//     model: "llama3-70b-8192",
//     messages: [
//       {
//         role: "system",
//         content:
//           "You are a helpful assistant that summarizes description in a concise and informative way.",
//       },
//       {
//         role: "user",
//         content: `Please summarize the following description and only return the summary text with no leading and trailing info messages. :\n\n${content}`,
//       },
//     ],
//   });
//   return data.choices[0].message.content;
// };

// const call = async (prompt, content) => {
//   const data = await groq.chat.completions.create({
//     model: "llama3-70b-8192",
//     messages: [
//       {
//         role: "system",
//         content: prompt,
//       },
//       {
//         role: "user",
//         content: `Only return the relevant text and not other considerations of yours and avoid giving extra notes. Here is the content: ${content}`,
//       },
//     ],
//   });
//   return data.choices[0].message.content;
// };

// export { summarizeContent, call };
