document.getElementById("main").innerHTML = constructDom(data);

function constructDom(data) {
  return `<div class='container'>
      ${data
        .map(
          (item) => `<div class='item'>
              <div class='prod_name'>${item.name}</div>
              <div class='prod_desc'>${item.shortDesc}</div>
              <div class='prod_details'>Price: ${item.price}</div>
              <div class='prod_details'>Rating: ${item.averageRating}</div>
              <div class='prod_details'>No. of Reviews: ${item.noOfpeopleRated}</div>
          </div>`
        )
        .join("")}
      </div>`;
}

document
  .getElementById("filter")
  .addEventListener("change", handleFilterChange);

function handleFilterChange(e) {
  const filter = e.target.value;
  console.log("e", e.target.value, e);
  const newData = [...data];
  if (filter !== "none") {
    newData.sort((a, b) => (a[filter] > b[filter] ? -1 : 1));
  }
  document.getElementById("main").innerHTML = constructDom(newData);
}
