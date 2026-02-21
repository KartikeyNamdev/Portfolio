import VercelBlobUpload from "@/app/components/VercelBlobUpload";

export default function UploadTestPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#000319] text-white p-4">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold font-serif mb-8 text-center text-white/90">
          Vercel Blob Integration
        </h1>
        <p className="text-gray-400 mb-8 text-center">
          Test your Vercel Blob setup here. Make sure you have added
          <code className="bg-white/10 px-1 rounded mx-1 text-white">
            BLOB_READ_WRITE_TOKEN
          </code>
          to your environment.
        </p>
        <VercelBlobUpload />
      </div>
    </main>
  );
}
