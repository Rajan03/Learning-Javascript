//init
const github = new Github();
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser").addEventListener("keyup", (e) => {
  //input text
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile 
    ui.clearProfile();
  }
});

/*


const ui = new UI();
const searchUser = document
  .getElementById("searchUser")
  .addEventListener("keyup", (e) => {
    //  getting input text
    const inputText = e.target.value;

    // Input empty or not
    if (inputText !== "") {
      // github profile data
      Github(inputText).then((data) => {
        if (data.message === "Not Found") {
          // alert no user
        } else {
          // show profile
          ui.getprofile(data);
        }
      });
    } else {
      // clear profiles
      ui.clearprofile();
    }
  });


*/
