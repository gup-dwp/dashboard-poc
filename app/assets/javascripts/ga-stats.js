function getData(data) {
  console.log(data);
}

$.ajax({
  url:"https://spreadsheets.google.com/feeds/list/1gOuL1XQTsnfg6cSFTC1sSMW8E57cRql8CPhF73JRUDM/o5asou/public/basic?alt=json",
  contentType: "application/json-in-script; charset=utf-8",
  dataType: "jsonp",
  success: function(data){
    getData(data.feed.entry)
  }
})
