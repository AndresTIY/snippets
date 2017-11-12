function formatTime(timeCreated) {

  var diff = Math.floor((Date.now() - timeCreated) / 1000);
  var interval = Math.floor(diff / 31536000);

  if (interval >= 1) {
    return interval + "y";
  }
  interval = Math.floor(diff / 2592000);
  if (interval >= 1) {
    return interval + "m";
  }
  interval = Math.floor(diff / 604800);
  if (interval >= 1) {
    return interval + "w";
  }
  interval = Math.floor(diff / 86400);
  if (interval >= 1) {
    return interval + "d";
  }
  interval = Math.floor(diff / 3600);
  if (interval >= 1) {
    return interval + "h";
  }
  interval = Math.floor(diff / 60);
  if (interval >= 1) {
    return interval + " m";
  }
  return "<1m";
}


module.exports = formatTime;
