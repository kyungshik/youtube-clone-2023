let videos = [
    {
        title: "Saul Good Man Review",
        rating:5,
        comments:2,
        createdAt: "2 minutes ago",
        views:1,
        id:1,
    },
    {
        title: "Working Mom Diary new trailer",
        rating:4,
        comments:3,
        createdAt: "10 minutes ago",
        views:12,
        id:2,
    },
    {
        title: "Breaking Bad trailer",
        rating:5,
        comments:7,
        createdAt: "5 minutes ago",
        views:18,
        id:3,
    },
    {
        title: "Wall-E 15min Review",
        rating:5,
        comments:22,
        createdAt: "2 minutes ago",
        views:59,
        id:4,
    },
];

//main home page
export const trending = (req, res) => {
    return res.render("home", {pageTitle: "Home", videos});
};

//(../videos/userName)
export const watch = (req, res) =>{
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("watch", {pageTitle:`Watching: ${video.title}`, video});
};   

//(../videos/userName/Edit)
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("edit", {pageTitle:`Editing: ${video.title}`, video});
};

export const postEdit = (req, res) => {
    
};



export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("Delete Video");
};