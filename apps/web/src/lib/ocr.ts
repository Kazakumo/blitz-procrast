import { createWorker } from "tesseract.js";

export async function ocr(image: File) {
	const worker = await createWorker(["jpn", "jpn_vert"]);

	const {
		data: { text },
	} = await worker.recognize(image);
	console.log(text);
	await worker.terminate;
	return text;
}
