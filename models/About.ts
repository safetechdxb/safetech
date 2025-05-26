import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    banner: {
        type: String,
        required: true,
    },
    bannerAlt: {
        type: String,
    },
    pageTitle: {
        type: String,
        required: true,
    },
    firstSection: {
        mainTitle: {
            type: String,
            required: true,
        },
        firstTitle: {
            type: String,
            required: true,
        },
        secondTitle: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        imageAlt: {
            type: String,
        },
        items: [
            {
                title: {
                    type: String,
                    required: true,
                },
                logo: {
                    type: String,
                    required: true,
                },
                logoAlt: {
                    type: String,
                },
            }
        ]
    },
    secondSection: {
        vision: {
            logo: {
                type: String,
                required: true,
            },
            logoAlt: {
                type: String,
            },
            description: {
                type: String,
                required: true,
            },
        },
        mission: {
            logo: {
                type: String,
                required: true,
            },
            logoAlt: {
                type: String,
            },
            description: {
                type: String,
                required: true,
            },
        }
    },
    thirdSection: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        items: [
            {
                number: {
                    type: String,
                    required: true,
                },
                value: {
                    type: String,
                    required: true,
                },
                logo: {
                    type: String,
                    required: true,
                },
                logoAlt: {
                    type: String,
                },
            }
        ]
    },
    fourthSection: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        items: [
            {
                title: {
                    type: String,
                    required: true,
                },
                logo: {
                    type: String,
                    required: true,
                },
                logoAlt: {
                    type: String,
                },
                description: {
                    type: String,
                    required: true,
                },
            }
        ]
    },
    fifthSection: {
        title: {
            type: String,
            required: true
        },
        description:{
            type:String,
            required:true
        },
        items:[
            {
                title:{
                    type:String,
                    required:true
                },
                logo:{
                    type:String,
                    required:true
                },
                logoAlt:{
                    type:String,
                },
                image:{
                    type:String,
                    required:true
                },
                imageAlt:{
                    type:String,
                },
                description:{
                    type:String,
                    required:true
                }
            }
        ]
    },
    accreditations:[
        {
            logo:{
                type:String,
                required:true
            },
            logoAlt:{
                type:String,
            }
        }
    ],
    sustainablity:{
        image:{
            type:String,
            required:true
        },
        imageAlt:{
            type:String,
        },
        description:{
            type:String,
            required:true
        }
    }
})

export default mongoose.models.About || mongoose.model("About", aboutSchema);