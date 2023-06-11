var models = [
    {
        name : 'Bmw 116i',
        image : 'img/bmw.jpg',
        link : 'google.com',
        content : 'The BMW 116i offers impressive performance and handling in a compact and stylish package.'
    },
    {
        name : 'Mazda Cx3',
        image : 'img/mazda.jpg',
        link : 'yandex.com',
        content : 'The Mazda Cx3 offers impressive performance and handling in a compact and stylish package.'
    },
    {
        name : 'Volvo Xc40',
        image : 'img/volvo.jpg',
        link : 'google.com',
        content : 'The Volvo Xc40 offers impressive performance and handling in a compact and stylish package.'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'google.com',
        content : 'The Honda Civic offers impressive performance and handling in a compact and stylish package.'
    },
    {
        name : 'Skoda',
        image : 'img/skoda.jpg',
        link : 'google.com',
        content : 'The Skoda offers impressive performance and handling in a compact and stylish package.'
    }
];

var index = 0;

var model_length = models.length;

var interval ;

var settings = {

    duration : '500',
    random : false

}

init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click',function(){
        
        index--;
        showslide(index);
        console.log(index);

});

document.querySelector('.fa-arrow-right').addEventListener('click',function(){
        
        index++;
        showslide(index);
        console.log(index);
    

});
//queryselectorall yapmayı unuttuğum için 2 saat harcadım.
document.querySelectorAll('.fa-solid').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.fa-solid').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init (settings){

    var prev ;

   interval =  setInterval(function(){

        if(settings.random){

            do{
                index = Math.floor(Math.random()*model_length);
                console.log(index);
                
            }while(prev==index){
                prev = index;
            }

            

        }else{

            if(index == model_length){
                index = 0;
                
            }
                showslide(index);
                index++;
                console.log(index)
        }

        showslide(index)

    },settings.duration)


}

function showslide(i){

    if(i<0){
        index =model_length-1;
    }
    if(i>=model_length){
        index = 0
    }

document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-title').textContent = models[index].name;
document.querySelector('.card-text').textContent = models[index].content;
document.querySelector('.link').setAttribute('href',models[index].link);

};