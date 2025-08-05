import mongoose from "mongoose";

const CertificationSchema = new mongoose.Schema({
    pageTitle: {
        type: String,
        required: true
    },
    metaTitle: {
        type: String,
        required: true
    },
    metaDescription: {
        type: String,
        required: true
    },
    banner:{
        type: String,
        required: true,
    },
    bannerAlt:{
        type: String,
    },
    certifications:[
        {
            image: {
                type: String,
                required: true
            },
            imageAlt: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            file: {
                type: String,
            }
        }
    ],
});

export default mongoose.models.Certification || mongoose.model("Certification", CertificationSchema);
