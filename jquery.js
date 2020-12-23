function send(){
		var name = document.getElementById("name").value;
		var city = document.getElementById("city").value;
		var state =  document.getElementById("state").value;
        var pincode = document.getElementById("pincode").value;
      
   
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhttp.open("POST", "get.php", true);
        xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        xhttp.send("name="+name+"&city="+city+"&state="+state+"&pincode="+pincode);
        document.getElementById("demo").innerHTML = xhttp.responseText;
};


