document.getElementById('btnRegistro').addEventListener('click', function() {
    showForm('registroForm');
});

document.getElementById('btnNotas').addEventListener('click', function() {
    showForm('notasForm');
});

document.getElementById('btnMateria').addEventListener('click', function() {
    showForm('materiaForm');
});

function showForm(formId) {
    var forms = document.querySelectorAll('.formulario');
    forms.forEach(function(form) {
        if (form.id === formId) {
            form.classList.remove('oculto');
        } else {
            form.classList.add('oculto');
        }
    });
}
