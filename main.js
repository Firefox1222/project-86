var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var block_object="";
 block_height=510;
block_width=700;
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:0,
            left:0
        })
        canvas.add(block_object)
    })
	
}

function playSound(){
	x.play()
}
