function Gallery () {
 this.init = function () {
   fetch("gallery.json").then(information => information.json(), function(e) {
         console.log("Obtención fallida", e);
     }).then(this.render);
 }

  this.render = information => {
        this.information = information;
        console.log(this.information);
    var sumObject = " ",
        sumTotal = " ",
        eachThree = " ",
        elements = "",
        _this = this,
        arrayLength = this.information.length;


   for (var i = 0; i < arrayLength; i++) {
     var name = this.information[i].name,
          artist = this.information[i].artist,
          price = this.information[i].price,
          about = this.information[i].about,
          imageurl = this.information[i].imageurl;

          sumObject=  sumObject + `<div class = 'box__photo' id="${i}" >
                                        <img src = "${imageurl}">
                                        <div class='box__footer  box__footer--style'>
                                            <div id='footer__name'> <h1>${name}</h1> </div>
                                            <div id='footer__artis'> <p>By ${artist}</p></div>
                                        </div>
                                   </div>`;

//--- condition for three each elements
         if (0 == (i+1)%3) {
           eachThree = eachThree + `<div class='wrapPhotos__box'>${sumObject}</div>`;
           sumObject = "";
         }

   } //close for

//---creating div of show information
   var showInformation = `<div id="wrapImgInfomation">
                          <div id='close' class="showImg__btnClose  showImg__btnClose--style"> <p>x</p> </div>
                               <div id="prevImg" class="temp__wrapArrowRight">
                                   <div class="wrapArrowRight__style"></div>
                                   <div class="wrapArrowRight__style"></div>
                               </div>
                                 <div id="nextImg" class="temp__wrapArrowLeft">
                                     <div class="wrapArrowLeft__style"></div>
                                     <div class="wrapArrowLeft__style"></div>
                                 </div>
                              <div class='wrapImgInfomation__showImg'>
                              </div>
                          </div>`;

//---father div
   var target = document.getElementsByClassName('wrapPhotos')[0];
        target.innerHTML = `${eachThree} ${showInformation}`;




//************************* Click Event, show the description and show big img *****************

   var boxInformation = document.querySelectorAll('.box__photo'),
       boxInformationArray = [].slice.call(boxInformation),
       showImg = document.querySelector(".wrapImgInfomation__showImg"),
       showInfomation = document.getElementById('wrapImgInfomation');
//---- Running inside of Array (boxInformationArray)
      for (var i=0; i<boxInformationArray.length; i++) {
             var showDescription = boxInformationArray[i];
//catch the position and insert the content
           showDescription.onclick = function() {
//***** crearing variable id of box's event
                  var id = parseInt(this.id);
                   _this.insertContent(_this.information[id],showImg);
                   showInfomation.style.display="block";

//**************************** catch id= "close" description ***********************************
               var close = document.getElementById('close');
//-- creating function  close description
                          close.onclick =  () => {
                            showImg.querySelector(".showImg__temp").remove();
                            showInfomation.style.display="none";
                          };

// **************************** image prev and btn next ********************************************
//------ next image
                      var nextImg = document.getElementById('nextImg');
//Function --- Next image
                        nextImg.onclick = () => {
                          id = id + 1;
                              if (id < arrayLength) {
                                    _this.insertContent(_this.information[id],showImg);
                              } else {
                                id = 0;
                                  _this.insertContent(_this.information[id],showImg);
                               }
                          };
  // ----- previous image
                        var prevImg = document.getElementById('prevImg');

                          prevImg.onclick = () => {
                            id = id - 1;
                            console.log(id);
                              if (id < 0) {
                                  id = arrayLength -1;
                                  _this.insertContent(_this.information[id],showImg);
                              }
                              else {
                                  _this.insertContent(_this.information[id],showImg);
                              }
                          };
           }; // close function showDescription
       } // close of for loop

 }; // close render
 this.insertContent =  function (dataSource, target) {
         var name = dataSource.name;
         var artist = dataSource.artist;
         var price = dataSource.price;
         var about = dataSource.about;
         var imageurl = dataSource.imageurl;
         target.innerHTML = "";
         target.innerHTML= `<div class="showImg__temp">
                                 <img src = "${imageurl}">
                                 <div class='temp__footer'>
                                     <div id='footer__name'> <h1>${name}</h1> </div>
                                     <div id='footer__artis'> <p>${artist}</p></div>
                                     <div id='footer__about'> <p>${about}</p> </div>
                                     <div id='footer__price'> <p>Current value: ${price} million</p> </div>
                                 </div>
                             </div>`
       }// close this.insertContent
}

var Gallery = new Gallery
Gallery.init();
