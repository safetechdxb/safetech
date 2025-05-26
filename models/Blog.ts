import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    pageTitle:{ type: String, required: true },
    banner:{ type: String, required: true },
    bannerAlt:{ type: String},
    metaTitle:{ type: String},
    metaDescription:{ type: String},
    categories:[
        {
            name:{ type: String, required: true },
        }
    ],
    blogs:[
        {
            title:{ type: String, required: true },
            slug:{ type: String, required: true },
            content:{ type: String, required: true },
            thumbnail:{ type: String, required: true },
            thumbnailAlt:{ type: String, required: true },
            coverImage:{ type: String, required: true },
            coverImageAlt:{ type: String, required: true },
            images:{ type: Array, required: true },
            category:{ type: String, required: true },
            createdAt:{ type: Date, default: Date.now },
            metaTitle:{ type: String },
            metaDescription:{ type: String }
        }
    ]
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);

