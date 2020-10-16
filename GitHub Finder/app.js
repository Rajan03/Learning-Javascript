{
  // DOM Events on search

  const icon = document.querySelector(".search-area");
  const search = document.querySelector(".searchContainer");
  const profile = document.getElementById("profile");
  const repo = document.getElementById("repos");

  icon.addEventListener("click", () => {
    search.classList.toggle("add");
    profile.classList.toggle("del");
    repo.classList.toggle("del");
  });
}
{
  const github = new Github();
  const user = document
    .getElementById("searchUser")
    .addEventListener("keyup", (e) => {
      //
      // selecting input text
      const inputText = e.target.value;
      // console.log(inputText);

      if (inputText !== "") {
        //  user profile
        github
          .get(inputText)
          .then((data) => {
            // console.log(data);
            getProfile(data.resData);
            getRepos(data.repoData);
          })
          .catch((err) => console.log(err));
      } else {
        document.getElementById("profile").innerHTML = ``;
        document.getElementById("repos").innerHTML = ``;
      }
    });
}

{
  // UI goes in
  function getProfile(userData) {
    let output = `
    <div class="container">
      <div class="row ">
        <div class="col s4 m4">
          <img class="img-fluid" src="${userData.avatar_url}" />
        </div>
        <div class="col s5 offset-s3">
          <span class="badge blue white-text">Public Repos: ${userData.public_repos}</span>
          <span class="badge green white-text">Followers: ${userData.followers}</span>
          <span class="badge black white-text">Following: ${userData.following}</span>
          <br /><br />
          <ul>
            <li >
              <h6>Name:</h6>
              ${userData.name}
            </li>
            <li>
              <h6>Location:</h6>
              ${userData.location}
            </li>
            <li>
              <h6>Company:</h6>
              ${userData.company}
            </li>
            <li>
              <h6>Website/Blog:</h6>
              ${userData.blog}
            </li>
            <li>
              <h6>Member Since:</h6>
              ${userData.created_at}
            </li>
          </ul>
        </div>
        <div class="row col s12 m12">
        <a
          href="${userData.html_url}"
          target="_blank"
          class="waves-effect waves-light btn profile-btn"
          >View Profile</a
        >
        </div>
      </div>
    </div>`;
    document.getElementById("profile").innerHTML = output;
  }

  function getRepos(repos) {
    let repositories = ``;

    repos.forEach(function (repo) {
      repositories += `
          <div class="container">
            <div class="row card">
              <div class="col s6 m6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col s6 m6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forms_count}</span>
              </div>
            </div>
          </div>
        `;
    });
    document.getElementById("repos").innerHTML = repositories;
  }
}

// {
//   const repoIcon = document.querySelector(".repo-icon");
//   const repoData = document.querySelector("rep");

//   repoIcon.addEventListener("click", () => {
//     repoData.className("add");
//   });
// }
