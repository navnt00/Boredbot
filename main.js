document.getElementById("get-activity").addEventListener("click", function () {
    fetch("https://bored.api.lewagon.com/api/activity")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("activity").textContent = data.activity;
        document.getElementById("title").textContent = "😆Happy-Bot🤖";
        document.body.classList.add('fun')
      });
  });
