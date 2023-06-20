const projects = [
  {
    title: "HelloEllipse",
    cover: "",
    path: "projects/0001_HelloEllipse",
  },
  {
    title: "ColorSquares",
    cover: "",
    path: "projects/0002_Color",
  },
  {
    title: "ColorCellsSpectrum",
    cover: "",
    path: "projects/ColorCellsSpectrum",
  },
  {
    title: "ColorCirclesSpectrum",
    cover: "",
    path: "projects/ColorCircleSpectrum",
  },
  {
    title: "ColorDrops",
    cover: "",
    path: "projects/ColorDrops",
  },
  {
    title: "dopplerCircles",
    cover: "",
    path: "projects/doppler",
  },
]

const grid = document.querySelector('.project-grid');
// clear grid container
grid.innerHTML = '';

// append the div projects
for (let i = 0; i < projects.length; i++) {
  // create div
  const div = document.createElement("div");
  // add content
  div.innerHTML = `<a href=${projects[i].path}/index.html>${projects[i].title}</a>`;
  grid.appendChild(div);
}