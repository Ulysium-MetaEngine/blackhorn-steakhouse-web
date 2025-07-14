import { useState } from 'react';
import { ChefHat, Wine, Coffee, Truck, Users } from 'lucide-react';

export default function Menus() {
  const [activeMenu, setActiveMenu] = useState('menu');

  const mainMenus = [
    { id: 'menu', label: 'Dinner Menu', icon: <ChefHat className="w-5 h-5" /> },
    { id: 'wine', label: 'Wine List', icon: <Wine className="w-5 h-5" /> },
    { id: 'coffee', label: 'Coffee & Desserts', icon: <Coffee className="w-5 h-5" /> },
    { id: 'catering', label: 'Catering', icon: <Users className="w-5 h-5" /> },
    { id: 'delivery', label: 'Delivery', icon: <Truck className="w-5 h-5" /> },
  ];


    const menuData = {
      menu: {
    'Starters': [
      { name: 'Blackhorn Garlic Bread', description: 'Toasted bread with Swiss Cheese, Garlic Butter and Spices', price: '$6.95' },
      { name: 'Blackhorn Garlic Bread with Extra Cheese', description: '', price: '$7.95' },
      { name: 'Bruschetta', description: 'Bread topped with basil marinated tomatoes in extra virgin olive oil and parmesan cheese', price: '$6.95' },
      { name: 'Greek Bruschetta', description: 'Toasted bread with oregano, marinated tomatoes and feta cheese', price: '$7.95' },
      { name: 'Bruschetta on Rye Bread', description: 'Toasted rye bread with basil marinated tomatoes and parmesan', price: '$8.95' },
      { name: 'Mix of Garlic Bread & Bruschetta', description: '', price: '$7.95' },
      { name: 'Pita Bread', description: '', price: '$1.50' }
    ],
    'Appetizers': [
      { name: 'Garden Green Salad', description: 'Mixed greens with choice of dressing', price: '$6.95' },
      { name: 'Small Green Salad', description: '', price: '$4.95' },
      { name: 'Chilled Jumbo Shrimp', description: 'Served with seafood cocktail sauce', price: '$17.95' },
      { name: 'Escargot', description: 'Baked in bread rings and topped with two cheeses', price: '$13.95' },
      { name: 'Soup Du Jour', description: '', price: '$6.95' },
      { name: 'French Onion Soup', description: 'Topped with toasted croutons and melted mozzarella cheese', price: '$7.95' },
      { name: 'Steamed Mussels (when available)', description: 'With tomato and wine in garlic sauce', price: '$12.95' },
      { name: 'Greek Village Salad', description: 'Fresh tomatoes, cucumber, green peppers, onions, feta cheese, olives, and olive oil', price: '$11.95' },
      { name: 'Small Village Salad', description: '', price: '$9.95' },
      { name: 'Feta Cheese', description: 'Topped with extra virgin olive oil and oregano', price: '$3.95' },
      { name: 'Grilled Kalamari', description: 'With Mediterranean sauce', price: '$14.95' },
      { name: 'Kalamari', description: 'Fried squid rings with seafood cocktail sauce', price: '$12.95' },
      { name: 'Norwegian Smoked Salmon', description: 'With tomatoes, onions and capers', price: '$13.95' },
      { name: 'Caesar Salad', description: 'Romaine with Caesar dressing', price: '$9.95' },
      { name: 'Small Caesar', description: '', price: '$7.95' },
      { name: 'Greek Salad', description: 'Lettuce, peppers, onions, olives, feta, house dressing', price: '$9.95' },
      { name: 'Small Greek Salad', description: '', price: '$7.95' },
      { name: 'Authentic Greek Plate', description: 'Feta cheese, olives, oregano, and pita', price: '$8.95' },
      { name: 'Saganaki - Opa', description: 'Flambéed pan-fried cheese', price: '$13.95' },
      { name: 'Saganaki - Shrimps', description: 'Shrimps sautéed in garlic butter and lemon', price: '$17.95' }
    ],
    'From The Broiler': [
      { name: 'Medallions of Beef Tenderloin', description: 'With green peppercorn sauce', price: '$29.95' },
      { name: 'Filet Mignon 6 oz.', description: '', price: '$29.95' },
      { name: 'Filet Mignon 6 oz. with Bacon', description: '', price: '$31.95' },
      { name: 'Filet Mignon 8 oz.', description: '', price: '$33.95' },
      { name: 'Filet Mignon 8 oz. with Bacon', description: '', price: '$35.95' },
      { name: 'Rack of BBQ Back Spareribs', description: '', price: '$26.95' },
      { name: 'Half Rack of Spareribs', description: '', price: '$18.95' },
      { name: 'Charbroiled Lamb Chops', description: 'With vegetables and mint sauce', price: '$32.95' },
      { name: 'Surf “N” Turf (Steak & Lobster)', description: '', price: '$47.95' },
      { name: 'Surf “N” Turf with Filet Mignon', description: '', price: '$51.95' }
    ],
    'Seafood': [
      { name: 'Grilled Atlantic Salmon Fillet', description: 'With lemon wine butter', price: '$24.95' },
      { name: 'Blackened Salmon Fillet', description: '', price: '$25.95' },
      { name: 'Pan Fried Filet of Sole', description: 'With Meuniere or Almandine sauce', price: '$22.95 / $23.95' },
      { name: 'Filet of Sole with Broiled Tiger Shrimps', description: '', price: '$28.95' },
      { name: 'Blackhorn Style Mussels Dinner', description: 'With peppers, onion, mushrooms in tomato wine sauce', price: '$21.95' },
      { name: 'Pan Fried Kalamari Dinner', description: 'With rice and cocktail sauce', price: '$19.95' },
      { name: 'Lobster Tails', description: 'Market Price', price: 'Market Price' },
      { name: 'Broiled Scallops', description: 'With pernod cream sauce and rice', price: 'Market Price' },
      { name: 'Shrimps & Scallops', description: 'With pernod cream sauce and rice', price: '$30.95' },
      { name: 'Grilled Tiger Shrimps Provincial', description: 'With tomato, garlic, olive oil, and wine sauce', price: '$29.95' },
      { name: 'Grilled Kalamari with Mediterranean Sauce', description: 'With vegetables and rice', price: '$23.95' },
      { name: 'Grilled Kalamari with Broiled Tiger Shrimps', description: '', price: '$28.95' },
      { name: 'New York Striploin (8 oz / 10 oz / 12 oz)', description: '', price: '$28.95 / $32.95 / $35.95' },
      { name: 'NY Striploin with Broiled Shrimp', description: '', price: '$32.95' },
      { name: 'Green Peppercorn Steak', description: 'With Madagascar sauce', price: '$30.95' },
      { name: 'Blackened Pepper Steak', description: '', price: '$29.95' },
      { name: 'Steak Neptune', description: 'NY steak topped with crab meat, asparagus, and béarnaise', price: '$31.95' }
    ],
    'A Taste of Greece': [
      { name: 'Chicken Souvlaki', description: 'Marinated and broiled chicken skewers', price: '$19.95' },
      { name: 'Pork Souvlaki', description: 'Marinated and broiled pork skewers', price: '$18.95' }
    ],
    "Pasta": [
  { name: "Fettuccini Alfredo", description: "Fettuccini with creamy Alfredo sauce", price: "$18.95" },
  { name: "Fettuccini Seafood", description: "With real crab meat, salmon, shrimps, and mussels in light tomato or Alfredo sauce", price: "$22.95" },
  { name: "Vegetable Penne", description: "Tube noodles with assorted fresh vegetables in tomato sauce", price: "$18.95" },
  { name: "Blackhorn Penne", description: "In rosé sauce with mushrooms and grilled chicken breast", price: "$22.95" },
  { name: "Tortellini Rosé", description: "Cheese-filled tortellini in light tomato and cream sauce", price: "$18.95" },
  { name: "Fettuccini or Penne Carbonara", description: "With bacon and mushrooms in Alfredo sauce", price: "$20.95" }
],
"Traditional": [
  { name: "Beef Stroganoff", description: "Strips of beef sautéed with peppers, onions, mushrooms in rich sauce over fettuccini", price: "$23.95" },
  { name: "Breaded Schnitzel", description: "Breaded veal sautéed in olive oil and spices, or with mushroom sauce", price: "$23.95" },
  { name: "Grilled Provimi Liver", description: "Grilled with bacon and onion (when available)", price: "$24.95" },
  { name: "Veal Piccata", description: "Veal sautéed in olive oil, white wine & lemon", price: "$24.95" },
  { name: "Veal Marsala", description: "Veal scallopini with mushrooms and Marsala wine sauce", price: "$24.95" },
  { name: "Veal Parmegiana", description: "Breaded veal topped with tomato sauce and mozzarella", price: "$24.95" },
  { name: "Veal Oscar", description: "Topped with crab meat, asparagus and béarnaise sauce", price: "$28.95" }
],
"Chicken": [
  { name: "Chicken Parmegiana", description: "Breaded chicken breast with tomato sauce and two cheeses", price: "$23.95" },
  { name: "Charbroiled Chicken Breast", description: "Boneless marinated breast served with rice and vegetables", price: "$18.95" },
  { name: "Chicken Oscar", description: "Broiled chicken breast topped with crab, asparagus and béarnaise sauce", price: "$27.95" },
  { name: "Chicken Marsala", description: "Chicken breast with mushrooms and Marsala wine over fettuccini", price: "$24.95" }
],
"Accompaniments": [
  { name: "Sautéed Mushroom Caps", description: "", price: "$6.95" },
  { name: "Fresh Asparagus", description: "", price: "$6.95" },
  { name: "Onion Rings", description: "", price: "$4.95" }
]



  },
    wine: {
      "Beer": {
  "Domestic": [
    { name: "Blue", price: "" },
    { name: "Blue Light", price: "" },
    { name: "Molson Canadian", price: "" },
    { name: "Molson Export", price: "" },
    { name: "Molson Dry", price: "" },
    { name: "Coors Light", price: "" },
    { name: "Budweiser", price: "" }
  ],
  "Import": [
    { name: "Corona", price: "" },
    { name: "Stella", price: "" },
    { name: "Heineken", price: "" },
    { name: "Tuborg", price: "" },
    { name: "Guinness", price: "" },
    { name: "Becks", price: "" },
    { name: "Grolsch", price: "" }
  ],
  "Premium": [
    { name: "Rickards Red", price: "" },
    { name: "Sleemans", price: "" },
    { name: "Alexander Keith’s", price: "" },
    { name: "Miller Genuine Draft", price: "" }
  ],
  "Non-Alcoholic": [
    { name: "O’Doul’s", price: "" }
  ]
}

    },
    coffee: {
      "Coffee Selection": [
  { name: "Espresso", price: "$2.95" },
  { name: "Cappuccino", price: "$3.50" },
  { name: "Café Au Lait", price: "$3.50" },
  { name: "Regular Coffee", price: "$2.50" },
  { name: "Organic Coffee", price: "$2.95" },
  { name: "Greek Coffee", price: "$2.95" },
  { name: "Blackhorn Hot Chocolate", price: "$2.50" },
  { name: "Assorted Herbal Teas", price: "$2.95" }
],
      "Specialty Coffees": [
  { name: "Spanish Coffee", description: "Brandy and Kahlua", price: "$6.95" },
  { name: "Irish Coffee", description: "Irish Whiskey", price: "$6.95" },
  { name: "Monte Cristo Coffee", description: "Grand Marnier and Amaretto", price: "$6.95" },
  { name: "The Blackhorn Coffee", description: "Brandy, Frangelico and Anisette", price: "$6.95" },
  { name: "B52 Coffee", description: "Baileys, Kahlua and Grand Marnier", price: "$6.95" }
]

    },
    catering: {
      'Salads': [
        {
          name: 'Caesar Salad',
          description: 'Crisp romaine lettuce with house-made Caesar dressing, croutons, and parmesan',
          sizes: [
            { size: '1/4 Tray', serves: '6-10', price: '$35' },
            { size: '1/2 Tray', serves: '12-15', price: '$65' },
            { size: 'Full Tray', serves: '20-25', price: '$95' },
            { size: 'Double Tray', serves: '40-50', price: '$180' }
          ],
          image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg'
        },
        {
          name: 'Mixed Greens Salad',
          description: 'Fresh mixed greens with cherry tomatoes, cucumbers, and balsamic vinaigrette',
          sizes: [
            { size: '1/4 Tray', serves: '6-10', price: '$30' },
            { size: '1/2 Tray', serves: '12-15', price: '$55' },
            { size: 'Full Tray', serves: '20-25', price: '$85' },
            { size: 'Double Tray', serves: '40-50', price: '$160' }
          ],
          image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg'
        }
      ],
      'Main Courses': {
        'Beef Selection': [
          {
            name: 'Sliced Beef Tenderloin',
            description: 'Premium beef tenderloin sliced and served with mushroom sauce',
            sizes: [
              { size: '1/4 Tray', serves: '6-10', price: '$185' },
              { size: '1/2 Tray', serves: '12-15', price: '$350' },
              { size: 'Full Tray', serves: '20-25', price: '$650' },
              { size: 'Double Tray', serves: '40-50', price: '$1200' }
            ],
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
          },
          {
            name: 'BBQ Beef Brisket',
            description: 'Slow-smoked beef brisket with house BBQ sauce',
            sizes: [
              { size: '1/4 Tray', serves: '6-10', price: '$125' },
              { size: '1/2 Tray', serves: '12-15', price: '$235' },
              { size: 'Full Tray', serves: '20-25', price: '$450' },
              { size: 'Double Tray', serves: '40-50', price: '$850' }
            ],
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
          }
        ],
        'Poultry': [
          {
            name: 'Herb-Roasted Chicken',
            description: 'Free-range chicken with fresh herbs and seasonal vegetables',
            sizes: [
              { size: '1/4 Tray', serves: '6-10', price: '$95' },
              { size: '1/2 Tray', serves: '12-15', price: '$175' },
              { size: 'Full Tray', serves: '20-25', price: '$325' },
              { size: 'Double Tray', serves: '40-50', price: '$625' }
            ],
            image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg'
          }
        ]
      },
      'Packages': [
        {
          name: 'Executive Lunch Package',
          description: 'Complete lunch service including appetizer, main course, dessert, and beverages',
          price: '$85 per person',
          minimumOrder: 'Minimum 10 people',
          image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
        },
        {
          name: 'Corporate Dinner Package',
          description: 'Premium dinner service with choice of two entrees, sides, and dessert',
          price: '$125 per person',
          minimumOrder: 'Minimum 15 people',
          image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
        }
      ]
    },
    delivery: {
      'Steak Dinners': [
        {
          name: 'Filet Mignon Dinner',
          description: 'Pre-cooked filet mignon with sides, vacuum sealed with reheating instructions',
          price: '$75',
          image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
        },
        {
          name: 'Ribeye Dinner',
          description: 'Pre-cooked ribeye steak with sides, vacuum sealed with reheating instructions',
          price: '$65',
          image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
        }
      ],
      'Family Meals': [
        {
          name: 'Family Steak Pack',
          description: 'Four steaks with family-style sides, serves 4-6 people',
          price: '$185',
          image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
        }
      ]
    }
  };
  // const menuData = {
  //   menu: {
  //     'Signature Steaks': {
  //       'Premium Cuts': [
  //         {
  //           name: 'Blackhorn Ribeye',
  //           description: '32oz dry-aged prime ribeye with herb butter, served with roasted garlic and seasonal vegetables',
  //           price: '$89',
  //           image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  //         },
  //         {
  //           name: 'Wagyu Sirloin',
  //           description: '10oz authentic Japanese A5 wagyu with truffle oil and microgreens',
  //           price: '$195',
  //           image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  //         },
  //         {
  //           name: 'Tomahawk Ribeye',
  //           description: '40oz show-stopping bone-in ribeye, perfect for sharing, aged 28 days',
  //           price: '$165',
  //           image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  //         }
  //       ],
  //       'Classic Cuts': [
  //         {
  //           name: 'Filet Mignon',
  //           description: '12oz center-cut tenderloin with truffle sauce and asparagus',
  //           price: '$68',
  //           image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  //         },
  //         {
  //           name: 'New York Strip',
  //           description: '16oz prime strip steak with rosemary and garlic butter',
  //           price: '$58',
  //           image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  //         },
  //         {
  //           name: 'Porterhouse',
  //           description: '28oz premium cut for two, dry-aged 28 days with bone marrow',
  //           price: '$125',
  //           image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  //         }
  //       ]
  //     },
  //     'Appetizers': {
  //       'Cold Starters': [
  //         {
  //           name: 'Oysters Rockefeller',
  //           description: 'Half dozen fresh Blue Point oysters with spinach, herbs, and cream',
  //           price: '$24',
  //           image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
  //         },
  //         {
  //           name: 'Beef Carpaccio',
  //           description: 'Thinly sliced raw beef tenderloin with capers, arugula, and aged parmesan',
  //           price: '$22',
  //           image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
  //         }
  //       ],
  //       'Hot Starters': [
  //         {
  //           name: 'Lobster Bisque',
  //           description: 'Rich lobster soup with cognac cream and fresh chives',
  //           price: '$18',
  //           image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
  //         },
  //         {
  //           name: 'Foie Gras',
  //           description: 'Pan-seared foie gras with cherry compote and brioche',
  //           price: '$35',
  //           image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
  //         }
  //       ]
  //     },
  //     'Seafood': [
  //       {
  //         name: 'Lobster Tail',
  //         description: '12oz cold water lobster tail with drawn butter and lemon',
  //         price: '$58',
  //         image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
  //       },
  //       {
  //         name: 'King Crab Legs',
  //         description: '2lbs Alaskan king crab with garlic lemon butter',
  //         price: '$85',
  //         image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
  //       },
  //       {
  //         name: 'Surf & Turf',
  //         description: '8oz filet mignon paired with 8oz lobster tail',
  //         price: '$95',
  //         image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
  //       }
  //     ]
  //   },
  //   wine: {
  //     'Red Wines': {
  //       'Cabernet Sauvignon': [
  //         {
  //           name: 'Caymus Cabernet Sauvignon',
  //           description: 'Napa Valley, California 2019 - Rich and full-bodied with dark fruit flavors',
  //           price: '$125',
  //           image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
  //         },
  //         {
  //           name: 'Screaming Eagle',
  //           description: 'Napa Valley Cabernet 2017 - Legendary cult wine with exceptional complexity',
  //           price: '$850',
  //           image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
  //         }
  //       ],
  //       'Bordeaux Blends': [
  //         {
  //           name: 'Opus One',
  //           description: 'Napa Valley Bordeaux Blend 2018 - Joint venture of Mondavi and Rothschild',
  //           price: '$495',
  //           image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
  //         }
  //       ]
  //     },
  //     'Champagne & Sparkling': [
  //       {
  //         name: 'Dom Perignon',
  //         description: 'Champagne, France 2012 - Prestigious vintage champagne with elegant bubbles',
  //         price: '$285',
  //         image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
  //       },
  //       {
  //         name: 'Krug Grande Cuvée',
  //         description: 'Champagne, France NV - Complex blend of over 120 wines',
  //         price: '$195',
  //         image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
  //       }
  //     ]
  //   },
  //   coffee: {
  //     'Coffee Selection': [
  //       {
  //         name: 'Single Origin Espresso',
  //         description: 'Ethiopian Yirgacheffe beans with floral notes and bright acidity',
  //         price: '$6',
  //         image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
  //       },
  //       {
  //         name: 'Irish Coffee',
  //         description: 'Premium coffee with Irish whiskey, brown sugar, and whipped cream',
  //         price: '$12',
  //         image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
  //       }
  //     ],
  //     'Desserts': [
  //       {
  //         name: 'Chocolate Lava Cake',
  //         description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
  //         price: '$14',
  //         image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
  //       },
  //       {
  //         name: 'Crème Brûlée',
  //         description: 'Classic vanilla custard with caramelized sugar crust',
  //         price: '$12',
  //         image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
  //       }
  //     ]
  //   },
  //   catering: {
  //     'Salads': [
  //       {
  //         name: 'Caesar Salad',
  //         description: 'Crisp romaine lettuce with house-made Caesar dressing, croutons, and parmesan',
  //         sizes: [
  //           { size: '1/4 Tray', serves: '6-10', price: '$35' },
  //           { size: '1/2 Tray', serves: '12-15', price: '$65' },
  //           { size: 'Full Tray', serves: '20-25', price: '$95' },
  //           { size: 'Double Tray', serves: '40-50', price: '$180' }
  //         ],
  //         image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg'
  //       },
  //       {
  //         name: 'Mixed Greens Salad',
  //         description: 'Fresh mixed greens with cherry tomatoes, cucumbers, and balsamic vinaigrette',
  //         sizes: [
  //           { size: '1/4 Tray', serves: '6-10', price: '$30' },
  //           { size: '1/2 Tray', serves: '12-15', price: '$55' },
  //           { size: 'Full Tray', serves: '20-25', price: '$85' },
  //           { size: 'Double Tray', serves: '40-50', price: '$160' }
  //         ],
  //         image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg'
  //       }
  //     ],
  //     'Main Courses': {
  //       'Beef Selection': [
  //         {
  //           name: 'Sliced Beef Tenderloin',
  //           description: 'Premium beef tenderloin sliced and served with mushroom sauce',
  //           sizes: [
  //             { size: '1/4 Tray', serves: '6-10', price: '$185' },
  //             { size: '1/2 Tray', serves: '12-15', price: '$350' },
  //             { size: 'Full Tray', serves: '20-25', price: '$650' },
  //             { size: 'Double Tray', serves: '40-50', price: '$1200' }
  //           ],
  //           image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  //         },
  //         {
  //           name: 'BBQ Beef Brisket',
  //           description: 'Slow-smoked beef brisket with house BBQ sauce',
  //           sizes: [
  //             { size: '1/4 Tray', serves: '6-10', price: '$125' },
  //             { size: '1/2 Tray', serves: '12-15', price: '$235' },
  //             { size: 'Full Tray', serves: '20-25', price: '$450' },
  //             { size: 'Double Tray', serves: '40-50', price: '$850' }
  //           ],
  //           image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  //         }
  //       ],
  //       'Poultry': [
  //         {
  //           name: 'Herb-Roasted Chicken',
  //           description: 'Free-range chicken with fresh herbs and seasonal vegetables',
  //           sizes: [
  //             { size: '1/4 Tray', serves: '6-10', price: '$95' },
  //             { size: '1/2 Tray', serves: '12-15', price: '$175' },
  //             { size: 'Full Tray', serves: '20-25', price: '$325' },
  //             { size: 'Double Tray', serves: '40-50', price: '$625' }
  //           ],
  //           image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg'
  //         }
  //       ]
  //     },
  //     'Packages': [
  //       {
  //         name: 'Executive Lunch Package',
  //         description: 'Complete lunch service including appetizer, main course, dessert, and beverages',
  //         price: '$85 per person',
  //         minimumOrder: 'Minimum 10 people',
  //         image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
  //       },
  //       {
  //         name: 'Corporate Dinner Package',
  //         description: 'Premium dinner service with choice of two entrees, sides, and dessert',
  //         price: '$125 per person',
  //         minimumOrder: 'Minimum 15 people',
  //         image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
  //       }
  //     ]
  //   },
  //   delivery: {
  //     'Steak Dinners': [
  //       {
  //         name: 'Filet Mignon Dinner',
  //         description: 'Pre-cooked filet mignon with sides, vacuum sealed with reheating instructions',
  //         price: '$75',
  //         image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  //       },
  //       {
  //         name: 'Ribeye Dinner',
  //         description: 'Pre-cooked ribeye steak with sides, vacuum sealed with reheating instructions',
  //         price: '$65',
  //         image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  //       }
  //     ],
  //     'Family Meals': [
  //       {
  //         name: 'Family Steak Pack',
  //         description: 'Four steaks with family-style sides, serves 4-6 people',
  //         price: '$185',
  //         image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
  //       }
  //     ]
  //   }
  // };

  const renderMenuItems = (items: any[]) => {
    return items.map((item, index) => (
      <div key={index} className="border-b border-theme-600 last:border-b-0 pb-6 last:pb-0 mb-6 last:mb-0">
        <div className="flex flex-col lg:flex-row gap-6">
          {item.image && (
            <div className="w-full lg:w-40 h-32 lg:h-40 flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h4 className="text-xl font-semibold text-white mb-2 sm:mb-0">{item.name}</h4>
              {item.price && !item.sizes && (
                <span className="text-xl font-bold text-amber-400 sm:ml-4">{item.price}</span>
              )}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
            
            {/* Handle multiple sizes for catering */}
            {item.sizes && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {item.sizes.map((sizeOption: any, sizeIndex: number) => (
                  <div key={sizeIndex} className="bg-theme-800 rounded-lg p-3 text-center">
                    <div className="text-sm font-semibold text-amber-400 mb-1">{sizeOption.size}</div>
                    <div className="text-xs text-gray-300 mb-2">Serves {sizeOption.serves}</div>
                    <div className="text-lg font-bold text-white">{sizeOption.price}</div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Handle package items */}
            {item.minimumOrder && (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 pt-3 border-t border-theme-600">
                <div className="text-sm text-gray-300 mb-2 sm:mb-0">
                  <span className="font-semibold">Minimum:</span> {item.minimumOrder}
                </div>
                <div className="text-xl font-bold text-amber-400">{item.price}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    ));
  };

  const renderMenuSection = (section: any, sectionName: string) => {
    // Check if section is an array (no subcategories)
    if (Array.isArray(section)) {
      return (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-amber-400 mb-6 border-b border-amber-400 pb-2">
            {sectionName}
          </h3>
          <div className="space-y-6">
            {renderMenuItems(section)}
          </div>
        </div>
      );
    }

    // Section has subcategories
    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-amber-400 mb-6 border-b border-amber-400 pb-2">
          {sectionName}
        </h3>
        {Object.entries(section).map(([subSectionName, items]) => (
          <div key={subSectionName} className="mb-8">
            <h4 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-amber-400 ">
              {subSectionName}
            </h4>
            <div className="space-y-4 ml-10 font-semibold">
              {Array.isArray(items) ? renderMenuItems(items) : renderMenuSection(items, subSectionName)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const currentMenuData = menuData[activeMenu as keyof typeof menuData];

  return (
    <div className="min-h-screen bg-theme-900">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Our Menus</h1>
          <p className="text-lg sm:text-xl text-theme-200 max-w-2xl mx-auto">
            Discover our comprehensive dining options, from premium steaks to catering services
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Main Menu Navigation */}
        <div className="flex flex-wrap justify-center mb-8 lg:mb-12 gap-2 sm:gap-4">
          {mainMenus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => setActiveMenu(menu.id)}
              className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeMenu === menu.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-theme-800 text-theme-300 hover:bg-theme-700'
              }`}
            >
              {menu.icon}
              <span className="hidden sm:inline">{menu.label}</span>
              <span className="sm:hidden">{menu.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="bg-theme-800 rounded-lg p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center text-amber-400 capitalize">
            {mainMenus.find(m => m.id === activeMenu)?.label}
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {Object.entries(currentMenuData).map(([sectionName, section]) => 
              renderMenuSection(section, sectionName)
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 lg:mt-16 text-center bg-theme-800 rounded-lg p-6 lg:p-8">
          <div className="max-w-3xl mx-auto">
            {activeMenu === 'menu' && (
              <p className="text-white mb-4">
                All steaks are served with your choice of sides and signature sauces. 
                Please inform us of any dietary restrictions or allergies.
              </p>
            )}
            {activeMenu === 'catering' && (
              <div className="space-y-4">
                <p className="text-gray-300">
                  All catering packages include setup, service, and cleanup. 
                  Minimum 48-hour notice required for all catering orders.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div className="bg-theme-900 rounded-lg p-3">
                    <div className="font-semibold text-amber-400">1/4 Tray</div>
                    <div className="text-gray-300">6-10 people</div>
                  </div>
                  <div className="bg-theme-900 rounded-lg p-3">
                    <div className="font-semibold text-amber-400">1/2 Tray</div>
                    <div className="text-gray-300">12-15 people</div>
                  </div>
                  <div className="bg-theme-900 rounded-lg p-3">
                    <div className="font-semibold text-amber-400">Full Tray</div>
                    <div className="text-gray-300">20-25 people</div>
                  </div>
                  <div className="bg-theme-900 rounded-lg p-3">
                    <div className="font-semibold text-amber-400">Double Tray</div>
                    <div className="text-gray-300">40-50 people</div>
                  </div>
                </div>
              </div>
            )}
            {activeMenu === 'delivery' && (
              <p className="text-white mb-4">
                Delivery available within 15 miles. Minimum order $75. 
                All meals come with detailed reheating instructions.
              </p>
            )}
            <p className="text-sm text-gray-300 mt-4">
              Prices subject to change. Tax and gratuity not included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}