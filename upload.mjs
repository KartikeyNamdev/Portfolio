import { put } from '@vercel/blob';
import { readFileSync } from 'fs';

async function main() {
  try {
    const vaultBuffer = readFileSync('public/vault_video.mp4');
    const vaultBlob = await put('vault_video.mp4', vaultBuffer, { access: 'public', token: process.env.BLOB_READ_WRITE_TOKEN });
    console.log('Vault URL:', vaultBlob.url);

    const votingBuffer = readFileSync('public/voting_video.mp4');
    const votingBlob = await put('voting_video.mp4', votingBuffer, { access: 'public', token: process.env.BLOB_READ_WRITE_TOKEN });
    console.log('Voting URL:', votingBlob.url);
  } catch (error) {
    console.error("Error uploading:", error);
  }
}

main();
