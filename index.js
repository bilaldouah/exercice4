function loaded(){
    Afficher();
};
var notes = [];
function Ajouter(){

var note = document.getElementById('number').value;
      notes.push(parseInt(note));
      document.getElementById('number').value="";
};

function Afficher(){
    document.getElementById('notes').innerHTML ='<tr> <th>NOTES </th></tr>';
    for(var i=0;i<notes.length;i++){
    
        var note = notes[i];
        document.getElementById('notes').innerHTML += '  </tr><td>'+note+'</td></tr>';

    }
    
};
function Somme(){
    var s=0;
    for (var i=0; i<notes.length;i++){
         s= s+notes[i];   
    }
    document.getElementById('Somme').innerHTML = 'la somme est ='+s+'';

    document.getElementById('Somme').setAttribute("class", "container p-3 my-3 bg-primary text-white");
};
function Moyenne(){
    var moy=0;
    var s=0;
    for (var i=0; i<notes.length;i++){
         s= s+notes[i];   
    }
    moy= s/i;
    document.getElementById('moy').innerHTML = 'le moyenne est ='+moy+'';
    document.getElementById('moy').setAttribute("class", "container p-3 my-3 bg-dark text-white");
};

function Max(){
    var max=0;
    for(var i=0;i<notes.length;i++){
        if(notes[i]>max){
            max=notes[i];
        }
    }
    document.getElementById('max').innerHTML = 'la note maximal  est ='+max+'';
    document.getElementById('max').setAttribute("class", "container p-3 my-3 bg-info text-white");
};

function Min(){
    var Min=Number.MAX_SAFE_INTEGER;
    for(var i=0;i<notes.length;i++){
        if(notes[i]<Min){
            Min=notes[i];
        }
    }
    document.getElementById('Min').innerHTML = 'la note minimal est ='+Min+'';
    document.getElementById('Min').setAttribute("class", "container p-3 my-3 bg-danger text-white");
};