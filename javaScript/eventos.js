function Gallery () {
  this.information = [  {
      "name": "Royal Red And Blue",
      "artist": "Mark Rothko",
      "price": "$75.1",
      "about": "The majestic canvas was one of eight works hand-selected by Rothko for his landmark solo show of the same year at the Art Institute of Chicago.",
      "imageurl": "assets/images/royal_red_and_blue.jpg"
    },
    {
      "name": "False Start",
      "artist": "Jasper Johns",
      "price": "$80",
      "about": "Another painting formerly owned by Geffen and allegedly sold to CEO of the Citadel Investment Group, Kenneth C. Griffin, making it the most expensive painting to be sold by a living artist, the iconic Jasper Johns.",
      "imageurl": "assets/images/false_start.jpg"
    },
    {
      "name": "Portrait of Dr. Gachet",
      "artist": "Vincent van Gogh",
      "price": "$82.5",
      "about": "Up for auction in 1990 and purchased by Japanese businessman Ryoei Saito, this was – at the time- the most expensive painting in the world. Saito (then 75) caused controversy at the time, stating that when he died, he’d have the painting cremated along with him. This was later cleared up as he claimed that he was only using the expression to show his intense affection for it.",
      "imageurl": "assets/images/portrait_of_dr_gachet.jpg"
    },
    {
      "name": "Portrait of Adele Bloch-Bauer II",
      "artist": "Gustav Klimt",
      "price": "$87.9",
      "about": "The only model to be painted twice by Klimt and sold a few months after the first version, this portrait of Bloch-Bauer was part of a lot in 2006 of four Klimt paintings that went on to fetch a total of $192 million. Buyer unknown. Click Here and go compare other paintings by Gustav Klimt.",
      "imageurl": "assets/images/portrait_of_adele_bloch-bauer_2.jpg"
    },
    {
      "name": "Dora Maar au Chat",
      "artist": "Pablo Picasso",
      "price": "$95.2",
      "about": "Another Picasso, the second highest price ever fetched at auction, and another anonymous buyer. Auctioned in 2006, a mysterious Russian bidder took this home (along with a Monet and a Chagall, spending over $100 million) and no one has since found out who he was. The ownership of the painting has still not been made public.",
      "imageurl": "assets/images/dora_maar_au_chat.jpg"
    },
    {
      "name": "Nude, Green Leaves and Bust",
      "artist": "Pablo Picasso",
      "price": "$106.5",
      "about": "This sensual and colorful masterpiece is the most expensive work by Picasso ever sold at auction. The work, formerly in the collection of Mrs. Sidney F. Brody, had been never exhibited in public since 1961.",
      "imageurl": "assets/images/nude_green_leaves_and_bust.jpg"
    },
    {
      "name": "Portrait of Adele Bloch-Bauer I",
      "artist": "Gustav Klimt",
      "price": "$135",
      "about": "This was sold by Maria Altmann, who – after a lengthy and complicated court battle – was deemed rightful owner of this Klimt and several others. Altmann was named as an inheritor of the painting in the will of by the widowed husband of the model herself, despite the efforts of the Austrian State, as Adele Bloch-Bauer had originally left the painting to the State Gallery in her own will. The painting was bought by Ronald Lauder for his Neue Galerie in New York, to be the centerpiece of a collection of Jewish-owned art rescued from the Nazi looting that took place in the Second World War.",
      "imageurl": "assets/images/portrait_of_adele_bloch-bauer_1.jpg"
    },
    {
      "name": "No 5",
      "artist": "Jackson Pollock",
      "price": "$140",
      "about": "It is claimed by the New York Times that this painting was sold by David Geffen (of Geffen Records), to David Martinez (managing partner of Fintech Advisory). However, a press release issued on behalf of Martinez states that he didn’t actually purchase the painting. So the truth is shrouded in mystery, and it can only be rumored to have sold for a record-breaking $140 million.",
      "imageurl": "assets/images/number_5.jpg"
    },
    {
      "name": "The Dream",
      "artist": "Pablo Picasso",
      "price": "$155",
      "about": "The Dream (La Rêve) is one of Picasso’s most sensual and famous paintings, depicting her lover Marie-Therese Walter sitting on a red armchair with her eyes closed. In 2006, Steve Wynn agreed to sell the painting to Steven Cohen for $139 million, but the sale was cancelled when Mr. Wynn accidentally damaged the work.",
      "imageurl": "assets/images/the_dream.jpg"
    }]
  this.start = function(){
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
                          <div id='close' class="showImg--btnClose  showImg__btnClose--style"><p> X </p> </div>
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
                   insertContent(_this.information[id],showImg);
                   showInfomation.style.display="block";

//**************************** catch id= "close" description ***********************************
               var close = document.getElementById('close');
//-- creating function  close description
                          close.onclick = function () {
                            showImg.querySelector(".showImg__temp").remove();
                            showInfomation.style.display="none";
                          };

// **************************** image prev and btn next ********************************************
//------ next image
                      var nextImg = document.getElementById('nextImg');
//Function --- Next image
                        nextImg.onclick = function () {
                          id = id + 1;
                              if (id < arrayLength) {
                                    insertContent(_this.information[id],showImg);
                              } else {
                                id = 0;
                                  insertContent(_this.information[id],showImg);
                               }
                          };
  // ----- previous image
                        var prevImg = document.getElementById('prevImg');

                          prevImg.onclick = function () {
                            id = id - 1;
                            console.log(id);
                              if (id < 0) {
                                  id = arrayLength -1;
                                  insertContent(_this.information[id],showImg);
                              }else {
                              insertContent(_this.information[id],showImg);
                              }
                          };
           }; // close function showDescription
       } // close of for loop

//************************************************ Reuse code **************************************************************



      function insertContent (dataSource, target) {
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
      }// close insertContent

 }; // close start
}

var Gallery = new Gallery
Gallery.start();
