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
        images: {
            type: Array,
            default: [],
        },
    }],
});

export default mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);
