class Github {
  constructor() {
    this.client_id = "ec93dfca3f312ea8fd9f";
    this.client_secret = "ce5b91c5dfd96255b8e36f0efa96da49efd9ab3c";
    this.repo_count = 5;
  }
  //--------- 1. Make an HTTP GET Request ---------

  async get(user) {
    const response = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repos = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const resData = await response.json();
    const repoData = await repos.json();
    return { resData, repoData };
  } // Async returns a promise
}
