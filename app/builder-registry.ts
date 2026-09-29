// builder-registry.ts

import { Builder } from '@builder.io/react'
import { builder } from "@builder.io/sdk";
import OfferTemplate1 from "./components/builder/OfferTemplate1";
import OfferTemplate2 from "./components/builder/OfferTemplate2";
import OfferTemplate3 from "./components/builder/OfferTemplate3";
import OfferTemplate4 from "./components/builder/OfferTemplate4";
import OfferTemplate5 from "./components/builder/OfferTemplate5";
import "./lib/builder";
const offerSubFields = [
    {
        name: "title",
        type: "string",
        defaultValue: "Special Offer",
    },
    {
        name: "description",
        type: "string",
        defaultValue: "Discover our exclusive offer.",
    },
    {
        name: "image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
    },
];

Builder.registerComponent(OfferTemplate1, {
    name: "OfferTemplate1",
    inputs: [
        {
            name: "offers",
            type: "list",
            min: 3,
            max: 3,
            defaultValue: [
                {
                    title: "Offer 1",
                    description: "Description 1",
                    image: "",
                },
                {
                    title: "Offer 2",
                    description: "Description 2",
                    image: "",
                },
                {
                    title: "Offer 3",
                    description: "Description 3",
                    image: "",
                },
            ],
            subFields: offerSubFields,
        },
    ],
});

Builder.registerComponent(OfferTemplate2, {
    name: "OfferTemplate2",
    inputs: [
        {
            name: "offers",
            type: "list",
            min: 3,
            max: 3,
            defaultValue: [
                {
                    title: "Offer 1",
                    description: "Description 1",
                    image: "",
                },
                {
                    title: "Offer 2",
                    description: "Description 2",
                    image: "",
                },
                {
                    title: "Offer 3",
                    description: "Description 3",
                    image: "",
                },
            ],
            subFields: offerSubFields,
        },
    ],
});

Builder.registerComponent(OfferTemplate3, {
    name: "OfferTemplate3",
    inputs: [
        {
            name: "offers",
            type: "list",
            min: 3,
            max: 3,
            defaultValue: [
                {
                    title: "Offer 1",
                    description: "Description 1",
                    image: "",
                },
                {
                    title: "Offer 2",
                    description: "Description 2",
                    image: "",
                },
                {
                    title: "Offer 3",
                    description: "Description 3",
                    image: "",
                },
            ],
            subFields: offerSubFields,
        },
    ],
});

Builder.registerComponent(OfferTemplate4, {
    name: "OfferTemplate4",
    inputs: [
        {
            name: "offers",
            type: "list",
            min: 2,
            max: 2,
            defaultValue: [
                {
                    title: "Offer 1",
                    description: "Description 1",
                    image: "",
                },
                {
                    title: "Offer 2",
                    description: "Description 2",
                    image: "",
                },
            ],
            subFields: offerSubFields,
        },
    ],
});

Builder.registerComponent(OfferTemplate5, {
    name: "OfferTemplate5",
    inputs: [
        {
            name: "offers",
            type: "list",
            min: 1,
            max: 1,
            defaultValue: [
                {
                    title: "Offer 1",
                    description: "Description 1",
                    image: "",
                },
            ],
            subFields: offerSubFields,
        },
    ],
});
export default builder