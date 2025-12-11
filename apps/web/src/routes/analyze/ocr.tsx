import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/analyze/ocr") ({
    component: RouteComponent
})

function RouteComponent () {
    return <div>hoge</div>
}