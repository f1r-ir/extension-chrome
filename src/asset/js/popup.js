
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  /*alert("Copied the text: " + copyText.value);*/
}

let links = document.getElementById('link_');
let input = document.getElementById('myInput');
 function lnik(url){
	  fetch("https://f1r.ir/api/v1/?url="+url)
  .then(response => response.json())
 .then(data => {input.value=data.result.link,links.href=data.result.status,navigator.clipboard.writeText(data.result.link)});
  }
  
chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, function (tabs) {
        lnik(tabs[0].url);
    });
