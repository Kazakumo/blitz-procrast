import { createWorker } from "tesseract.js";

export async function ocr(image: File) {
	const worker = await createWorker("eng");

	const {
		data: { text },
	} = await worker.recognize(image);
	console.log(text);
	await worker.terminate;
}
