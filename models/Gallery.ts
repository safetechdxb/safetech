import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
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
    metaTitle:{
        type: String,
    },
    metaDescription:{
        type: String,
    },
    categories:[{
        category: {
            type: String,
        },
        images: [{
            image: {
                type: String,
            },
            imageAlt: {
                type: String,
            },
            title: {
                type: String,
            },
        }],
    }],
});

export default mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);
