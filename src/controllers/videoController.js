import Video from "../models/Video";

//main home page
export const home = async(req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
};

//(../videos/userName)
export const watch = async (req, res) =>{
    const { id } = req.params;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404", {pageTitle:"Video not found."});
    }
    return res.render("watch", {pageTitle:video.title, video});
};   

//(../videos/userName/Edit)
export const getEdit = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404", {pageTitle:"Video not found."});
    }
    return res.render("edit", {pageTitle:`Edit: ${video.title}`, video});
};

//Change video's title
export const postEdit = async (req, res) => {
    const { id } = req.params;
    const {title, description, hashtags} = req.body;
    const video = await Video.exists({_id:id});
    if(!video){
        return res.render("404", {pageTitle:"Video not found."});
    }
    await Video.findByIdAndUpdate(id, {
        title, 
        description, 
        hashtags:Video.formatHashtags(hashtags),
    });
    return res.redirect(`/videos/${id}`);
};

//
export const getUpload = (req, res) => {
    const { id } = req.params;
    return res.render("upload", {pageTitle: `Posting:`});
};

export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try{
        await Video.create({
            title,
            description,
            hashtags:Video.formatHashtags(hashtags),
        });
        return res.redirect("/");
    }catch(error){
        return res.render("upload", {
            pageTitle: "Upload Video", 
            errorMessage: error._message
        });
    }
};

export const search = (req, res) => res.send("Search");

export const deleteVideo = async (req, res) => {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    return res.redirect("/");
};