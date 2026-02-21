"use client";

import { upload } from "@vercel/blob/client";
import { useState, useRef } from "react";

export default function VercelBlobUpload() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-black/50 rounded-2xl border border-white/10 backdrop-blur-sm">
      <h2 className="text-2xl font-serif text-white mb-6">
        Upload to Vercel Blob
      </h2>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setLoading(true);

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          try {
            console.log("Starting upload for:", file.name);
            const newBlob = await upload(file.name, file, {
              access: "public",
              handleUploadUrl: "/api/upload",
            });

            console.log("Upload success:", newBlob);
            setBlob(newBlob);
          } catch (error: any) {
            console.error("Upload failed details:", error);
            alert(`Upload failed: ${error.message || "Unknown error"}`);
          } finally {
            setLoading(false);
          }
        }}
        className="flex flex-col items-center gap-4"
      >
        <input
          name="file"
          ref={inputFileRef}
          type="file"
          required
          className="block w-full text-sm text-gray-400
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-600 file:text-white
            hover:file:bg-blue-700 transition-all cursor-pointer"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-200 disabled:opacity-50 transition-all"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {blob && (
        <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 w-full overflow-hidden">
          <p className="text-sm text-gray-400 mb-2 font-mono">Blob URL:</p>
          <a
            href={blob.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline break-all block text-sm"
          >
            {blob.url}
          </a>

          <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
            {blob.url.endsWith(".mp4") ? (
              <video src={blob.url} controls className="w-full h-auto" />
            ) : (
              <img
                src={blob.url}
                alt="Uploaded file"
                className="w-full h-auto object-cover"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
