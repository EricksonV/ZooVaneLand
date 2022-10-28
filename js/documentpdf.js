function documentog1(){
    $.ajax({
      type: 'GET',
      url: 'http://34.229.173.9/Tarea4DW_EC2/index.php/OfertasApi',
      dataType: 'json',
      success: function(data) {

        documento1("OFERTA 1. Q."+ +data[0].precio+", "+data[0].detalles,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Savannen.JPG/1200px-Savannen.JPG",
        "Oferta1");
      }
    }); 
    
}
function documentog2(){
    $.ajax({
      type: 'GET',
      url: 'http://34.229.173.9/Tarea4DW_EC2/index.php/OfertasApi',
      dataType: 'json',
      success: function(data) {

        documento1("OFERTA 2. Q."+ +data[1].precio+", "+data[1].detalles,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Savannen.JPG/1200px-Savannen.JPG',
        'Oferta2');
      }
    }); 
    
}
function documentog3(){
    $.ajax({
      type: 'GET',
      url: 'http://34.229.173.9/Tarea4DW_EC2/index.php/OfertasApi',
      dataType: 'json',
      success: function(data) {

        documento1("OFERTA 3. Q."+ +data[2].precio+", "+data[2].detalles,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Savannen.JPG/1200px-Savannen.JPG'
        ,'Oferta3');
      }
    }); 
    
}
function documento1(msg, image, name){
    var image1 = new Image();
    var doc = new jsPDF()
    
    image1.src=image;
    doc.setFontSize(10)
    doc.text(20, 25, msg);
    doc.addImage(image1, 'JPEG', 15, 40, 180, 160)

    doc.save(name);
}



