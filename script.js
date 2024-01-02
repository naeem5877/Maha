function revealMessage() {
    var message = document.getElementById("message");
    message.style.display = "block"; // Show the revealed message
    var revealButton = document.getElementById("revealMessageBtn");
    revealButton.style.display = "none"; // Hide the "Click to Reveal" button
}

function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";
}

function acceptProposal() {
    var acceptPopup = document.getElementById("accept-popup");
    acceptPopup.style.display = "flex";
}

function rejectProposal() {
    var rejectPopup = document.getElementById("reject-popup");
    rejectPopup.style.display = "flex";
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}

function openChat() {
    // Replace 'YOUR_CHAT_LINK' with the actual link you want to redirect to
    var chatLink = 'https://www.facebook.com/profile.php?id=100094258772260';

    // Open the chat link in a new tab/window
    window.open(chatLink, '_blank');

    // If you want to redirect the current window instead of opening a new tab, use the following line:
    // window.location.href = chatLink;
}
