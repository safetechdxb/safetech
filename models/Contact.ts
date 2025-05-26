import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    pageTitle: { type: String, required: true },
    metaTitle: { type: String },
    metaDescription: { type: String },
    banner: { type: String, required: true },
    bannerAlt: { type: String },
    map: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
});

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);