const products = {
  oily: {
    acne: [
      {
        name: "Salicylic Acid Cleanser",
        description: "Deep cleans pores and controls oil.",
        img: "https://images.unsplash.com/photo-1588776814546-7d2fc20bb5ae?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/salicylic-cleanser"
      },
      {
        name: "Oil-Free Moisturizer",
        description: "Hydrates skin without clogging pores.",
        img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/oil-free-moisturizer"
      },
      {
        name: "Clay Mask",
        description: "Draws out impurities and reduces shine.",
        img: "https://images.unsplash.com/photo-1590080877777-f5e420433349?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/clay-mask"
      }
    ],
    aging: [
      {
        name: "Retinol Serum",
        description: "Helps reduce fine lines and wrinkles.",
        img: "https://images.unsplash.com/photo-1590080877777-f5e420433349?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/retinol-serum"
      },
      {
        name: "Lightweight Sunscreen SPF 50",
        description: "Protects skin from aging UV rays.",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/sunscreen"
      }
    ],
    dark_spots: [
      {
        name: "Vitamin C Serum",
        description: "Brightens skin and fades dark spots.",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/vitamin-c-serum"
      }
    ],
    redness: [
      {
        name: "Niacinamide Serum",
        description: "Reduces redness and soothes skin.",
        img: "https://images.unsplash.com/photo-1518991791750-d7b785f7f25f?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/niacinamide-serum"
      }
    ],
    dryness: [
      {
        name: "Hydrating Gel Cream",
        description: "Provides lightweight moisture for oily skin.",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/hydrating-gel-cream"
      }
    ],
    dullness: [
      {
        name: "Exfoliating Toner",
        description: "Removes dead skin cells for radiant glow.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/exfoliating-toner"
      }
    ]
  },
  dry: {
    acne: [
      {
        name: "Gentle Cleanser",
        description: "Cleans without stripping moisture.",
        img: "https://images.unsplash.com/photo-1562158077-955a98ccf7a2?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/gentle-cleanser"
      }
    ],
    aging: [
      {
        name: "Hydrating Hyaluronic Acid Serum",
        description: "Boosts moisture and plumps skin.",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/hyaluronic-serum"
      },
      {
        name: "Rich Moisturizing Cream",
        description: "Provides deep hydration for dry skin.",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/moisturizing-cream"
      }
    ],
    dark_spots: [
      {
        name: "Brightening Cream",
        description: "Helps fade dark spots gently.",
        img: "https://images.unsplash.com/photo-1514539079130-25950c84fdfb?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/brightening-cream"
      }
    ],
    redness: [
      {
        name: "Calming Moisturizer",
        description: "Reduces redness and nourishes skin.",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/calming-moisturizer"
      }
    ],
    dryness: [
      {
        name: "Ultra Hydrating Serum",
        description: "Intense hydration for very dry skin.",
        img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/ultra-hydrating-serum"
      }
    ],
    dullness: [
      {
        name: "Glow-Boosting Oil",
        description: "Adds radiance and softness to dry skin.",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/glow-boosting-oil"
      }
    ]
  },
  combination: {
    acne: [
      {
        name: "Balancing Cleanser",
        description: "Targets oily zones, hydrates dry areas.",
        img: "https://images.unsplash.com/photo-1556228724-9b1a0ed8f6f7?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/balancing-cleanser"
      }
    ],
    aging: [
      {
        name: "Lightweight Anti-aging Serum",
        description: "Smooths wrinkles without heaviness.",
        img: "https://images.unsplash.com/photo-1590080877777-f5e420433349?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/lightweight-antiaging-serum"
      }
    ],
    dark_spots: [
      {
        name: "Spot Corrector",
        description: "Targets discoloration on combination skin.",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/spot-corrector"
      }
    ],
    redness: [
      {
        name: "Soothing Toner",
        description: "Calms skin while balancing oils.",
        img: "https://images.unsplash.com/photo-1518991791750-d7b785f7f25f?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/soothing-toner"
      }
    ],
    dryness: [
      {
        name: "Hydrating Serum",
        description: "Nourishes dry patches effectively.",
        img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/hydrating-serum"
      }
    ],
    dullness: [
      {
        name: "Radiance Serum",
        description: "Brightens dull areas with antioxidants.",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/radiance-serum"
      }
    ]
  },
  sensitive: {
    acne: [
      {
        name: "Gentle Acne Cleanser",
        description: "Mild formula for sensitive skin acne.",
        img: "https://images.unsplash.com/photo-1562158077-955a98ccf7a2?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/gentle-acne-cleanser"
      }
    ],
    aging: [
      {
        name: "Soothing Anti-aging Serum",
        description: "Reduces fine lines with calming ingredients.",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/soothing-antiaging-serum"
      }
    ],
    dark_spots: [
      {
        name: "Sensitive Skin Brightener",
        description: "Lightens dark spots without irritation.",
        img: "https://images.unsplash.com/photo-1514539079130-25950c84fdfb?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/sensitive-brightener"
      }
    ],
    redness: [
      {
        name: "Anti-Redness Cream",
        description: "Calms redness and strengthens skin barrier.",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/anti-redness-cream"
      }
    ],
    dryness: [
      {
        name: "Ultra Gentle Moisturizer",
        description: "Hydrates without causing irritation.",
        img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/ultra-gentle-moisturizer"
      }
    ],
    dullness: [
      {
        name: "Calming Radiance Serum",
        description: "Boosts glow with soothing botanicals.",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/calming-radiance-serum"
      }
    ]
  },
  normal: {
    acne: [
      {
        name: "Balanced Acne Treatment",
        description: "Effective yet gentle on normal skin.",
        img: "https://images.unsplash.com/photo-1562158077-955a98ccf7a2?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/balanced-acne-treatment"
      }
    ],
    aging: [
      {
        name: "Anti-aging Moisturizer",
        description: "Maintains skin elasticity and hydration.",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/antiaging-moisturizer"
      }
    ],
    dark_spots: [
      {
        name: "Dark Spot Corrector",
        description: "Improves uneven skin tone effectively.",
        img: "https://images.unsplash.com/photo-1514539079130-25950c84fdfb?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/dark-spot-corrector"
      }
    ],
    redness: [
      {
        name: "Redness Relief Serum",
        description: "Soothes and calms normal skin.",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/redness-relief-serum"
      }
    ],
    dryness: [
      {
        name: "Daily Hydration Serum",
        description: "Keeps normal skin hydrated all day.",
        img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/daily-hydration-serum"
      }
    ],
    dullness: [
      {
        name: "Glow Enhancing Serum",
        description: "Boosts radiance and maintains glow.",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=80&q=80",
        link: "https://example.com/glow-enhancing-serum"
      }
    ]
  }
};

