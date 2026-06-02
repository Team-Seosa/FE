import type { PredictResponse } from "@/types/uibowl";

export async function predictImages(files: File[]): Promise<PredictResponse> {
  const formData = new FormData();
  for (const file of files) {
    formData.append("files", file);
  }

  const res = await fetch("/api/predict", {
    method: "POST",
    body: formData,
    headers: {
      // ngrok free tier requires this header to bypass the warning page
      "ngrok-skip-browser-warning": "1",
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`API 오류 ${res.status}: ${text}`);
  }

  return res.json() as Promise<PredictResponse>;
}
