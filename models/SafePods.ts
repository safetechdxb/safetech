import mongoose from "mongoose";

const safePodsSchema = new mongoose.Schema({
    metaTitle:{
        type:String
    },
    metaDescription:{
        type:String
    },
    banner:{
        type:String
    },
    bannerAlt:{
        type:String
    },
    pageTitle:{
        type:String
    },
    firstSection:{
        firstTitle:{
            type:String
        },
        secondTitle:{
            type:String
        },
        description:{
            type:String
        },
        image:{
            type:String
        },
        imageAlt:{
            type:String
        }
    },
    secondSection:{
        title:{
            type:String
        },
        items:[{
            title:{
                type:String
            },
            description:{
                type:String
            },
            image:{
                type:String
            },
            imageAlt:{
                type:String
            }
        }]
    },
    thirdSection:{
        title:{
            type:String
        },
        items:[{
            title:{
                type:String
            },
            description:{
                type:String
            },
            logo:{
                type:String
            },
            logoAlt:{
                type:String
            }
        }]
    },
    fourthSection:{
        title:{
            type:String
        },
        items:[{
            title:{
                type:String
            },
            description:{
                type:String
            },
            image:{
                type:String
            },
            imageAlt:{
                type:String
            }
        }]
    },
    fifthSection:{
        title:{
            type:String
        },
        items:[{
            image:{
                type:String
            },
            imageAlt:{
                type:String
            }
        }]
    }
})

export default mongoose.models.SafePods || mongoose.model("SafePods", safePodsSchema);