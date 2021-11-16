let rowcount = 0;
function update(){
    const tableau = document.body.querySelector("table")
    if(tableau.rows.length == 1){
        tableau.classList.add('d-none');
        legende.src = ""
    }
    else{
        tableau.classList.remove('d-none');
    }
}
function addrow(prenom, nomfam, nombreheures, experience, telephone){

    //Rangee 'normale'
    let cellcount = 0;
    const tableau1 = document.body.querySelector("table");
    const tbodytable = document.body.querySelector("table tbody")

    let rangee = tbodytable.insertRow();
    rangee.className = rowcount;

    let expcell = rangee.insertCell(cellcount);
    cellcount++;
    
    let image = document.createElement("img");
    if(experience == 1){
        image.src = "carre_bleu.jpg";
    }
    else if(experience == 2){
        image.src = "carre_jaune.jpg";
    }
    else{
        image.src = "carre_vert.jpg";
    }
    image.style.width = "25px";
    image.style.height = "25px";
    expcell.appendChild(image);
    

    let namecell = rangee.insertCell(cellcount);
    cellcount++;

    let namediv = document.createElement("div");
    namediv.className = "d-flex flex-column fled-md-row";
    namecell.appendChild(namediv);

    let firstname = document.createElement("div");
    firstname.innerHTML = prenom;
    namediv.appendChild(firstname);

    let lastname = document.createElement("div");
    lastname.innerHTML = nomfam;
    namediv.appendChild(lastname);

    let heurescell = rangee.insertCell(cellcount);
    cellcount++;

    let heuresdiv = document.createElement("div");
    heuresdiv.className = "d-flex flex-column fled-md-row";
    heurescell.appendChild(heuresdiv);
    if(nombreheures > 40){
        let surplus = nombreheures - 40;
        heuresdiv.innerHTML = `40 + ${surplus}`
    }
    else{
        heuresdiv.innerHTML = nombreheures;
    }


    if(parseInt(nombreheures) >= 40){
        heuresdiv.style.backgroundColor = "yellow";
    }
    if(parseInt(nombreheures) > 44){
        heuresdiv.style.backgroundColor = "red";
    }

    let telcell = rangee.insertCell(cellcount);
    cellcount++;

    let teldiv = document.createElement("p");
    teldiv.className = "d-flex flex-column fled-md-row";
    telcell.appendChild(teldiv);
    teldiv.innerHTML = telephone;

    let actioncell = rangee.insertCell(cellcount);
    cellcount++;
    let actiondiv = document.createElement("div");
    actiondiv.className = "d-flex flex-column fled-md-row";
    actioncell.appendChild(actiondiv);

    let modifbut = document.createElement('button');
    modifbut.className = "btn btn-primary";
    modifbut.classList.add(rowcount);
    modifbut.innerHTML = "Modifier"
    actiondiv.appendChild(modifbut);

    let suppbut = document.createElement('button');
    suppbut.className = "btn btn-danger";
    suppbut.classList.add(rowcount);
    suppbut.innerHTML = "Supprimer"
    actiondiv.appendChild(suppbut);


    //----------------------------------------------
    //Rangee edit

    let expcell2 = rangee.insertCell(cellcount);
    expcell2.className = "d-none"
    cellcount++;
    
    let expdrop = document.createElement("select");
    expdrop.className = "form-control";
    //expdrop.style.minWidth = "70px";
    let selecthead = document.createElement("option");
    selecthead.value = -3;
    selecthead.innerHTML = "Expérience"
    selecthead.disabled = true;
    selecthead.selected = true;
    expdrop.appendChild(selecthead);
    let option1 = document.createElement("option");
    option1.value = 1;
    option1.innerHTML = "Nouveau"
    expdrop.appendChild(option1);
    let option2 = document.createElement("option");
    option2.value = 2;
    option2.innerHTML = "Régulier"
    expdrop.appendChild(option2);
    let option3 = document.createElement("option");
    option3.value = 3;
    option3.innerHTML = "Expérimenté"
    expdrop.appendChild(option3);
    
    expcell2.appendChild(expdrop);
    

    let namecell2 = rangee.insertCell(cellcount);
    namecell2.className = "d-none"
    cellcount++;

    let namediv2 = document.createElement("div");
    namediv2.className = "d-flex flex-column fled-md-row";
    namecell2.appendChild(namediv2);


    let firstname2 = document.createElement("input");
    firstname2.type = "text";
    firstname2.placeholder = "Prénom"
    firstname2.className = "form-control"
    namediv2.appendChild(firstname2);

    let lastname2 = document.createElement("input");
    lastname2.type = "text";
    lastname2.placeholder = "Nom"
    lastname2.className = "form-control"
    namediv2.appendChild(lastname2);

    let heurescell2 = rangee.insertCell(cellcount);
    heurescell2.className = "d-none"
    cellcount++;

    let heuresinput2 = document.createElement("input");
    heuresinput2.type = "number";
    heuresinput2.className = "form-control";
    heuresinput2.max = 48;
    heuresinput2.min = 0;
    heuresinput2.oninput = function(event){
        let value = event.target.value;
        if(value > 48){
            value = 48;
        }
        if(value < 0){
            value = 0;
        }
        event.target.value = value;
    }
    heurescell2.appendChild(heuresinput2);

    let telcell2 = rangee.insertCell(cellcount);
    telcell2.className = "d-none"
    cellcount++;

    let telinput2 = document.createElement("input");
    telinput2.type = "tel";
    telinput2.placeholder = "XXXXXXXXXX";
    telinput2.className = "form-control";
    telcell2.appendChild(telinput2);

    let actioncell2 = rangee.insertCell(cellcount);
    actioncell2.className = "d-none"
    cellcount++;
    let actiondiv2 = document.createElement("div");
    actiondiv2.className = "d-flex flex-column fled-md-row";
    actioncell2.appendChild(actiondiv2);


    let confirmbut = document.createElement('button');
    confirmbut.className = "btn btn-success";
    confirmbut.classList.add(rowcount);
    confirmbut.innerHTML = "Confirmer"
    actiondiv2.appendChild(confirmbut);
    

    let cancelbut = document.createElement('button');
    cancelbut.className = "btn btn-secondary";
    cancelbut.classList.add(rowcount);
    cancelbut.innerHTML = "Annuler"
    actiondiv2.appendChild(cancelbut);

    // fonctions des bouttons

    confirmbut.onclick = function(){
        let isnum2 = /^\d+$/.test(telinput2.value);
        if(telinput2.value != null && getlength(telinput2.value) >= 10 && isnum2 && expdrop.value != -3 && firstname2.value != null && firstname2.value != "" && lastname2.value != null && lastname2.value != ""){


            firstname.innerHTML = firstname2.value;
            lastname.innerHTML = lastname2.value;
            heuresdiv.innerHTML = heuresinput2.value;
            teldiv.innerHTML = telinput2.value;

            if(expdrop.value == 1){
                image.src = "carre_bleu.jpg";
            }
            else if(expdrop.value == 2){
                image.src = "carre_jaune.jpg";
            }
            else{
                image.src = "carre_vert.jpg";
            }
            image.style.width = "25px";
            image.style.height = "25px";
            
            
            if(heuresinput2.value > 44){
                heuresdiv.style.backgroundColor = "red";
            }
            else if(heuresinput2.value >= 40){
                heuresdiv.style.backgroundColor = "yellow";
            }
            else{
                heuresdiv.style.backgroundColor = "";
            }

            if(heuresinput2.value > 40){
                let surplus = heuresinput2.value - 40;
                heuresdiv.innerHTML = `40 + ${surplus}`
            }
            else{
                heuresdiv.innerHTML = heuresinput2.value;
            }

            nombreheures = heuresinput2.value;

            firstname2.value = '';
            lastname2.value = '';
            heuresinput2.value = 0;
            telinput2.value = '';

            const tds = rangee.querySelectorAll('td');

                for(const td of tds){
                    td.classList.toggle('d-none');
                }
        }
        else{
            alert('Valeurs pas valides!');
        }
    }

    cancelbut.onclick = function(){
        const tds = rangee.querySelectorAll('td');

        for(const td of tds){
            td.classList.toggle('d-none');
        }

        telinput2.value = firstname2.value = '';
        lastname2.value = '';
        heuresinput2.value = 0;
        telinput2.value = '';
        
    }

    modifbut.onclick = function(event){
        const tds = rangee.querySelectorAll('td');

        firstname2.value = firstname.innerHTML;
        lastname2.value =  lastname.innerHTML;
        heuresinput2.value = nombreheures;
        telinput2.value = teldiv.innerHTML;
        expdrop.value = experience;

        for(const td of tds){
            td.classList.toggle('d-none');
        }

    }
    suppbut.onclick = function(){
        if(confirm('Etes vous sure?')){
            rangee.remove();
            update();
        }
    }

    rowcount++;
}

