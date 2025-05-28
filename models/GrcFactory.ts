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