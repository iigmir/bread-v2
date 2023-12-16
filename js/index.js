const map = L.map("map-bg").setView([51.4985, -0.007], 13);

// Layer
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`
}).addTo(map);
L.marker([51.498, -0.01]).addTo(map);
// .bindPopup("Our site!").openPopup();

// Form
const contact_form = document.getElementById("contact-form");
contact_form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const form_data = new FormData(ev.target);
    console.log(form_data);
});
