import { put } from '@vercel/blob';

type UploadVoiceRecordingInput = {
  audioBase64: string;
  mimeType: string;
  submitterEmail: string;
};

function extensionForMime(mimeType: string): string {
  if (mimeType.includes('ogg')) return 'ogg';
  if (mimeType.includes('mp4') || mimeType.includes('m4a')) return 'm4a';
  if (mimeType.includes('mpeg') || mimeType.includes('mp3')) return 'mp3';
  return 'webm';
}

function randomSuffix(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function hasVoiceStorageConfig(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN?.trim());
}

export async function uploadVoiceRecording({
  audioBase64,
  mimeType,
  submitterEmail,
}: UploadVoiceRecordingInput): Promise<string> {
  const token = process.env.BLOB_READ_WRITE_TOKEN?.trim();
  if (!token) {
    throw new Error('BLOB_READ_WRITE_TOKEN is not configured');
  }

  const buffer = Buffer.from(audioBase64, 'base64');
  if (buffer.length === 0) {
    throw new Error('Voice recording payload is empty');
  }

  const maxBytes = 8 * 1024 * 1024;
  if (buffer.length > maxBytes) {
    throw new Error('Voice recording exceeds 8 MB limit');
  }

  const safeEmail = submitterEmail.replace(/[^a-zA-Z0-9@._-]/g, '_').slice(0, 48);
  const extension = extensionForMime(mimeType);
  const pathname = `voice-inquiries/${Date.now()}-${safeEmail}-${randomSuffix()}.${extension}`;

  const result = await put(pathname, buffer, {
    access: 'public',
    contentType: mimeType || 'audio/webm',
    token,
    addRandomSuffix: false,
  });

  return result.url;
}
