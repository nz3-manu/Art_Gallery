'use strict';

class Gallery {
    constructor() {
        this.currentIndex = 0;
    }
    init(selector, jsonPath) {
            var initialLoad = {
                smartphone: {
                    resolution: 320,
                    numRows: 1
                },
                tablet: {
                    resolution: 767,
                    numRows: 2
                },
                desktop: {
                    resolution: 992,
                    numRows: 3
                }
            }
            this.selector = selector
            this.jsonPath = jsonPath

            // looking what kind of device are using the user.
            if (window.screen.width >= initialLoad.desktop.resolution) {
                this.numRows = 3;
            } else if (window.screen.width >= initialLoad.tablet.resolution) {
                this.numRows = 2;
            } else {
                this.numRows = 1;
            }
            // ajax request
            fetch(this.jsonPath).then(information => information.json(), e => {
                console.log("Obtención fallida", e);
            }).then(information => {
                var htmlRow = '';
                for (var i = 1; i <= this.numRows; i++) {
                    var supLimit = i * 3;
                    var infLimit = supLimit - 3;
                    var row = information.slice(infLimit, supLimit);
                    htmlRow = `${htmlRow} ${this.renderRow(row)}`;
                }
                this.currentIndex = i;
                // scroll event
                window.addEventListener('scroll', () => {
                    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                        var supLimit = this.currentIndex * 3;
                        this.currentIndex++
                            var infLimit = supLimit - 3;
                        var row = this.information.slice(infLimit, supLimit);
                        if (row.length > 0) {
                          //creating text before load of the new 3 elements (Loading...)
                            var target = document.querySelector(this.selector);
                            var div = document.createElement("div");
                            div.innerHTML = `<div class='load'> <p> Loading... </p></div>`
                            target.appendChild(div);

                            var htmlSingleRow = this.renderRow(row);
                            var htmlScroll = `${htmlRow} ${htmlSingleRow}`;
                            this.render(htmlScroll);
                        }
                    }
                });
                this.information = information;
                // call Render with  all the rows html result
                this.render(htmlRow);
            });
        } // Close init
        // return the html for three thumbnail elements
    renderRow(row) {
        var sumObject = '';
        for (var i = 0; i < 3; i++) {
            var name = row[i].name;
            var artist = row[i].artist;
            var imageurl = row[i].imageurl;

            sumObject = sumObject + `<div class = 'box__photo' id="${i}" >
                                      <img src = "${imageurl}">
                                      <div class='box__footer  box__footer--style'>
                                          <div id='footer__name'> <h1>${name}</h1> </div>
                                          <div id='footer__artis'> <p>By ${artist}</p></div>
                                      </div>
                                 </div>`;

        } //close for
        return `<div class='wrapPhotos__box'>${sumObject}</div>`;
    }

    render(htmlRow) {
        var _this = this;
        //--- insert div that contain button: prev, next and close.
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
                                            <div class='wrapImgInfomation__showImg'></div>
                                    </div>

                                </div>`;

        //--- get root element using the user selector
        var target = document.querySelector(this.selector);
        //--- insert plugin html
        target.innerHTML = `${htmlRow} ${showInformation}`;

        //************************* Click Event, show the description and show big img *****************

        var boxInformation = document.querySelectorAll('.box__photo');
        var boxInformationArray = [].slice.call(boxInformation);
        var showImg = document.querySelector(".wrapImgInfomation__showImg");
        var showInfomation = document.getElementById('wrapImgInfomation');
        var arrayLength = this.information.length;
        //---- add click event to all thumbnails elements
        for (var i = 0; i < boxInformationArray.length; i++) {
            var showDescription = boxInformationArray[i];
            //--- Click Event,get the position and insert the content
            showDescription.onclick = function () {
                //***** crearing variable id of thumbnails's event
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
                nextImg.onclick = nextPicture;

                // ----- previous image
                var prevImg = document.getElementById('prevImg');
                prevImg.onclick = prevPicture;

                //******************************* KeyboardEvent ****************************
                document.onkeydown = chars;

                function chars(evento) {
                    if (window.evento)
                        evento = window.evento;
                    caracterres(evento.keyCode);
                }

                function caracterres(chars) {
                  //right Arrow key
                    if (chars === 39) {
                        nextPicture();
                    }
                      //left Arrow key
                    if (chars === 37) {
                        prevPicture();
                    }
                    // esc key
                    if (chars === 27) {
                        closePicture();
                    }

                }
                //------- click event and Keyboard Next function handler
                function nextPicture() {
                    id = id + 1;
                    if (id < arrayLength) {
                        _this.insertContent(_this.information[id], showImg);
                    } else {
                        id = 0;
                        _this.insertContent(_this.information[id], showImg);
                    }
                };
                //-- click event and Keyboard Prev function handler
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
                //-- click event and Keyboard Close function handler
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

} //close Class Gallery

var artGallery = new Gallery();
artGallery.init('.container-gallery','gallery.json')
