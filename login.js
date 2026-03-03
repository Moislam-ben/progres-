<script>
  // Run after the page loads
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const authKeyInput = document.getElementById("authkey");
    const rememberCheckbox = document.querySelector("input[name='remember']");

    // Load saved username if "remember me" was checked before
    if (localStorage.getItem("savedUsername")) {
      usernameInput.value = localStorage.getItem("savedUsername");
      rememberCheckbox.checked = true;
    }

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent actual submission for demo

      // Basic validation
      if (!usernameInput.value || !passwordInput.value || !authKeyInput.value) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      // Handle "remember me"
      if (rememberCheckbox.checked) {
        localStorage.setItem("savedUsername", usernameInput.value);
      } else {
        localStorage.removeItem("savedUsername");
      }

      // Simulate login success
      alert("Connexion réussie pour " + usernameInput.value);
    });
  });
</script>
