import path from 'path';
import fs from 'fs';
import { request, expect } from '@playwright/test';

const mimeTypes: Record<string, string> = {
  '.txt': 'text/plain',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.json': 'application/json',
  '.csv': 'text/csv',
  '.html': 'text/html',
  '.zip': 'application/zip',
};

function getMimeType(fileName: string): string {
  const extention = path.extname(fileName).toLowerCase();
  return mimeTypes[extention] || 'application/octet-stream';
}

export async function uploadFileViaApi(fileName: string) {
  const filePath = path.resolve(__dirname, '../file_upload', fileName);
  const fileBuffer = fs.readFileSync(filePath);
  const mimeType = getMimeType(fileName);

  const requestContext = await request.newContext();
  const response = await requestContext.post('upload', {
    multipart: {
      file: {
        name: fileName,
        mimeType: mimeType,
        buffer: fileBuffer,
      },
    },
  });
  expect(response.status()).toBe(200);
}
