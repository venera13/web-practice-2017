function Slider(slidesArray)
{
    var NUMBER_SLIDE = 1;

    this.slidesArray = slidesArray;
    this.activeSlide = 0;
    this.slidesArray[this.activeSlide].isActive = true;

    this.nextSlide = function()
    {
        if (this.activeSlide < NUMBER_SLIDE)
        {
            this.getActiveSlide().isActive = false;
            this.activeSlide += 1;
            this.getActiveSlide().isActive = true;
        }
        else if (this.activeSlide === NUMBER_SLIDE)
        {
            this.getActiveSlide().isActive = false;
            this.activeSlide = 0;
            this.getActiveSlide().isActive = true;
        }
    };

    this.prevSlide = function()
    {
        if (0 < this.activeSlide)
        {
            this.getActiveSlide().isActive = false;
            this.activeSlide -= 1;
            this.getActiveSlide().isActive = true;
        }
        else if (this.activeSlide === 0)
        {
            this.getActiveSlide().isActive = false;
            this.activeSlide = NUMBER_SLIDE;
            this.getActiveSlide().isActive = true;
        }
    };

    this.getActiveSlide = function()
    {
        if (0 <= this.activeSlide <= NUMBER_SLIDE)
        {
            return this.slidesArray[this.activeSlide];
        }
    };
}

function Slide(url)
{
    this.url = url;
    this.isActive = false;
}

var slideFirst = new Slide("https://www.volgatech.net/upload/iblock/d53/d538dba0957ea7e101a44c3fcd6ce7e4.jpg");
var slideSecond = new Slide("https://www.volgatech.net/upload/iblock/728/728771406ab598852531787b6a7344b2.jpg");
var slider = new Slider([slideFirst, slideSecond]);

for (var i=0; i < 5; i++)
{
    console.log(slider.getActiveSlide());
    //slider.nextSlide();
    slider.prevSlide();
    console.log(slider.getActiveSlide());
}