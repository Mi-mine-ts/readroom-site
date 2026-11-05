const genre = [
{ nom: "Thriller", nombre: 43 },
{ nom: "Fantastique", nombre: 9 },
{ nom: "Horreur", nombre: 9 },
{ nom: "Romance", nombre: 9 },
{ nom: "Dystopie", nombre: 2 },
{ nom: "Scienc-Fiction", nombre: 1 }
]

let lignesHTML = ""

genre.forEach(genre => {
    const ligne = `
    <tr>
        <td>${genre.nom}</td>
        <td>${genre.nombre}</td>
    </tr>
    `
    lignesHTML += ligne
})

export function afficherGouts() {
    document.getElementById("gouts").innerHTML =
    `<h3>Mes goûts littéraires</h3>
        <table>
            <tr>
                <th>Genre</th>
                <th>Nombre lus cette année</th>
            </tr>
            ${lignesHTML}
        </table>
    `
}