let btnsList = document.querySelectorAll(".project-info .more-details");
btnsList.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(btn);
    let projectId = btn.getAttribute("data-projectId");
    window.location.href = `project_details.html?projectId=${projectId}`;
  });
});
