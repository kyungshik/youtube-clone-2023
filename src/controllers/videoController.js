import Video from "../models/Video";

Video.find({},(error, videos) => {});

//main home page
export const home = async(req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
};

//(../videos/userName)
export const watch = (req, res) =>{
    const { id } = req.params;
    return res.render("watch", {pageTitle:`Watching`});
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

export const postUpload = (req, res) => {
    const { title } = req.body;
    return res.redirect("/");
};



export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("Delete Video");
};