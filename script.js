let Ip = document.getElementById("ip");

const getIpAdress = async () => {
  const response = await fetch("https://api.ipify.org/?format=json");
  const ipdata = await response.json();

  Ip.textContent = ipdata.ip;
};
getIpAdress();

function getData() {
  document.getElementById("btn").style.display = "none";
  document.getElementById("data-container").style.display = "block";
 

  fetch("https://ipinfo.io/157.48.80.29?token=39c73c9a70a157")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.loc);
      console.log(data.loc.substring(0, 7));
      let latitude = data.loc.substring(0, 7);
      let longitude = data.loc.substring(8, 15);
      document.getElementById("lat").textContent = latitude;
      document.getElementById("lon").textContent = longitude;
      document.getElementById("cty").textContent = data.city;
      document.getElementById("rgn").textContent = data.region;
      document.getElementById("orgstion").textContent = data.org;
      document.getElementById("tnz").textContent = data.timezone;
      document.getElementById("time").textContent = "";
      document.getElementById("pincode").textContent = data.postal;
      document.getElementById("msg").textContent = "";
      document.getElementById("time").textContent = displayTime();

    });
    function displayTime(){
      var currentTime = new Date();
      document.getElementById("time").innerHTML = currentTime;
    }
    setInterval(displayTime, 1000);
}

