function formateDate(timestamp){
    var date = new Date(timestamp)

    var d = date.getDate();
    var m = date.getMonth()+ 1;
    var y = date.getFullYear();

    return `${d}/${m}/${y}`

}

module.exports = formateDate;