import { RenderBuilderContent } from "../components/builder";
import { builder } from "@builder.io/sdk";
interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page({ params }: PageProps) {
    const { page } = await params;
    const model = "figma-imports";
    const content = await builder
        // Get the page content from Builder with the specified options
        .get("figma-imports", {
            fetchOptions: { next: { revalidate: 5 } },
            userAttributes: {
                // Use the page path specified in the URL to fetch the content
                urlPath: "/" + (page?.join("/") || ""),
            },
            // Set prerender to false to return JSON instead of HTML
            prerender: false,
        })
        // Convert the result to a promise
        .toPromise();

    return (
        <>
            {/* Render the Builder page */}
            <RenderBuilderContent content={content} model={model} />
        </>
    );
}