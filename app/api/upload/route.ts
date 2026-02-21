import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        return {
          allowedContentTypes: [
            "image/jpeg",
            "image/png",
            "image/gif",
            "video/mp4",
            "video/quicktime",
            "video/webm",
          ],
          tokenPayload: JSON.stringify({ userId: "user-id" }),
        };
      },
      // onUploadCompleted is removed to avoid callbackUrl errors on localhost/netlify
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Vercel Blob Handshake Error:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    );
  }
}
