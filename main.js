document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const avatar = document.getElementById("avatar");
  const repositories = document.getElementById("repositories");
  const followers = document.getElementById("followers");
  const following = document.getElementById("following");
  const profileLink = document.getElementById("profile-link");

  fetch("https://api.github.com/users/DaniloMachuca")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      name.innerHTML = data.name;
      username.innerHTML = data.login;
      avatar.src = data.avatar_url;
      repositories.innerHTML = data.public_repos;
      followers.innerHTML = data.followers;
      following.innerHTML = data.following;
      profileLink.href = data.html_url;
    });
});
