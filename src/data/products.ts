export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  description: string;
  specifications: Record<string, string>;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: 'helmets', name: 'Helmets', icon: '🪖', productCount: 24 },
  { id: 'lights', name: 'Lights', icon: '💡', productCount: 18 },
  { id: 'gloves', name: 'Gloves', icon: '🧤', productCount: 15 },
  { id: 'tools', name: 'Tools', icon: '🔧', productCount: 32 },
  { id: 'spare-parts', name: 'Spare Parts', icon: '⚙️', productCount: 45 },
  { id: 'bags', name: 'Bags', icon: '🎒', productCount: 12 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Aero Pro Carbon Helmet',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1557803175-2f8c4c0c5f0a?w=800',
    category: 'helmets',
    brand: 'VeloTech',
    rating: 4.8,
    reviews: 124,
    description: 'Ultra-lightweight carbon fiber helmet with advanced aerodynamics and MIPS technology for maximum protection.',
    specifications: {
      'Weight': '245g',
      'Material': 'Carbon Fiber',
      'Ventilation': '18 vents',
      'Safety': 'MIPS Technology',
      'Sizes': 'S, M, L, XL'
    },
    inStock: true,
    isBestseller: true
  },
  {
    id: '2',
    name: 'NightRider Pro 1200',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    category: 'lights',
    brand: 'LumiCycle',
    rating: 4.9,
    reviews: 89,
    description: '1200 lumen front light with smart beam technology and 8-hour battery life.',
    specifications: {
      'Lumens': '1200',
      'Battery': '8 hours',
      'Modes': '5 lighting modes',
      'Waterproof': 'IPX6',
      'Mount': 'Quick release'
    },
    inStock: true,
    isNew: true
  },
  {
    id: '3',
    name: 'GripMaster Pro Gloves',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800',
    category: 'gloves',
    brand: 'RidePro',
    rating: 4.7,
    reviews: 156,
    description: 'Premium cycling gloves with gel padding and touchscreen-compatible fingertips.',
    specifications: {
      'Material': 'Synthetic leather',
      'Padding': '4mm gel',
      'Touchscreen': 'Yes',
      'Breathable': 'Mesh back',
      'Sizes': 'XS-XXL'
    },
    inStock: true,
    isBestseller: true
  },
  {
    id: '4',
    name: 'Multi-Tool Pro 19',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    category: 'tools',
    brand: 'CycleFix',
    rating: 4.6,
    reviews: 203,
    description: 'Compact 19-function multi-tool with chain breaker and tire levers.',
    specifications: {
      'Functions': '19',
      'Weight': '175g',
      'Material': 'Chrome Vanadium Steel',
      'Chain Breaker': 'Included',
      'Warranty': '10 years'
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Carbon Fiber Bottle Cage',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800',
    category: 'spare-parts',
    brand: 'VeloTech',
    rating: 4.5,
    reviews: 78,
    description: 'Ultra-lightweight carbon fiber bottle cage with secure grip.',
    specifications: {
      'Weight': '18g',
      'Material': 'Carbon Fiber',
      'Compatibility': 'Standard bottles',
      'Color': 'Matte Black',
      'Mounting': 'Standard bolts'
    },
    inStock: true
  },
  {
    id: '6',
    name: 'Waterproof Saddle Bag',
    price: 49.99,
    originalPrice: 64.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    category: 'bags',
    brand: 'RidePro',
    rating: 4.8,
    reviews: 112,
    description: 'Roll-top waterproof saddle bag with 1.5L capacity.',
    specifications: {
      'Capacity': '1.5L',
      'Waterproof': 'IPX7',
      'Material': 'TPU coated nylon',
      'Mount': 'Velcro straps',
      'Reflective': 'Yes'
    },
    inStock: true,
    isNew: true
  },
  {
    id: '7',
    name: 'Urban Commuter Helmet',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1557803175-2f8c4c0c5f0a?w=800',
    category: 'helmets',
    brand: 'CityRide',
    rating: 4.6,
    reviews: 67,
    description: 'Stylish urban helmet with integrated LED lights and removable visor.',
    specifications: {
      'Weight': '310g',
      'Material': 'In-mold polycarbonate',
      'LED': 'Integrated rear light',
      'Visor': 'Removable',
      'Sizes': 'M, L'
    },
    inStock: true
  },
  {
    id: '8',
    name: 'Ceramic Brake Pads Set',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800',
    category: 'spare-parts',
    brand: 'StopTech',
    rating: 4.7,
    reviews: 189,
    description: 'High-performance ceramic brake pads for disc brakes.',
    specifications: {
      'Type': 'Ceramic compound',
      'Compatibility': 'Shimano/SRAM',
      'Weather': 'All conditions',
      'Noise': 'Low noise',
      'Set': '2 pairs'
    },
    inStock: true,
    isBestseller: true
  }
];
