$(document).ready(function () {
  //  mostrarInicio();
  mostrarContactanos();
});

function OcultarDivs() {
  // Oculta los DIVs para hacerlos resposivos
  $('#GaleriaImagenes').hide();  
  $('#CintaFotos').hide();  
  $('#Contactanos').hide();    
}

function mostrarGaleria() {
  OcultarDivs();
  $('#GaleriaImagenes').show();  
}

function mostrarInicio() {
  OcultarDivs();
  $('#CintaFotos').show();
}

function mostrarContactanos() {
  OcultarDivs();
  $('#Contactanos').show();
}

// Seleccion de las comunas 
ciudades_1 = new Array("Arica");
ciudades_2 = new Array("Alto Hospicio","Iquique","Pozo Almonte");
ciudades_3 = new Array("Caldera","Chanaral","Copiapo","Diego de Almagro","El Salvador","Huasco","Tierra Amarilla","Vallenar");
ciudades_4 = new Array("Andacollo","Combarbala","Coquimbo","El Palqui","Illapel","La Serena","Los Vilos","Montepatria","Ovalle","Salamanca","Vicuna");
ciudades_5 = new Array("Algarrobo","Cabildo","Calle Larga","Cartagena","Casablanca","Catemu","Concon","El Melon","El Quisco","El Tabo","Hijuelas","La Calera","La Cruz","La Ligua","Las Ventanas","Limache","Llaillay","Los Andes","Nogales","Olmue","Placilla de Penuelas","Putaendo","Quillota","Quilpue","Quintero","Rinconada","San Antonio","San Esteban","San Felipe","Santa Maria","Santo Domingo","Valparaiso","Villa Alemana","Villa Los Almendros","Vina del Mar");
ciudades_6 = new Array("Chimbarongo","Codegua","Donihue","Graneros","Gultro","Las Cabras","Lo Miranda","Machali","Nancagua","Palmilla","Peumo","Pichilemu","Punta Diamante","Quinta de Tilcoco","Rancagua","Rengo","Requinoa","San Fernando","San Francisco de Mostazal","San Vicente de Tagua Tagua","Santa Cruz");
ciudades_7 = new Array("Cauquenes","Constitucion","Curico","Hualane","Linares","Longavi","Molina","Parral","San Clemente","San Javier","Talca","Teno","Villa Alegre");
ciudades_8 = new Array("Arauco","Bulnes","Cabrero","Canete","Chiguayante","Chillan","Chillan Viejo","Coelemu","Coihueco","Concepcion","Conurbacion La Laja-San Rosendo","Coronel","Curanilahue","Hualpen","Hualqui","Huepil","Lebu","Los alamos","Los angeles","Lota","Monte aguila","Mulchen","Nacimiento","Penco","Quillon","Quirihue","San Carlos","San Pedro de la Paz","Santa Barbara","Santa Juana","Talcahuano","Tome","Yumbel","Yungay");
ciudades_9 = new Array("Angol","Carahue","Collipulli","Cunco","Curacautin","Freire","Gorbea","Labranza","Lautaro","Loncoche","Nueva Imperial","Padre Las Casas","Pitrufquen","Pucon","Puren","Renaico","Temuco","Traiguen","Victoria","Villarrica");
ciudades_10 = new Array("Futrono","La Union","Lanco","Los Lagos","Paillaco","Panguipulli","Rio Bueno","San Jose de la Mariquina","Valdivia");
ciudades_11 = new Array("Coihaique","Puerto Aisen");
ciudades_12 = new Array("Punta Arenas","Puerto Natales");
ciudades_13 = new Array("Alto Jahuel","Bajos de San Agustin","Batuco","Buin","Cerrillos","Cerro Navia","Colina","Conchali","Curacavi","El Bosque","El Monte","Estacion Central","Hospital","Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Florida","La Granja","La Islita","La Pintana","La Reina","Lampa","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipu","Melipilla","Nunoa","Padre Hurtado","Paine","Pedro Aguirre Cerda","Penaflor","Penalolen","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquin","San Jose de Maipo","San Miguel","San Ramon","Santiago","Talagante","Tiltil","Vitacura");
ciudades_14 = new Array("Ancud","Calbuco","Castro","Fresia","Frutillar","Llanquihue","Los Muermos","Osorno","Puerto Montt","Puerto Varas","Purranque","Quellon","Rio Negro");
ciudades_15 = new Array("Antofagasta","Calama","Maria Elena","Mejillones","Taltal","Tocopilla");

function buscar_ciudad(){
    var region
    region = $('#TextRegion').val();
    console.log(region);
    if (region != '') {
        comunas = eval("ciudades_" + region)
        console.log(comunas);
        textColumna = $('#TextComuna')
        textColumna
          .find('option')
          .remove()
          .end()
        
        textColumna.append('<option value="">Seleccione una comuna...</option>')
        for(i=0;i < comunas.length; i++) {
            console.log(i);
            console.log(comunas[i]);
            textColumna.append('<option value="' + comunas[i] + '">' + comunas[i] + '</option>')
        }
    }
    else {
      $('#TextComuna')
        .val('')
        .find('option')
        .remove()
        .end()
        .append('<option value="">Elija primero una region...</option>');
    }
  }

  $("#formulario").submit(function(e){
    // Funcion para comprobar que los datos ingresados por el formulario estan corractamente
    e.preventDefault();
    
    // valNuloText(document.getElementById('TextEmail')); // validando email
    // valNuloText(document.getElementById('TextRut')); // validando rut
    // valNuloText(document.getElementById('TextFechaNac')); // validando fecha nacimiento

    // valNuloSelect($('#TextRegion'), 'ingresar la Region'); // validando region
    // valNuloSelect($('#TextComuna'), 'ingresar la Comuna'); // validando comuna
    // valNuloSelect($('#TextVivienda'), 'ingresar el Tipo de Vivienda'); // validando tipo de vivienda

    alert('Datos enviado exitosamente.')

    //limpiando controles
    $('#TextEmail').val('');
    $('#TextRut').val('');
    $('#TextFechaNac').val('');
    $('#TextTelefono').val('');
    $('#TextComuna').val('');
    $('#TextRegion').val('');
    $('#TextVivienda').val('');
  })

  function valNuloText(formControl) {
    // valida que los input text tengan contenido, si no lo tiene, entrega una alerta y le coloca el foco
    if (formControl.value == '0') {
      alert('Debe ' + formControl.getAttribute("placeholder"));
      formControl.focus();
    }
  }

  function valNuloSelect(formControl, mensajeError) {
4    // valida que los combobox tengan contenido, si no lo tiene, entrega una alerta y le coloca el foco
    if (formControl.val() == '0') {
      alert('Debe ' + mensajeError);
      formControl.focus();
    }    
  }

