// Funktion til at åbne dialog med animation
function openDialog(id) {
    const dialog = document.getElementById(id);
    
    // Fjern evt. tidligere lukkeklasse
    dialog.classList.remove('closing');
    
    // Åbn dialog
    dialog.showModal();
    
    // Scroll til toppen af dialogen
    dialog.scrollTop = 0;
    
    // Sæt fokus på dialogen
    dialog.focus();
}

// Funktion til at lukke dialog med animation
function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    
    // Tilføj klasse for lukkeanimation
    dialog.classList.add('closing');
    
    // Vent til animationen er færdig før lukning
    setTimeout(() => {
        dialog.close();
        dialog.classList.remove('closing');
    }, 300); // 300ms = animationens varighed
}

// Eksisterende kode for info-boxes
document.addEventListener('DOMContentLoaded', function() {
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        const header = item.querySelector('.info-header');
        const btn = item.querySelector('.toggle-btn'); 
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Luk alle andre
            infoItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.toggle-btn').textContent = '+'; 
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            btn.textContent = item.classList.contains('active') ? '-' : '+';
        });
    });
});