import { RenderBuilderContent } from "../../components/builder";
import { builder } from "@builder.io/sdk";
export default async function OfferSection() {
    const model = "figma-imports";
    const content = await builder
        // Get the page content from Builder with the specified options
        .get("figma-imports", {
            userAttributes: {
            },
            // Set prerender to false to return JSON instead of HTML
            prerender: false,
        })
        // Convert the result to a promise
        .toPromise();

    return (
        <>
            <div className="mt-16  m-8">
                <div className="font-sans font-semibold text-center text-text text-4xl mb-8">PROMOTION</div>
                <RenderBuilderContent content={content} model={model} />
            </div>


        </>
    );
}