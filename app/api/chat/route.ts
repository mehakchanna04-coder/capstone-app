import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { xai } from "@ai-sdk/xai";
import { CHAT_MODEL, SYSTEM_PROMPT } from "@/lib/ai-config";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("CHAT BODY:", JSON.stringify(body).slice(0, 500));

  const messages: UIMessage[] = Array.isArray(body.messages) ? body.messages : [];
  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: xai(CHAT_MODEL),
    system: SYSTEM_PROMPT,
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse();
}