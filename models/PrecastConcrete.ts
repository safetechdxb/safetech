import mongoose from "mongoose";

const precastConcreteSchema = new mongoose.Schema({
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
                items: [{
                    title: String,
                    description: String,
                }],
            },
        }],
    },
    thirdSection: {
        title: String,
        description: String,
        items: [{
            title: String,
            description: String,
            logo: String,
            logoAlt: String,
        }],
    },
    fourthSection: {
        title: String,
        items: [{
            title: String,
            description: String,
            image: String,
            imageAlt: String,
        }],
    },
})

export default mongoose.models.PrecastConcrete || mongoose.model("PrecastConcrete", precastConcreteSchema);