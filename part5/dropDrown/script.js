let sw = 0;

function show(){
    if(sw == 0){
        document.querySelector('img').src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAT1JREFUWEftlOuNAjEMhIcKjlIogSuBCoDKOCq4EqAESoEO0EhryYqS+JHViZOSX7vrtf15bGeDDzubD+PBBLI6MhWaClkKWPZ/P0MnAD9WlYU95BNRiCDHBejshAr7eIFY5UVBMJEFJTDixv9Ndb1ADFom6EGV/14BsCjzRIC8UGkYJogCWVBDMFmgFhSL49DLcbdJ9zGjkPiXaui4KZioQjsAvwAOAB5L9hqUhqn5dAfbqxAD3wBsATwBfDegSpiWTxMqAnQH8LVEqkHRJKutC+D3F4C9KmIYiAGYpAclSdIw0RnyQA3BZIB6ULTJzITatMba19rHuBz6NExWIT0reqbku3uAa5Pt3bLWVpRKDcGMKlQqxXfXavduxlGFNBSf5Qbv3sZ/AZQGKB3XUmgCraaAFWi2bCpkKWDZ33/0TiUzIhOhAAAAAElFTkSuQmCC";
        sw = 1;
    }

    else if(sw == 1){
        document.getElementById("demo").innerHTML = "Show details";
        document.querySelector('img').src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAQ9JREFUWEft1tENAiEQBNC5CrQEO9AO1A7sQK3AVixBK7AELcFStAMzCSTEBHe4A4IJ9+MHBB5z7HoDGnuGxjzoIOuN9IR6QlYC1vjf3qGVO9kzcsIDgIt1emVcSYiYu1tsC+AbRcjegY7Kpr/mKCAClm6RF4AQtQNwCzYgbhJKATGhB4BZBOUT8q5JKAXEjaqhVFA1VAqoCioVVBw1BlQUNQXE3jR3pfUGsAl61HflXQGweZrPGJBvlNkx1KaCimJSQcUxKaAqGBVUDaOC+D+2jlQTK8t/CXCKXE2xclMu9SIo57C0/ZpnAKccGDUh3wj528QHmtnMck5QXlnO/cy1OsiKqCfUE7ISsMabu0MfOktSJbqVG5wAAAAASUVORK5CYII=";
        document.getElementById('myDropdown').style.display = ("none")
        sw = 2;
    }
    else{
        document.getElementById("demo").innerHTML = "Hide details ";
        document.querySelector('img').src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAT1JREFUWEftlOuNAjEMhIcKjlIogSuBCoDKOCq4EqAESoEO0EhryYqS+JHViZOSX7vrtf15bGeDDzubD+PBBLI6MhWaClkKWPZ/P0MnAD9WlYU95BNRiCDHBejshAr7eIFY5UVBMJEFJTDixv9Ndb1ADFom6EGV/14BsCjzRIC8UGkYJogCWVBDMFmgFhSL49DLcbdJ9zGjkPiXaui4KZioQjsAvwAOAB5L9hqUhqn5dAfbqxAD3wBsATwBfDegSpiWTxMqAnQH8LVEqkHRJKutC+D3F4C9KmIYiAGYpAclSdIw0RnyQA3BZIB6ULTJzITatMba19rHuBz6NExWIT0reqbku3uAa5Pt3bLWVpRKDcGMKlQqxXfXavduxlGFNBSf5Qbv3sZ/AZQGKB3XUmgCraaAFWi2bCpkKWDZ33/0TiUzIhOhAAAAAElFTkSuQmCC";
        document.getElementById('myDropdown').style.display = ("block")
        sw = 1 ;
    }
}



const text = document.querySelector('div')
text.addEventListener('click', show)