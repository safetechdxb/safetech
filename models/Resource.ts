import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
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
        files: [{
            title: {
                type: String,
            },
            file: {
                type: String,
            },
        }],
    }],
});

export default mongoose.models.Resource || mongoose.model("Resource", ResourceSchema);
