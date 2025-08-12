const form = document.getElementById('comment-form');
const input = document.getElementById('comment-input');
const commentsContainer = document.getElementById('comments-container');

function submitComment(e) {
    e.preventDefault();
    
    // Obtener y limpiar el texto del comentario
    const commentText = input.value.trim();
    // para evitar agregar comentarios vacios
    if (commentText === "") return;

    // Creando un nuevo elemento para el comentario
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    // Obtener fecha y hora actual    
    const now = new Date();
    const timestamp = now.toLocaleString(); 

    // Contenido del comentario con fecha y botón para eliminar
    commentDiv.innerHTML = `<p>${commentText}</p>
        <small>${timestamp}</small>
        <button class="delete-btn">Eliminar</button>`;

    // Evento para eliminar el comentario
    commentDiv.querySelector('.delete-btn').addEventListener('click', () => {
        commentDiv.remove();
    });

    // Agregar el comentario y limpiar el texto para un nuevo comentario
    commentsContainer.appendChild(commentDiv);
    input.value = "";
}

form.addEventListener('submit', submitComment);
