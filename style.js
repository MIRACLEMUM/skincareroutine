// Show main app and hide welcome screen after animation ends
window.addEventListener('DOMContentLoaded', () => {
  const welcome = document.getElementById('welcomeScreen');
  const app = document.getElementById('appContainer');

  welcome.addEventListener('animationend', () => {
    welcome.style.display = 'none';
    app.classList.add('visible');
  });
});

// Skincare routine data for demo
const routines = {
  oily: {
    use: ["Gentle foaming cleanser", "Oil-free moisturizer", "Clay mask weekly"],
    avoid: ["Heavy creams", "Oily makeup", "Excessive scrubbing"],
    natural: ["Green tea toner", "Aloe vera gel"]
  },
  dry: {
    use: ["Hydrating cleanser", "Rich moisturizer", "Hyaluronic acid serum"],
    avoid: ["Harsh soaps", "Alcohol-based products", "Hot water"],
    natural: ["Honey mask", "Avocado oil"]
  },
  combination: {
    use: ["Balanced cleanser", "Light moisturizer", "Exfoliate 1-2 times a week"],
    avoid: ["Heavy oils", "Skipping moisturizer"],
    natural: ["Cucumber slices", "Oatmeal mask"]
  },
  sensitive: {
    use: ["Fragrance-free cleanser", "Calming moisturizer", "Avoid exfoliants"],
    avoid: ["Fragrances", "Alcohol", "Harsh scrubs"],
    natural: ["Chamomile tea compress", "Aloe vera"]
  },
  normal: {
    use: ["Gentle cleanser", "Light moisturizer", "Sunscreen daily"],
    avoid: ["Overwashing", "Harsh products"],
    natural: ["Rose water toner", "Coconut oil"]
  }
};

document.getElementById('recommendBtn').addEventListener('click', () => {
  const skinType = document.getElementById('skinType').value;
  const concernsSelect = document.getElementById('concern');
  const selectedConcerns = Array.from(concernsSelect.selectedOptions).map(o => o.value);
  const routineDiv = document.getElementById('routine');
  const productsDiv = document.getElementById('products');

  if (!skinType) {
    alert("Please select your skin type.");
    return;
  }

  // Basic routine build based on skin type
  const routine = routines[skinType];
  if (!routine) {
    productsDiv.innerHTML = "<p>No routine found for selected skin type.</p>";
    routineDiv.style.display = "block";
    return;
  }

  let html = `<h3>Recommended Products to Use:</h3><ul>`;
  routine.use.forEach(item => {
    html += `<li>✔️ ${item}</li>`;
  });
  html += `</ul>`;

  html += `<h3>Products to Avoid:</h3><ul>`;
  routine.avoid.forEach(item => {
    html += `<li>❌ ${item}</li>`;
  });
  html += `</ul>`;

  if (routine.natural && routine.natural.length) {
    html += `<h3>Natural Suggestions:</h3><ul>`;
    routine.natural.forEach(item => {
      html += `<li>🌿 ${item}</li>`;
    });
    html += `</ul>`;
  }

  // Add concerns (optional, simple info)
  if (selectedConcerns.length > 0) {
    html += `<h3>Tips for Your Concerns:</h3><ul>`;
    selectedConcerns.forEach(concern => {
      switch(concern) {
        case "acne":
          html += `<li>For acne: Use salicylic acid products and avoid heavy makeup.</li>`;
          break;
        case "aging":
          html += `<li>For aging: Incorporate retinol and antioxidants.</li>`;
          break;
        case "dark_spots":
          html += `<li>For dark spots: Use vitamin C serums and sunscreen daily.</li>`;
          break;
        case "redness":
          html += `<li>For redness: Use calming ingredients like chamomile and avoid irritants.</li>`;
          break;
        case "dryness":
          html += `<li>For dryness: Use rich moisturizers and avoid harsh cleansers.</li>`;
          break;
        case "dullness":
          html += `<li>For dullness: Exfoliate gently and use brightening serums.</li>`;
          break;
      }
    });
    html += `</ul>`;
  }

  productsDiv.innerHTML = html;
  routineDiv.style.display = "block";
});

document.getElementById('clearBtn').addEventListener('click', () => {
  document.getElementById('skinType').value = "";
  const concernsSelect = document.getElementById('concern');
  Array.from(concernsSelect.options).forEach(opt => opt.selected = false);
  document.getElementById('routine').style.display = "none";
  document.getElementById('products').innerHTML = "";
});
