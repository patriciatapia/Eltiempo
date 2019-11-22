
var api = {};
api.url = 'http://api.openweathermap.org/data/2.5/';
api.key = '23681cd2c9271800febd0603d60ccfb0';
api.datos = {};
api.type = 'post';
api.buscar = function(_texto,_exito,_error,_type){

    this.datos = {};
    this.datos.q = _texto;
    this.datos.type = 'like';
    this.datos.sort = 'population';
    this.datos.cnt = '30';
    this.datos.appid = this.key;

    if($.trim(_type)!='')
    this.setType(_type);

    $.ajax({
        url:this.url+'find',
        type:this.type,
        data:this.datos,
        dataType:'json',
        success:_exito,
        error:_error
    });
}

api.setType = function(__type){ this.type = __type}
