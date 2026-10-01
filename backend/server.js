app.post('/api/seed', async (req, res) => {
  try {
    await Product.deleteMany({});
    await Rate.deleteMany({});

    // Kalimati-style Daily Market Rates
    await Rate.insertMany([
      // Vegetables
      { produceItem: 'Tomato Big (Nepali)', category: 'Vegetable', marketPrice: 110, eKishanPrice: 85, unit: 'kg' },
      { produceItem: 'Tomato Small (Local)', category: 'Vegetable', marketPrice: 70, eKishanPrice: 50, unit: 'kg' },
      { produceItem: 'Potato Red', category: 'Vegetable', marketPrice: 65, eKishanPrice: 52, unit: 'kg' },
      { produceItem: 'Onion Dry', category: 'Vegetable', marketPrice: 90, eKishanPrice: 75, unit: 'kg' },
      { produceItem: 'Cauliflower Local', category: 'Vegetable', marketPrice: 95, eKishanPrice: 70, unit: 'kg' },
      { produceItem: 'Cabbage', category: 'Vegetable', marketPrice: 60, eKishanPrice: 45, unit: 'kg' },
      { produceItem: 'Brinjal Long', category: 'Vegetable', marketPrice: 55, eKishanPrice: 40, unit: 'kg' },
      { produceItem: 'Bitter Gourd (Tite Karela)', category: 'Vegetable', marketPrice: 85, eKishanPrice: 65, unit: 'kg' },
      { produceItem: 'Pointed Gourd (Parwal)', category: 'Vegetable', marketPrice: 75, eKishanPrice: 58, unit: 'kg' },
      { produceItem: 'Radish White', category: 'Vegetable', marketPrice: 50, eKishanPrice: 38, unit: 'kg' },
      { produceItem: 'Spinach (Palungo)', category: 'Vegetable', marketPrice: 120, eKishanPrice: 90, unit: 'kg' },
      { produceItem: 'Mushroom (Kanya)', category: 'Vegetable', marketPrice: 220, eKishanPrice: 180, unit: 'kg' },

      // Fruits
      { produceItem: 'Apple (Mustang)', category: 'Fruit', marketPrice: 280, eKishanPrice: 210, unit: 'kg' },
      { produceItem: 'Banana (Local)', category: 'Fruit', marketPrice: 140, eKishanPrice: 110, unit: 'doz' },
      { produceItem: 'Pomegranate (Anar)', category: 'Fruit', marketPrice: 350, eKishanPrice: 290, unit: 'kg' },
      { produceItem: 'Sweet Orange (Suntala)', category: 'Fruit', marketPrice: 180, eKishanPrice: 135, unit: 'kg' },
      { produceItem: 'Papaya', category: 'Fruit', marketPrice: 110, eKishanPrice: 85, unit: 'kg' },

      // Spices & Agricultural Goods
      { produceItem: 'Ginger (Aduwa)', category: 'Spice', marketPrice: 160, eKishanPrice: 125, unit: 'kg' },
      { produceItem: 'Garlic Dry (Nepali)', category: 'Spice', marketPrice: 260, eKishanPrice: 200, unit: 'kg' },
      { produceItem: 'Green Chilli', category: 'Spice', marketPrice: 110, eKishanPrice: 80, unit: 'kg' },
      { produceItem: 'Wild Himalayan Honey', category: 'Goods', marketPrice: 1200, eKishanPrice: 850, unit: 'ltr' },
      { produceItem: 'Organic Yak Chhurpi/Cheese', category: 'Dairy', marketPrice: 1400, eKishanPrice: 1050, unit: 'kg' }
    ]);

    // Available Farm Products for Purchase
    await Product.insertMany([
      { 
        name: 'Fresh Organic Red Tomatoes', 
        category: 'Vegetables', 
        price: 85, 
        unit: 'kg', 
        farmerName: 'Ramesh Tamang', 
        location: 'Dhading', 
        badge: 'Organic', 
        imageUrl: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Mustang Crisp Apples', 
        category: 'Fruits', 
        price: 210, 
        unit: 'kg', 
        farmerName: 'Karma Gurung', 
        location: 'Mustang', 
        badge: 'Seasonal', 
        imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Wild Himalayan Pure Honey', 
        category: 'Goods', 
        price: 850, 
        unit: 'ltr', 
        farmerName: 'Dev Kumar', 
        location: 'Illam', 
        badge: 'Pure & Natural', 
        imageUrl: 'https://images.unsplash.com/photo-1568584711270-dcae6f3af3ef?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Hilly Organic Yak Cheese / Chhurpi', 
        category: 'Dairy', 
        price: 1050, 
        unit: 'kg', 
        farmerName: 'Pasang Sherpa', 
        location: 'Rasuwa', 
        badge: 'Artisan Dairy', 
        imageUrl: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Fresh Farm Cauliflower', 
        category: 'Vegetables', 
        price: 70, 
        unit: 'kg', 
        farmerName: 'Sita Dahal', 
        location: 'Kavre', 
        badge: 'Farm Fresh', 
        imageUrl: 'https://images.unsplash.com/photo-1568584711270-dcae6f3af3ef?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Organic Palungo (Spinach)', 
        category: 'Vegetables', 
        price: 90, 
        unit: 'kg', 
        farmerName: 'Bishnu Thapa', 
        location: 'Bhaktapur', 
        badge: 'Pesticide Free', 
        imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Fresh Kanya Mushrooms', 
        category: 'Vegetables', 
        price: 180, 
        unit: 'kg', 
        farmerName: 'Hari Prasad', 
        location: 'Chitwan', 
        badge: 'High Quality', 
        imageUrl: 'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Organic Red Potatoes', 
        category: 'Vegetables', 
        price: 52, 
        unit: 'kg', 
        farmerName: 'Ganesh Shrestha', 
        location: 'Patan', 
        badge: 'Staple', 
        imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Fresh Organic Ginger (Aduwa)', 
        category: 'Spices', 
        price: 125, 
        unit: 'kg', 
        farmerName: 'Manju Rai', 
        location: 'Palpa', 
        badge: 'Export Quality', 
        imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Local Organic Bananas', 
        category: 'Fruits', 
        price: 110, 
        unit: 'doz', 
        farmerName: 'Sunil Chaudhary', 
        location: 'Nawalparasi', 
        badge: 'Naturally Ripened', 
        imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Sweet Juicy Oranges (Suntala)', 
        category: 'Fruits', 
        price: 135, 
        unit: 'kg', 
        farmerName: 'Deepak Hamal', 
        location: 'Syangja', 
        badge: 'Seasonal Special', 
        imageUrl: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=600' 
      },
      { 
        name: 'Fresh Green Chillies', 
        category: 'Spices', 
        price: 80, 
        unit: 'kg', 
        farmerName: 'Kiran Maharjan', 
        location: 'Kirtipur', 
        badge: 'Spicy', 
        imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=600' 
      }
    ]);

    res.status(200).json({ message: 'Kalimati-style database seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Seeding failed' });
  }
});