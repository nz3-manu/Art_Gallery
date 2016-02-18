'use strict';

class Gallery {
    constructor() {}
    init() {
        fetch("gallery.json").then(information => information.json(), e => {
            console.log("Obtención fallida", e);
        }).then(information => this.render(information));
    }
    render(information) {
        this.information = information;
        var sumObject = '';
        var sumTotal = '';
        var eachThree = '';
        var elements = '';
        var _this = this;
        var arrayLength = this.information.length;

        for (var i = 0; i < arrayLength; i++) {
            var name = this.information[i].name;
            var artist = this.information[i].artist;
            var price = this.information[i].price;
            var about = this.information[i].about;
            var imageurl = this.information[i].imageurl;

            sumObject = sumObject + `<div class = 'box__photo' id="${i}" >
                                        <img src = "${imageurl}">
                                        <div class='box__footer  box__footer--style'>
                                            <div id='footer__name'> <h1>${name}</h1> </div>
                                            <div id='footer__artis'> <p>By ${artist}</p></div>
                                        </div>
                                   </div>`;

            //--- condition for three each elements
            if (0 == (i + 1) % 3) {
                eachThree = eachThree + `<div class='wrapPhotos__box'>${sumObject}</div>`;
                sumObject = '';
            }

        } //close for

        //---creating div of show information
        var showInformation = `<div id="wrapImgInfomation">
                          <div class="wrapImgInfomation__btn">
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
                              </div>
                            </div>`;

        //---father div
        var target = document.getElementsByClassName('wrapPhotos')[0];
        target.innerHTML = `${eachThree} ${showInformation}`;

        //************************* Click Event, show the description and show big img *****************

        var boxInformation = document.querySelectorAll('.box__photo');
        var boxInformationArray = [].slice.call(boxInformation);
        var showImg = document.querySelector(".wrapImgInfomation__showImg");
        var showInfomation = document.getElementById('wrapImgInfomation');
        //---- Running inside of Array (boxInformationArray)
        for (var i = 0; i < boxInformationArray.length; i++) {
            var showDescription = boxInformationArray[i];
            //--- Click Event,catch the position and insert the content
            showDescription.onclick = function () {
                //***** crearing variable id of box's event
                var id = parseInt(this.id);
                _this.insertContent(_this.information[id], showImg);
                showInfomation.style.display = "block";

                //**************************** catch id= "close" description ***********************************
                var close = document.getElementById('close');
                //-- Close description
                close.onclick = closePicture;

                // **************************** image prev and btn next ********************************************
                //------ next image
                var nextImg = document.getElementById('nextImg');
                //Function --- Next image
                nextImg.onclick = nextPicture;

                // ----- previous image
                var prevImg = document.getElementById('prevImg');
                prevImg.onclick = prevPicture;

                //******** KeyboardEvent ****************************
                document.onkeydown = chars;

                function chars(evento) {
                    if (window.evento)
                        evento = window.evento;
                    caracterres(evento.keyCode);
                }

                function caracterres(chars) {
                    if (chars == 39) {
                        nextPicture();
                    }
                    if (chars == 37) {
                        prevPicture();
                    }
                    if (chars == 27) {
                        closePicture ();
                    }

                }
                //-- function event and Keyboard Next
                function nextPicture() {
                    id = id + 1;
                    if (id < arrayLength) {
                        _this.insertContent(_this.information[id], showImg);
                    } else {
                        id = 0;
                        _this.insertContent(_this.information[id], showImg);
                    }
                };
                //-- function event and Keyboard Prev
                function prevPicture() {
                    id = id - 1;
                    console.log(id);
                    if (id < 0) {
                        id = arrayLength - 1;
                        _this.insertContent(_this.information[id], showImg);
                    } else {
                        _this.insertContent(_this.information[id], showImg);
                    }
                };
                //-- function event and Keyboard Close
                function closePicture() {
                    showImg.querySelector(".showImg__temp").remove();
                    showInfomation.style.display = "none";
                };

            }; // close function showDescription (Click event)
        } // close of for loop

    }; // close render

    insertContent(dataSource, target) {
            var name = dataSource.name;
            var artist = dataSource.artist;
            var price = dataSource.price;
            var about = dataSource.about;
            var imageurl = dataSource.imageurl;
            target.innerHTML = '';
            target.innerHTML = `<div class="showImg__temp">
                                 <img src = "${imageurl}">
                                 <div class='temp__footer'>
                                     <div id='footer__name'> <h1>${name}</h1> </div>
                                     <div id='footer__artis'> <p>${artist}</p></div>
                                     <div id='footer__about'> <p>${about}</p> </div>
                                     <div id='footer__price'> <p>Current value: ${price} million</p> </div>
                                 </div>
                             </div>`
        } // close this.insertContent
}

var artGallery = new Gallery();
artGallery.init();
