function volume_sphere() {
  // Get radius value
  const radius = document.getElementById("radius").value;

  // Calculate volume
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display result (rounded to 4 decimals)
  document.getElementById("volume").value = volume.toFixed(4);

  // Prevent form submission
  return false;
}

window.onload = function () {
  document.getElementById("MyForm").onsubmit = volume_sphere;
};
