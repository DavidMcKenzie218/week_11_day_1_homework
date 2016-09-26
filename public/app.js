// //1 - 

// window.onload = function(){
//   //1 - create the parent
//   var ul = document.createElement("ul");
//   ul.classList.add("cat")

//   //2 -create first child (cat name)
//   var catName = document.createElement("li");
//   catName.innerText = "Name: Steven";

//   //3 - create second child (favourite food)
//   var catFood = document.createElement("li");
//   catFood.innerText = "Favourite food: Felix Food Pouches";

//   //4 - create third child (picture)
//   var catPicture = document.createElement("img");
//   catPicture.width = 500;
//   catPicture.src = "http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg"

//   //Append them all together back to front
//   ul.appendChild(catName);

//   ul.appendChild(catFood);

//   ul.appendChild(catPicture);

//   var catList = document.querySelector("#cats");
//   console.log(catList);
//   catList.appendChild(ul);
// }

var addCat = function(name, food, img){
  var parent = makeParent();
  var catName = makeName(name);
  var catFood = makeFood(food);
  var catImg = makeImage(img);
  makeCat(parent, catName, catFood, catImg);
}

var makeParent = function(){
  var ul = document.createElement("ul");
  ul.classList.add("cat")
  return ul;
}

var makeName = function(name){
  var catName = document.createElement("li");
  catName.innerText = "Name: " + name;
  return catName;
}

var makeFood = function(food){
  var catFood = document.createElement("li");
  catFood.innerText = "Favourite food: " + food;
  return catFood;
}

var makeImage = function(img){
  var catPicture = document.createElement("img");
  catPicture.width = 500;
  catPicture.src = img;
  return catPicture;
} 

var makeCat = function(parent, name, food, img) {
  parent.appendChild(name);
  parent.appendChild(food);
  parent.appendChild(img);

  var catList = document.querySelector("#cats");
  catList.appendChild(parent);
}

var app = function(){

  var imgBoba = "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg";
  var imgBarn = "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg";
  var imgMax = "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
  imgStev = "http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg";

  addCat("Boba", "Sock Fluff", imgBoba);
  addCat("Barnaby", "Tuna", imgBarn);
  addCat("Max", "Wiskas Temptations", imgMax);
  addCat("Steven", "Felix Food Pouches", imgStev);
}

window.onload = app;