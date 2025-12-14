import { ocr } from "@/lib/ocr";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/analyze/ocr")({
	component: RouteComponent,
});

function RouteComponent() {
	// TODO: 画像をアップロードできるようにして、ボタンを押すとocrかける
	// ocrをかけたデータを表示する
	const [image, setImage] = useState<File>();
	const [url, setUrl] = useState<string>(""); 
	const [readText, setReadText] = useState<string>("")
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (
			e.target.files !== undefined &&
			e.target.files !== null &&
			e.target.files?.length !== 0
		) {
			setImage(e.target.files[0]);
			const url = URL.createObjectURL(e.target.files[0]);
			setUrl(url);
		}
	};
	async function handleClick() {
		console.log(url);
		if (!image) return
		const text = await ocr(image)

		setReadText(text)
	}

	return (
		<>
			<input
				type="file"
				accept="image/*"
				onChange={(e) => handleImageChange(e)}
			/>
			<img src={url} alt="" />
			<button type="button" onClick={() => handleClick()}>
				OCR
			</button>

			<text>{readText}</text>
		</>
	);
}
