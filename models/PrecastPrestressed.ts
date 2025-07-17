import mongoose from "mongoose";

const precastPrestressedSchema = new mongoose.Schema({
    productSlug: String,
    pageTitle: String,
    metaTitle: String,
    metaDescription: String,
    banner: String,
    bannerAlt: String,
    firstSection: {
        firstTitle: String,
        secondTitle: String,
        description: String,
        image: String,
        imageAlt: String,
    },
    secondSection: {
        title: String,
        description: String,
        image: String,
        imageAlt: String,
    },
    elementsSection: {
        title: String,
        description: String,
        items: [{
            title: String,
            description: String,
            image: String,
            imageAlt: String,
            metaTitle: String,
            metaDescription: String,
            banner: String,
            bannerAlt: String,
            pageTitle: String,
            slug: String,
            firstSection: {
                firstTitle: String,
                secondTitle: String,
                description: String,
                image: String,
                imageAlt: String,
            },
            secondSection: {
                title: String,
                description: String,
                image: String,
                imageAlt: String,
                items: [{
                    title: String,
                    description: String,
                }],
            },
            thirdSection: {
                title: String,
                description: String,
                items: [{
                    image: String,
                    imageAlt: String,
                    title: String,
                    description: String,
                }],
            },
            forthSectionStyle: String,
            forthSection: {
                title: String,
                description: String,
                image: String,
                imageAlt: String,
                column1Title: String,
                column2Title: String,
                items: [{
                    column1Value: String,
                    column2Value: String,
                    image: String,
                    imageAlt: String,
                    title: String,
                    description: String,
                }],
            },
        }],
    },
})

export default mongoose.models.PrecastPrestressed || mongoose.model("PrecastPrestressed", precastPrestressedSchema);