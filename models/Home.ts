import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema({
    metaTitle:{
        type: String,
    },
    metaDescription:{
        type: String,
    },
    aboutSection:{
        title:{
            type: String,
        },
        description:{
            type: String,
        },
        image:{
            type: String,
        },
        imageAlt:{
            type:String
        },
        items:[{
            number:{
                type: String,
            },
            value:{
                type: String,
            }
        }]
    },
    bannerStyle:{
        type: String,
    },
    bannerImage:{
        type: String,
    },
    bannerVideo:{
        type: String,
    },
    bannerImageAlt:{
        type: String,
    },
    posterImage:{
        type: String,
    },
    bannerTitle:{
        type: String,
    },
    bannerDescription:{
        type: String,
    },
    banners:[{
        image:{
            type: String,
        },
        imageAlt:{
            type: String,
        },
        title:{
            type: String,
        },
        description:{
            type: String,
        }
    }],
    products:{
        title:{
            type: String,
        },
        items:[{
            image:{
                type: String,
            },
            imageAlt:{
                type: String,
            },
            url:{
                type: String,
            },
            title:{
                type: String,
            },
            description:{
                type: String,
            }
        }]
    },
    facilities:{
        title:{
            type: String,
        },
        items:[{
            image:{
                type: String,
            },
            imageAlt:{
                type: String,
            },
            title:{
                type: String,
            },
            description:{
                type: String,
            }
        }]
    },
    clients:{
        title:{
            type: String,
        },
        items:[{
            image:{
                type: String,
            },
            imageAlt:{
                type: String,
            }
        }]
    }   
})

export default mongoose.models.Home || mongoose.model("Home", HomeSchema);
