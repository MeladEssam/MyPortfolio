// let url = window.location.href.includes("github.com")
//   ? "https://github.com/MeladEssam/MyPortfolio/blob/master/projects.json"
//   : "../projects.json";

let url;
if (
  window.location.href ==
  "https://meladessam.github.io/MyPortfolio/project_details.html"
) {
  url = "https://github.com/MeladEssam/MyPortfolio/blob/master/projects.json";
} else {
  url = "../projects.json";
}
// let url = `../projects.json`;
let projectNameElement = document.querySelector(".project-name span");
let techsContainer = document.querySelector(".techs .techs-content");
let techsBtnsElement = document.querySelector(".techs-btns");
console.log(techsBtnsElement);
async function getProjects() {
  axios
    .get(url)
    .then((response) => {
      // console.log(response.data);
      let projectsList = response.data;
      console.log(projectsList);
      //call function show project details

      showProjectDetails(projectsList);
    })
    .catch((e) => {
      // console.log(e.message);
      alert(e.message);
    });
}

getProjects();

function showProjectDetails(projectsList) {
  techsContainer.innerHTML = "";
  techsBtnsElement.innerHTML = "";
  //get the project id
  let projectId = localStorage.getItem("projectId");
  //project index : project id-1
  let theProject = projectsList[projectId - 1];
  console.log(theProject);
  //set project name into project name element
  projectNameElement.innerHTML = theProject.project_name;
  //techs
  let techList = theProject.technologies;
  for (let i = 0; i < techList.length; i++) {
    //create h3
    let h3 = document.createElement("h3");
    //append the tch name into h3
    h3.appendChild(document.createTextNode(techList[i]));
    //append the h3 element into the container
    techsContainer.appendChild(h3);
  }

  //create anchor element for url of project repo repo
  // main-btn btn rounded-3 w-100
  let repoLink = document.createElement("a");
  repoLink.target = "_blank";
  repoLink.classList.add("main-btn");
  repoLink.classList.add("btn");
  repoLink.classList.add("rounded-3");
  repoLink.classList.add("w-100");
  repoLink.href = theProject.repo_url;
  repoLink.appendChild(document.createTextNode("View Repo"));
  techsBtnsElement.appendChild(repoLink);

  let websiteLink = document.createElement("a");
  websiteLink.target = "_blank";
  websiteLink.classList.add("main-btn");
  websiteLink.classList.add("btn");
  websiteLink.classList.add("rounded-3");
  websiteLink.classList.add("w-100");
  websiteLink.href = theProject.url;
  websiteLink.appendChild(document.createTextNode("Visit Website"));
  techsBtnsElement.appendChild(websiteLink);
}
