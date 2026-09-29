// components/builder.tsx
"use client";
import { ComponentProps } from "react";
import { builder } from "@builder.io/sdk";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

// Initialize the Builder SDK with the organization's public API key.
// NEXT_PUBLIC_* vars are inlined into the client bundle at build time,
// so this runs in the browser and sets builder.apiKey for client fetches.
import "../builder-registry";


type BuilderPageProps = ComponentProps<typeof BuilderComponent>;


export function RenderBuilderContent(props: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If "content" has a value or the section is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} />;
  }

  return null;
}
