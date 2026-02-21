import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (
        pathname,
        /* clientPayload */
      ) => {
        // Generate a Python Shell-style token or just handle authentication
        // In a real app, you'd check the user's session here.
        return {
          allowedContentTypes: [
            "image/jpeg",
            "image/png",
            "image/gif",
            "video/mp4",
          ],
          tokenPayload: JSON.stringify({
            // optional, sent to your server on upload completion
            userId: "user-id",
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Get notified of client upload completion
        // 🚀 This will run on your server
        console.log("blob upload completed", blob, tokenPayload);

        try {
          //   // Run any logic after the file has been uploaded
          //   // const { userId } = JSON.parse(tokenPayload);
          //   // await db.update({ avatar: blob.url, userId });
        } catch (error) {
          throw new Error("Could not update user");
        }
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The client will also get this error
    );
  }
}