const skinTypeSelect = document.getElementById('skinType');
const concernSelect = document.getElementById('concern');
const recommendBtn = document.getElementById('recommendBtn');
const clearBtn = document.getElementById('clearBtn');
const routineDiv = document.getElementById('routine');
const productsDiv = document.getElementById('products');

recommendBtn.addEventListener('click', () => {
  const skinType = skinTypeSelect.value;
  const selectedConcerns = [...concernSelect.selectedOptions].map(opt => opt.value);

  // Validation
  if (!skinType) {
    alert("Please select a skin type.");
    return;
  }
  if (selectedConcerns.length === 0) {
    alert("Please select at least one skin concern.");
    return;
  }

  // Clear previous results
  productsDiv.innerHTML = '';

  // Collect unique products from all selected concerns
  const recommendedProducts = new Map();

  selectedConcerns.forEach(concern => {
    const prods = products[skinType][concern];
    if (prods) {
      prods.forEach(product => {
        if (!recommendedProducts.has(product.name)) {
          recommendedProducts.set(product.name, product);
        }
      });
    }
  });

  if (recommendedProducts.size === 0) {
    productsDiv.innerHTML = "<p>No recommendations found for the selected combination.</p>";
  } else {
    recommendedProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <div>
          <h4>${product.name}</h4>
          <p>${product.description}</p>
        </div>
        <a href="${product.link}" target="_blank" rel="noopener noreferrer">Buy Now</a>
      `;

      productsDiv.appendChild(productCard);
    });
  }

  routineDiv.style.display = 'block';
});

// Clear button resets everything
clearBtn.addEventListener('click', () => {
  skinTypeSelect.value = '';
  [...concernSelect.options].forEach(option => option.selected = false);
  productsDiv.innerHTML = '';
  routineDiv.style.display = 'none';
});
