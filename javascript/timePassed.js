//30 godina i 1 {Jedan} dan je sa našeg stola blagovan. Bogu fala što nas mazi, dobro hrani i vječno pazi.  
//https://m.me/josip.stojanovic.589?text=anytexthere
//https://ig.me/USERNAME?text=anytexthere
//https://wa.me/+4915731052666?text=anytexthere
//Naše srce uvik stvara mrvu više, tako se živi, tako se diše. 30 godina i 9 dana.
//Ništa ljepše od pečenja, mrzle pive i ramske njive. 30 godina i 9 dana.
//Potjeraj ovce, slonove i kolce! Specijaliteti sa ražnja. 30 godina i 9 dana. 
//Čiča priča priču, oko njega glave niču. 30 godina i 9 dana.
//Pjesma se ori, zemlja se ore, a pite se vazda more! 30 godina i 9 dana. 
//dcdcdcff boja od linkova socijalni
//▫BROJ ZA NARUDŽBU: 036/770-003☎️ 063/414-904 ILI NARUČITE U DM-u ▫RADNO VRIJEME: ▻PONEDJELJAK-NEDJELJA ➡️ 08-22h◅. Splitska bb, Prozor 88440.
function getTimePassed() {
    const start = new Date("1990-01-01T00:00:00Z");
    const now = new Date();
    const diffMs = now - start;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365.25);

    return { years, days, hours, minutes, seconds };
}

function formatTimePassed(tp) {
    // broj dana zavrsava na 1
    if((tp.days % 365)%10 === 1){
        document.getElementById("Naslov").textContent = `Ugostiteljstvo sa tradicijom `
        return ` ${tp.years} godina i ${tp.days % 365} dan.`;    
    }else{
        document.getElementById("Naslov").textContent = `Ugostiteljstvo sa tradicijom `
        return ` ${tp.years} godina i ${tp.days % 365} dana.`;
    }
}

function updateTime() {
    const current = getTimePassed();
    const formatted = formatTimePassed(current);

    if (formatted !== lastFormatted) {
        document.getElementById("timePassed").textContent = formatted;
        lastFormatted = formatted;
    }
    //azuriraj footer svake godine (svakih 1 minutu zapravo ali ova funkcija je jeftina za runnat)
    const currentYear = new Date().getFullYear();
    document.getElementById('godina').textContent = `© 1990-${currentYear} Gril Mango`;
}

let lastFormatted = "";

updateTime(); // Initial call - nije ovo skupo po processor
setInterval(updateTime, 60 * 1000); // Check every minute
