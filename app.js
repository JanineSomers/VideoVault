// app.js

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(reg => console.log("Service Worker registered:", reg.scope))
      .catch(err => console.error("Service Worker registration failed:", err));
  });
}
// app.js

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(reg => console.log("Service Worker registered:", reg.scope))
      .catch(err => console.error("Service Worker registration failed:", err));
  });
}

// Upload form handler (runs only if on upload.html)
const form = document.getElementById("uploadForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("fileInput");
    if (fileInput.files.length > 0) {
      alert(
        "File selected: " +
        fileInput.files[0].name +
        "\n(Upload handling not implemented yet)"
      );
    } else {
      alert("Please select a file before uploading.");
    }
  });
}
