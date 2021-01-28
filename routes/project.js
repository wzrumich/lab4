exports.viewProject = function(req, res){
  // res.render('index', {
  //   'name': 'Waiting in Line',
  //   'image': 'lorempixel.people.1.jpeg',
  //   'id': 'project1'
  // });
  var name = req.params.name;
  console.log("the project name is: " + name);
  res.render("project", {
  	"projectName": name
  });
};