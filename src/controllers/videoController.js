import Video from "../models/Video";


//main home page
export const home = async(req, res) => {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
};

//(../videos/userName)
export const watch = async (req, res) =>{
    const { id } = req.params;
    const video = await Video.findById(id);
    return res.render("watch", {pageTitle:video.title, video});
};   

//(../videos/userName/Edit)
export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", {pageTitle:`Editing`});
};

//Change video's title
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
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
        const video = new Video({
            title,
            description,
            hashtags: hashtags.split(",").map((word) => `#${word}`),
        });
        await video.save();
        return res.redirect("/");
    }catch(error){
        return res.render("upload", {
            pageTitle: "Upload Video", 
            errorMessage: error._message});
    }
};



export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("Delete Video");
};