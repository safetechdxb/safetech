import mongoose from "mongoose";

const grcFactorySchema = new mongoose.Schema({
    metaTitle:{
        type: String,
    },
    metaDescription:{
        type: String,
    },
    banner:{
        type: String,
        required: true,
    },
    bannerAlt:{
        type: String,
    },
    pageTitle:{
        type: String,
        required: true,
    },
    productSlug:{
        type: String,
        required: true,
    },
    firstSection:{
        firstTitle:{
            type: String,
            required: true,
        },
        secondTitle:{
            type: String,
            required: true,
        },
        description:{
            type: String,
        },
        image:{
            type: String,
            required: true,
        },
        imageAlt:{
            type: String,
        },
    },
    elementsSection:{
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
        },
        items:[{
            title:{
                type: String,
                required: true,
            },
            image:{
                type: String,
                required: true,
            },
            imageAlt:{
                type: String,
            },
            description:{
                type: String,
                required: true,
            },
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
                }],
            },
        }]
    },
    thirdSection:{
        title:{
            type: String,
            required: true,
        },
        items:[{
            title:{
                type: String,
                required: true,
            },
            image:{
                type: String,
                required: true,
            },
            imageAlt:{
                type: String,
            },
            description:{
                type: String,
            },
        }]
    }
})

export default mongoose.models.GrcFactory || mongoose.model("GrcFactory", grcFactorySchema);