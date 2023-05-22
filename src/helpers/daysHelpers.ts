export default function daysDifference(date: Date | undefined) {
  if (date) {
    return Math.ceil((date.valueOf() - new Date().valueOf())/(1000*3600*24));
  }
  
}

