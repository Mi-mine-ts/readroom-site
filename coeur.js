const dix2026 = [
    { titre: "The Silent Patient", auteur: "Alex Michaelides", langue: "Français et Anglais", t2:"VF: Dans son silence" },
    { titre: "Home Before Dark", auteur: "Riley Sager", langue: "Anglais seulement", t2:"Non dispo." },
    { titre: "Rock Papier Scissors", auteur: "Riley Sager", langue: "Français et Anglais", t2:"VF: Dix ans, noces de sang" },
    { titre: "The Last Housewife", auteur: "Ashley Winstead", langue: "Anglais seulement", t2:"Non dispo." },
    { titre: "The Last One", auteur: "Will Dean", langue: "Anglais seulement", t2:"Non dispo." },
    { titre: "What Lies in the Woods", auteur: "Kate Alice marshall", langue: "Anglais seulement", t2:"Non dispo." },
    { titre: "Stolen Tongues", auteur: "Felix Blackwell", langue: "Anglais seulement", t2:"Non dispo." },
    { titre: "Projet Dernière Chance", auteur: "Andy Weir", langue: "Français et Anglais", t2:"VO: Hail Mary Project" },
    { titre: "They Never Learn", auteur: "Layne Fargo", langue: "Anglais seulement", t2:"Non dispo." }
]

let lignesHTML = ""

dix2026.forEach(dix2026 => {
    const ligne = `
    <tr>
        <td>${dix2026.titre}</td>
        <td>${dix2026.auteur}</td>
        <td>${dix2026.langue}</td>
        <td>${dix2026.t2}</td>
    </tr>
    `
    lignesHTML += ligne
})

export function afficherCoeurs() {
    document.getElementById("coeur").innerHTML =
    `<h3>Et mes 10/10 et coup de coeur de 2026!</h3>
    <table>
        <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Langue</th>
            <th>Autre titre</th>
        </tr>
        ${lignesHTML}
    </table>
    `
}