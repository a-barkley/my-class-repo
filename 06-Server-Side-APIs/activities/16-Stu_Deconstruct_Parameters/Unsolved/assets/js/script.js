fetch(
  // Explain each parameter in comments below.
  // https://docs.github.com/en/rest/reference/issues#list-repository-issues
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

// per_page: number of results per page
// state: state of the issues to return. can be open, closed, or all. 
// sort: how to sort results. can be created, updated, or comments
// direction: direction to sort results by, asc or desc


// we only want ten pages of open issues, sorted by creation date in descending order