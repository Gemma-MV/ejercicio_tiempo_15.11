(function () {
    localStorage.clear();
})();

function cargarEmoji() {
    // Aqui obtenemos el codigo que nos indica el usuario
    const emojiCodigo = document.getElementById('codigoEmoji').value.toUpperCase();
    
    fetch('https://openmoji.org/data/openmoji.json')
    .then(datos => datos.json())
    .then(emoji => {

        // Esta constante sirve para que guarde el dato de la busqueda del codigo del parametro "hexcode" del json
        const imgEmoji = emoji.find(e => e.hexcode === emojiCodigo);

        if (imgEmoji) {
            // Si se encuentra el emoji, mostrar su imagen
            crearEmoji(emojiCodigo);
        } else {
            // Si no se encuentra el emoji, mostrar un mensaje de error
            alert('Emoji no encontrado. Por favor, verifica el código.');
        }
    })

    .catch(error => {
        console.error('Error al obtener los emojis:', error);
    });
}

function crearEmoji(emojiCodigo) { 
    // URL de la API para obtener la imagen del emoji 
    const emojiUrl = [
        {
          "emoji": "ðŸ˜€",
          "hexcode": "1F600",
          "group": "smileys-emotion",
          "subgroups": "face-smiling",
          "annotation": "grinning face",
          "tags": "face, grin",
          "openmoji_tags": "smile, happy",
          "openmoji_author": "Emily JÃ¤ger",
          "openmoji_date": "2018-04-18",
          "skintone": "",
          "skintone_combination": "",
          "skintone_base_emoji": "",
          "skintone_base_hexcode": "",
          "unicode": 1,
          "order": 1
        },
        {
          "emoji": "ðŸ˜ƒ",
          "hexcode": "1F603",
          "group": "smileys-emotion",
          "subgroups": "face-smiling",
          "annotation": "grinning face with big eyes",
          "tags": "face, mouth, open, smile",
          "openmoji_tags": "eyes, teeth",
          "openmoji_author": "Emily JÃ¤ger",
          "openmoji_date": "2018-04-18",
          "skintone": "",
          "skintone_combination": "",
          "skintone_base_emoji": "",
          "skintone_base_hexcode": "",
          "unicode": 0.6,
          "order": 2
        },
        {
          "emoji": "ðŸ˜„",
          "hexcode": "1F604",
          "group": "smileys-emotion",
          "subgroups": "face-smiling",
          "annotation": "grinning face with smiling eyes",
          "tags": "eye, face, mouth, open, smile",
          "openmoji_tags": "happy, teeth",
          "openmoji_author": "Emily JÃ¤ger",
          "openmoji_date": "2018-04-18",
          "skintone": "",
          "skintone_combination": "",
          "skintone_base_emoji": "",
          "skintone_base_hexcode": "",
          "unicode": 0.6,
          "order": 3
        },
        {
          "emoji": "ðŸ˜",
          "hexcode": "1F601",
          "group": "smileys-emotion",
          "subgroups": "face-smiling",
          "annotation": "beaming face with smiling eyes",
          "tags": "eye, face, grin, smile",
          "openmoji_tags": "happy, teeth, mouth",
          "openmoji_author": "Emily JÃ¤ger",
          "openmoji_date": "2018-04-18",
          "skintone": "",
          "skintone_combination": "",
          "skintone_base_emoji": "",
          "skintone_base_hexcode": "",
          "unicode": 0.6,
          "order": 4
        },]; 

    // Creamos el elemento img
    const img = document.createElement('img'); 
    img.src = emojiUrl; 
    img.alt = `Emoji ${emojiCodigo}`; 

    // Limpiamos el contenedor del emoji y agregamos la nueva imagen 
    const container = document.getElementById('emojiContainer'); 
    container.innerHTML = ''; 
    container.appendChild(img);
}