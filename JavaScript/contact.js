

const gitHubSection = document.querySelector(".githubAPI");

axios.get("https://api.github.com/users/sethnadu")
.then(data => {
    const loginApi = data.data.login;
    const reposApi = data.data.public_repos;
    const followersApi = data.data.followers;
    const followingApi = data.data.following;

    const githubApi = gitHub(loginApi, reposApi, followersApi, followingApi);

    gitHubSection.appendChild(githubApi);
})
.catch(error => {
    console.log("There was an error pull data from github", error)
});


function gitHub(loginApi, reposApi, followersApi, followingApi) {
    const info = document.createElement("div");
    const login = document.createElement("p");
    const repos = document.createElement("p");
    const followers = document.createElement("p");
    const following = document.createElement("p");

    info.appendChild(login);
    info.appendChild(repos);
    info.appendChild(followers);
    info.appendChild(following);
    
    info.classList.add("githubInfo");

    login.textContent = `Username: ${loginApi}  `;
    repos.textContent = `Repos: ${reposApi}  `;
    followers.textContent =`Followers: ${followersApi}  `;
    following.textContent =`Following: ${followingApi}  `;

    return info;

}

const contactGitHub = document.querySelector(".contactGithub img");
const contactLinkedin = document.querySelector(".contactLinkedin img")
const contactTwitter = document.querySelector(".contactTwitter img")

//Github hover contact change
contactGitHub.addEventListener("mouseover", () => {
    contactGitHub.src = "https://img.icons8.com/color/50/000000/github.png"
})

contactGitHub.addEventListener("mouseleave", () => {
    contactGitHub.src = "https://img.icons8.com/windows/50/000000/github.png"
})
//Linkedin hover navmobile change
contactLinkedin.addEventListener("mouseover", () => {
    contactLinkedin.src = "https://img.icons8.com/color/50/000000/linkedin.png"
})

contactLinkedin.addEventListener("mouseleave", () => {
    contactLinkedin.src = "https://img.icons8.com/ios-filled/50/000000/linkedin.png"
})

//Twitter hover navmobile change
contactTwitter.addEventListener("mouseover", () => {
    contactTwitter.src = "https://img.icons8.com/cotton/50/000000/twitter.png"
})

contactTwitter.addEventListener("mouseleave", () => {
    contactTwitter.src = "https://img.icons8.com/material-rounded/50/000000/twitter.png"
})