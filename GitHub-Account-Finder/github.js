class Github {
  constructor() {
    this.client_id = "de060669162fcc342cb3";
    this.client_secret = "ae529c4d8dd8ef6d645321a7d566d6224537687e";
    this.repos_count = 5;
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}

/*

async function Github(name) {
  this.client_id = "de060669162fcc342cb3";
  this.client_secret = "ae529c4d8dd8ef6d645321a7d566d6224537687e";
  this.count = 5;

  // GET Requests
  const profileResult = await fetch(
    `https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret${this.client_secret}`
  );
  const profiledata = await profileResult.json();
  console.log(profiledata);
  return profiledata;
}


*/
