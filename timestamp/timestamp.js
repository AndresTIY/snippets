function timestamp(timeCreated){
  const diff = Math.floor((Date.now() - timeCreated) / 1000);
  let interval = Math.floor(diff / 31536000);
  if (interval >= 1) {
    return `${interval}y`;
  }
  interval = Math.floor(diff / 2592000);
  if (interval >= 1) {
    return `${interval}mo`;
  }
  interval = Math.floor(diff / 604800);
  if (interval >= 1) {
    const weeks = `${interval}w`;
    if (weeks === '4w') {
      return '1mo';
    }
    return weeks;
  }
  interval = Math.floor(diff / 86400);
  if (interval >= 1) {
    return `${interval}d`;
  }
  interval = Math.floor(diff / 3600);
  if (interval >= 1) {
    return `${interval}h`;
  }
  interval = Math.floor(diff / 60);
  if (interval >= 1) {
    return `${interval}m`;
  }
  return '<1m';
}

// var periods = {
//   month: 30 * 24 * 60 * 60 * 1000,
//   week: 7 * 24 * 60 * 60 * 1000,
//   day: 24 * 60 * 60 * 1000,
//   hour: 60 * 60 * 1000,
//   minute: 60 * 1000
// };

// function timestamp(timeCreated) {
//   var diff = Date.now() - timeCreated;
//
//   if (diff > periods.month) {
//     // it was at least a month ago
//     return Math.floor(diff / periods.month) + "m";
//   } else if (diff > periods.week) {
//     return Math.floor(diff / periods.week) + "w";
//   } else if (diff > periods.day) {
//     return Math.floor(diff / periods.day) + "d";
//   } else if (diff > periods.hour) {
//     return Math.floor(diff / periods.hour) + "h";
//   } else if (diff > periods.minute) {
//     return Math.floor(diff / periods.minute) + "m";
//   }
//   return "Just now";
// }

//
module.exports = timestamp;
