var whitelist = [
  "http://localhost:3000",
  "http://192.168.43.159:3000",
  "https://hang-friends.netlify.app/",
  "https://hang-friends.netlify.app",
];
var corsConfig = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

export default corsConfig;
