document.addEventListener('DOMContentLoaded', () => {
  const skinTypeSelect = document.getElementById('skinType');
  const concernSelect = document.getElementById('concern');
  const recommendBtn = document.getElementById('recommendBtn');
  const clearBtn = document.getElementById('clearBtn');
  const routineBox = document.getElementById('routine');
  const productsDiv = document.getElementById('products');

  const recommendations = {
    oily: {
      use: ['Oil-free cleanser', 'Lightweight moisturizer', 'Salicylic acid products'],
      avoid: ['Heavy creams', 'Alcohol-based toners'],
      natural: ['Aloe vera gel', 'Green tea extract']
    },
    dry: {
      use: ['Hydrating cleanser', 'Rich moisturizer', 'Hyaluronic acid serums'],
      avoid: ['Harsh soaps', 'Alcohol-based products'],
      natural: ['Honey', 'Avocado mask']
    },
    combination: {
      use: ['Gentle cleanser', 'Balanced moisturizer', 'Niacinamide products'],
      avoid: ['Heavy oils', 'Over-exfoliation'],
      natural: ['Cucumber slices', 'Oatmeal mask']
    },
    sensitive: {
      use: ['Fragrance-free cleanser', 'Calming moisturizer', 'Ceramide creams'],
      avoid: ['Fragranced products', 'Alcohol and harsh chemicals'],
      natural: ['Chamomile tea compress', 'Oatmeal baths']
    },
    normal: {
      use: ['Mild cleanser', 'Light moisturizer', 'Sunscreen'],
      avoid: ['Over-cleansing', 'Harsh scrubs'],
      natural: ['Rose water', 'Cucumber toner']
    }
  };

  const concernsInfo = {
    acne: {
      use: ['Salicylic acid', 'Benzoyl peroxide', 'Non-comedogenic moisturizer'],
      avoid: ['Heavy makeup', 'Oil-based products'],
      natural: ['Tea tree oil', 'Honey mask']
    },
    aging: {
      use: ['Retinol', 'Vitamin C serum', 'Moisturizers with peptides'],
      avoid: ['Excess sun exposure', 'Smoking'],
      natural: ['Aloe vera', 'Green tea']
    },
    dark_spots: {
      use: ['Vitamin C', 'Niacinamide', 'Sunscreen'],
      avoid: ['Harsh exfoliants', 'Direct sun without protection'],
      natural: ['Lemon juice (spot test first)', 'Turmeric mask']
    },
    redness: {
      use: ['Anti-inflammatory creams', 'Aloe vera gel'],
      avoid: ['Hot water', 'Harsh soaps'],
      natural: ['Chamomile compress', 'Cucumber slices']
    },
    dryness: {
      use: ['Hydrating serums', 'Emollient creams'],
      avoid: ['Harsh soaps', 'Long hot showers'],
      natural: ['Honey', 'Olive oil']
    },
    dullness: {
      use: ['Vitamin C', 'Exfoliating acids (gentle)'],
      avoid: ['Lack of sleep', 'Smoking'],
      natural: ['Papaya mask', 'Lemon and sugar scrub']
    }
  };

  function createList(title, items, color) {
    if (!items || items.length === 0) return '';
    const colorClass = {
      use: 'color-use',
      avoid: 'color-avoid',
      natural: 'color-natural'
    }[color] || '';

    const ul = document.createElement('ul');
    ul.classList.add(colorClass);
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });

    const container = document.createElement('div');
    const heading = document.createElement('h3');
    heading.textContent = title;
    container.appendChild(heading);
    container.appendChild(ul);

    container.classList.add('fadeIn');

    return container;
  }

  recommendBtn.addEventListener('click', () => {
    const skinType = skinTypeSelect.value;
    const selectedConcerns = Array.from(concernSelect.selectedOptions).map(opt => opt.value);

    if (!skinType) {
      alert('Please select your skin type.');
      return;
    }
    if (selectedConcerns.length === 0) {
      alert('Please select at least one skin concern.');
      return;
    }

    productsDiv.innerHTML = ''; // Clear previous output

    // Show skin type recommendations
    const skinRec = recommendations[skinType];
    productsDiv.appendChild(createList('Recommended for your skin type', skinRec.use, 'use'));
    productsDiv.appendChild(createList('Things to Avoid', skinRec.avoid, 'avoid'));
    productsDiv.appendChild(createList('Natural Remedies', skinRec.natural, 'natural'));

    // Show concern recommendations
    selectedConcerns.forEach(concern => {
      const concernRec = concernsInfo[concern];
      if (concernRec) {
        productsDiv.appendChild(createList(`For concern: ${concern.replace('_', ' ')}`, concernRec.use, 'use'));
        productsDiv.appendChild(createList('Things to Avoid', concernRec.avoid, 'avoid'));
        productsDiv.appendChild(createList('Natural Remedies', concernRec.natural, 'natural'));
      }
    });

    routineBox.style.display = 'block';
    routineBox.scrollIntoView({ behavior: 'smooth' });
  });

  clearBtn.addEventListener('click', () => {
    skinTypeSelect.value = '';
    Array.from(concernSelect.options).forEach(option => option.selected = false);
    productsDiv.innerHTML = '';
    routineBox.style.display = 'none';
  });
});
