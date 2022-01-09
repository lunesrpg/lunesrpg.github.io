function pesquisa_magias() {
    let input = document.getElementById('pesquisamagias').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('ln-magias-pesquisa');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}