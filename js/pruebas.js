function mensaje3(){
    $.ajax({
        type: 'GET',
        url: 'http://34.229.173.9/Tarea4DW_EC2/index.php/OfertasApi',
        dataType: 'json',
        success: function(data) {
          Swal.fire("Q."+ +data[2].precio+", "+data[2].detalles);
        }
    }); 
}

function mensaje2(){
  $.ajax({
    type: 'GET',
    url: 'http://34.229.173.9/Tarea4DW_EC2/index.php/OfertasApi',
    dataType: 'json',
    success: function(data) {
      Swal.fire("Q."+ +data[1].precio+", "+data[1].detalles);
    }
  }); 
  
}

function mensaje1(){
  $.ajax({
    type: 'GET',
    url: 'http://34.229.173.9/Tarea4DW_EC2/index.php/OfertasApi',
    dataType: 'json',
    success: function(data) {
      Swal.fire("Q."+ +data[0].precio+", "+data[0].detalles);
    }
  }); 
  
}