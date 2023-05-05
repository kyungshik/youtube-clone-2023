export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
    res.send(`Watch video of ${req.params.id}`);
};
export const edit = (req, res) => {
    console.log(req.params);
    res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("Delete Video");
};