function getlength(number) {
    return number.toString().length;
}

addEventListener('DOMContentLoaded',setup)

function setup(){
    let create = document.querySelector('[id="ajouter"]');

    create.onclick = ajouter;

    let heuresinput = document.querySelector('[id="hoursinput1"]');
    heuresinput.max = 48;
    heuresinput.min = 0;
    heuresinput.oninput = function(event){
        let value = event.target.value;
        if(value > 48){
            value = 48;
        }
        if(value < 0){
            value = 0;
        }
        event.target.value = value;
    };
}

function ajouter(){

    //IF TAAATAAATAA ISNT NULL...
    const cell = document.querySelector('[id="cellinput1"]').value;
    const heures = document.querySelector('[id="hoursinput1"]').value;
    const nom = document.querySelector('[id="nominput1"]').value;
    const prenom = document.querySelector('[id="prenominput1"]').value;
    const experience = document.querySelector('[id="experienceinput1"]').value;

    let para = document.body.querySelector('[id="paragraphe1"]');

    let legende = document.body.querySelector('[id="legende"]')


    let isnum = /^\d+$/.test(cell);

    if(cell != null && getlength(cell) >= 10 && isnum && parseInt(experience.value) != -3 && nom != null && nom != "" && prenom != null && prenom != ""){
        document.querySelector('[id="cellinput1"]').value = null;
        document.querySelector('[id="hoursinput1"]').value = 0;
        document.querySelector('[id="nominput1"]').value = null;
        document.querySelector('[id="prenominput1"]').value = null;
        document.querySelector('[id="experienceinput1"]').value = -3;
        console.log(experience);

        if(para){
            para.remove();
        }

        let tableau = document.body.querySelector("table");
        tableau.className = "table table-hover mt-4"

        legende.src = "legende.png"

        addrow(prenom, nom, heures, experience, cell)
    }
    else{
        alert('Valeurs pas valides!');
    }

}