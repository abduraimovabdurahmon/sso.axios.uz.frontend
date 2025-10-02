function onTelegramAuth(user) {
    // Show user info in a more elegant way
    const userInfo = `Siz muvaffaqiyatli kirdingiz!\n\nIsm: ${user.first_name}\nFamiliya: ${user.last_name || 'Mavjud emas'}\nID: ${user.id}\nUsername: ${user.username ? '@' + user.username : 'Mavjud emas'}`;

    // Create a modal for showing user info
    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    modalContent.innerHTML = `
        <h2 class="modal-title">Tabriklaymiz!</h2>
        <p class="modal-text">${userInfo}</p>
        <button id="close-modal" class="modal-button">Yopish</button>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Close modal functionality
    document.getElementById('close-modal').addEventListener('click', function() {
        document.body.removeChild(modal);
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}