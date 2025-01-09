function sendWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const room = document.getElementById('room').value;
    const date = document.getElementById('date').value;
  
    const phoneNumber = '+51987654321';
    const message = `Hola, me gustaría reservar una habitación.\n\nNombre: ${name}\nTipo de habitación: ${room}\nFecha: ${date}`;
  
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}