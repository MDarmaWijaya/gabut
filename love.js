

var ya = true ;
var no = false ;
var i = 1

var siapa= prompt('hai siapa nama mu ? ')
alert('hai '+siapa+' kenalin aku darma \naku mau ngomong sesuatu sama kamu')

for( var j = 1; j > 0 ; j++){
    var nama = confirm(siapa+' mau jadi pacarku gak ?');
    if( nama == true){
        alert('Makasih '+siapa+' sayang');
        break;
    } else if( nama == false){
        alert('BODO,,GA LIAT')
    }
}
  
alert('Always love you '+siapa);