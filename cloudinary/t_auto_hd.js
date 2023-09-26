// rewrite cloudinary url to replace version with named transformation
// example: http://res.cloudinary.com/demo/image/upload/v1365964092/sample.jpg
// will be rewritten as: http://res.cloudinary.com/demo/image/upload/t_auto_hd/sample.jpg
// where auto_hd is the name of the transformation
// note that the version is removed from the url
// update window location

let originalUrl = location.href;
let url = new URL(originalUrl);
let path = url.pathname;
let version = path.match(/v\d+/);
let newUrl = originalUrl.replace(version, "t_auto_hd");
window.location.replace(newUrl);
