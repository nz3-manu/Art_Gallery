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
  this.init = function(){
    var sumObject = " ";
    var sumTotal = " ";
    var eachThree = " ";
    var elements = "";

   for (var i=0; i<this.information.length; i++) {
     var name = this.information[i].name;
     var artist = this.information[i].artist;
     var price = this.information[i].price;
     var about = this.information[i].about;
     var imageurl = this.information[i].imageurl;
          sumObject=  sumObject + `<div class = 'box__photo'>
                                        <img id="${i}" src = "${imageurl}">
                                        <div class='box__footer  box__footer--style'>
                                            <div id='footer__name'> <h1>${name}</h1> </div>
                                            <div id='footer__artis'> <p>${artist}</p></div>
                                            <div id='footer__about'> <p>${about}</p> </div>
                                            <div id='footer__price'> <p>${price}</p> </div>
                                        </div>
                                   </div>`;

    //condition for three each elements
         if (0 == (i+1)%3) {
           eachThree = eachThree + `<div class='wrapPhotos__box'>${sumObject}</div>`;
           sumObject = "";
         }

   } //close for

 //creating div of show information
   var showInformation = `<div id="wrapImgInfomation">
                              <div class='wrapImgInfomation__showImg'>
                              </div>
                          </div>`;

   // --------------------------- father div ---------------------
   var target = document.getElementsByClassName('wrapPhotos')[0];
        target.innerHTML = `${eachThree} ${showInformation}`;


   /*==========================================================================
    ----------------  Click Event description and show big img ----------------
   ***************************************************************************/
   var boxInformation = document.querySelectorAll('.box__photo'),
       boxInformationArray = [].slice.call(boxInformation);

      // creating global variable wrapImgInfomation
      var showInfomation = document.getElementById('wrapImgInfomation');

      //creating funtion  open of image big


      function openDescription (showDescription,objGallery) {
        var showImg = showInfomation.querySelector(".wrapImgInfomation__showImg"),
            imgPicture = showDescription.querySelector('img'),
            footer__name = showDescription.querySelector('#footer__name h1').innerHTML,
            footer__artis = showDescription.querySelector('#footer__artis p').innerHTML,
            footer__about = showDescription.querySelector('#footer__about p').innerHTML,
            footer__price = showDescription.querySelector('#footer__price p').innerHTML,
            imageId = imgPicture.id;



            showImg.innerHTML=`<div id='close' class="showImg--btnClose  showImg__btnClose--style"><p> X </p> </div>
                                <div class="showImg__temp">
                                    <div class="temp">
                                          <div id="prevImg" class="temp__wrapArrow">
                                              <div class="wrapArrowRight__style"></div>
                                              <div class="wrapArrowRight__style"></div>
                                          </div>
                                              <img src = "${imgPicture.src}">
                                              <div id="nextImg" class="temp__wrapArrow">
                                                  <div class="wrapArrowLeft__style"></div>
                                                  <div class="wrapArrowLeft__style"></div>
                                              </div>
                                      </div>

                                    <div class='temp__footer'>
                                        <div id='footer__name'> <h1>${footer__name}</h1> </div>
                                        <div id='footer__artis'> <p>${footer__artis}</p></div>
                                        <div id='footer__about'> <p>${footer__about}</p> </div>
                                        <div id='footer__price'> <p>${footer__price}</p> </div>
                                    </div>
                                </div>`
            showInfomation.style.display = "block";

            //catch close description -------------
            var close = document.getElementById('close');
             //creating funtion  close description
                       close.onclick = function () {
                         console.log('hola mundo');
                         showImg.querySelector(".showImg__temp").remove();
                         showInfomation.style.display="none";
                       };

          console.log(imgPicture.id);

         /*==========================================================================
          ----------------  Prev and next  ----------------
         ***************************************************************************/
        //-------  image previo
        var prevImg = document.getElementById('prevImg');
            prevImg.onclick = function () {
            }

            var nextImg = document.getElementById('nextImg');
                nextImg.onclick = function () {
                  console.log("mostrando ID "+imageId);
                  var currentlyId = ++imageId + 1;
                  console.log(currentlyId);
                  console.log(objGallery.information[currentlyId].imageurl);

                }


      } // close openDescription;
         var _this = this;
       for (var i=0; i<boxInformationArray.length; i++) {
            var showDescription = boxInformationArray[i];

            showDescription.onclick = function() {
                openDescription(this,_this);
            };
       }






 };
}

var Gallery = new Gallery
Gallery.init();
