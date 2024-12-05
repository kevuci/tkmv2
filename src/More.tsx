import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    images: { src: string; title: string; description: string }[];
    index: number;
  } | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = [
    {
      title: "Perfumes",
      images: [
        {
          src: "/content/perfumes/IMG_0987.JPEG",
          title: "About My perfume history",
          description:
            "Over the past year, I’ve developed a strong interest in perfumes and have deepened my knowledge of different fragrance types and compositions. What initially started as a casual curiosity has turned into a real passion, and I’ve spent time exploring various scent profiles. I’ve come to appreciate the complexity of perfumes and the art behind creating them. My favorite fragrance category has become sweet, which offers a warm, inviting feeling. Among my top picks is **Erba Pura** by Xerjoff, a fragrance that perfectly blends sweetness with a refreshing citrus note. The blend of creamy vanilla, white musk, and fruity notes creates an elegant yet comforting scent that lingers throughout the day. It’s a scent that makes me feel both sophisticated and relaxed, making it ideal for all occasions. Perfume has become not just a luxury for me, but a way to express personality and mood through scent.",
        },
        {
          src: "/content/perfumes/IMG_0986.JPEG",
          title: "Rum colored",
          description:
            "Gisada Ambassador for men \nEmporio Armani Stronger With You Intensely",
        },
        {
          src: "/content/perfumes/IMG_0988.JPEG",
          title: "Other",
          description:
            "Mercedes Benz Dior Fahrenheit dupe \nKenzo Homme Intense \nOtto Kern Ultimate Black",
        },
        {
          src: "/content/perfumes/althair_6d49bc40-1e88-424a-a08d-afa83871cb34.webp",
          title: "Want To Buy",
          description:
            "Parfums De Marley Althäir \none of the best Winter scent for me.",
        },
        {
          src: "/content/perfumes/jean_paul_gaultier_scandal_absolu_pour_homme.jpg",
          title: "Want To Buy",
          description:
            "Jean Paul Gaultier Scandal Absolu Pour Homme \nIt has a pair in the women scents this is the best duo so far!",
        },
      ],
    },
    {
      title: "Sneakers",
      images: [
        {
          src: "/content/fashion/IMG_2806.JPEG",
          title: "Off-White Airforce 1 Volt",
          description:
            "In 2017, I won my first sneaker, a Yeezy Zebra, from the Icons by Bizánc store. Since then, I have been following both sneaker and streetwear culture. Over the years, I’ve had hundreds of sneakers come through my hands and have sold many clothes and shoes as well. My passion for sneakers has grown into a deep connection with the culture and its ever-evolving trends.",
        },
        {
          src: "/content/fashion/IMG_2809.JPEG",
          title: "Off-White Presto Black",
          description:
            "In 2018, I purchased an Off-White Presto on StockX, which I still own and cherish. It’s in excellent condition, and to this day, it remains my favorite sneaker.",
        },
        {
          src: "/content/fashion/IMG_3590.JPEG",
          title: "Off-White Blazer Low",
          description:
            "I absolutely love the Nike Blazer, owning five pairs, and now I’ve added an Off-White version to my collection as well.",
        },
        {
          src: "/content/fashion/IMG_3927.JPEG",
          title: "Off-White Dunk University Red",
          description:
            "In recent years, the Nike Dunk has become a huge trend, and naturally, Off-White caught on, releasing an Off-White Dunk in the University Red colorway. Of course, I had to grab a pair. I don’t wear them much as they’re not exactly my style, but it’s a beautiful sneaker and definitely much better than something like the Panda Dunk.",
        },
        {
          src: "/content/fashion/IMG_5629.JPEG",
          title: "Nike Airforce 1",
          description:
            "And of course, there's the white Air Force 1, a sneaker found in everyone's closet. It's the best shoe Nike has ever made.",
        },
      ],
    },
    {
      title: "Tech",
      images: [
        {
          src: "/content/gamingpc/IMG_9210.JPEG",
          title: "My Pc",
          description:
            "Specs: \nIntel Core i9 12900KS Unlocked Special Edition 5.5ghz, \nAsus RogStrix B790-f Gaming Wifi Motherboard, \nCorsair 850W PSU Gold, \nNZXT H5 Flow Rgb Case, \nNZXT Kraken 240 RGB AIO, \nModding sleeved Cables, \n2x16GB 5600mhz Kingston Fury Beast ddr5 Ram (32gb), \nAsus RogStrix 4070 Super OC 12gb  ",
        },
        {
          src: "/content/gamingpc/IMG_0866.JPEG",
          title: "My Work, gaming desk.",
          description:
            "Xiaomi Monitor Light bar, \niPad Air M1 11inch Space Gray with Pencil, \nLG 34GN850P-B UltraGear 3440x1440p 21:9 1ms 160hz, \nMacBook Pro M1 2020 512gb Space Gray, \nXiaomi Yeelight RGB Strip Plus",
        },
        {
          src: "/content/gamingpc/IMG_0903.JPEG",
          title: "Peripherals",
          description:
            "Glorious Coiled Aviator cable \nRazer Blackwidow v3 Mini Hyperspeed  (Razer Yellow Switch), Foam and Tape modded. \nRazer Viper Ultimate Mouse with charging dock \nSteelseries QCK 3XL Mouse Mat. \nRazer Blackshark V2 Pro 2022 Headphones",
        },
        {
          src: "/content/gamingpc/IMG_4630.JPEG",
          title: "iPad Air",
          description: "M1 2022, 128gb Spacegray, with Pencil",
        },
        {
          src: "/content/gamingpc/IMG_6830.JPEG",
          title: "Macbook Setup",
          description:
            "Magic Keyboard \nLogi MX Master 3s Mouse white \nAirpods Pro \nMacbook Pro M1 2020 13inch 512gb 8gb ram ",
        },
      ],
    },
    {
      title: "Travel",
      images: [
        {
          src: "/content/travel/IMG_7236.JPEG",
          title: "Sarud",
          description:
            "I’ve had the opportunity to travel to many places abroad in the past, but it’s been a while since I last ventured out. I want to change that in the future and dedicate more time to exploring the world. My dream is to visit all kinds of places—from breathtaking beaches and vast oceans to towering mountains and snowy landscapes. I want to experience the diversity our planet has to offer, immerse myself in different cultures, and create unforgettable memories. Traveling the world and seeing as much as possible is something I deeply aspire to.",
        },
        {
          src: "/content/travel/IMG_1884.JPEG",
          title: "Rudabánya",
          description: "Trip with bae.",
        },
        {
          src: "/content/travel/IMG_2642.JPEG",
          title: "Etele, Budapest",
          description: "LoL WCS 2023 T1 Vs WBG",
        },
        {
          src: "/content/travel/IMG_0960.JPEG",
          title: "Siófok",
          description:
            "Holiday with our family, one of the best days in my life.",
        },
        {
          src: "/content/travel/IMG_8251.JPEG",
          title: "Dunakeszi",
          description: "Pet beach, with our family and Miko.",
        },
      ],
    },
    {
      title: "Gym",
      images: [
        {
          src: "/content/gym/IMG_6122.JPEG",
          title: "Irl Baki Hanma?",
          description:
            "I’ve been actively involved in sports since I was two years old, with my athletic journey beginning in swimming, which I practiced until I was eight. After that, I transitioned to water polo, which I continued until I was 14. At 14, I took up boxing and trained intensively until I was 18. From there, I moved on to Muay Thai, dedicating myself to the sport until I was 22. Throughout these years, I participated in competitive sports, which not only taught me the importance of physical fitness but also instilled discipline and resilience. Currently, I maintain a daily routine of working out at the gym, and it has become an integral part of my life. Sports have been my constant companion, through both good and bad times, providing me with motivation, strength, and focus. They’ve taught me perseverance, self-discipline, and the importance of pushing my limits. I’ve learned that sport is not just about physical strength; it’s also about mental toughness and maintaining a positive attitude regardless of the challenges life throws at you. For me, sports are not just a hobby, but a lifestyle and passion that I will never give up. It’s part of who I am, and I can’t imagine my life without it.",
        },
        {
          src: "/content/gym/IMG_260412.jpg",
          title: "Best Gym Couple?",
          description: "❤️",
        },
        {
          src: "/content/gym/IMG_0884.JPEG",
          title: "My favorite mirror",
          description: "I love Gymshark",
        },
        {
          src: "/content/gym/IMG_0773.JPEG",
          title: "Gray & White",
          description: "Pump check?",
        },
        {
          src: "/content/gym/123123.JPEG",
          title: "Halloween costume",
          description: "Are you scared?",
        },
      ],
    },
    {
      title: "Animals",
      images: [
        {
          src: "/content/animals/IMG_8626.JPEG",
          title: "Puszedli",
          description: "The red and white cornsnake from our family.",
        },
        {
          src: "/content/animals/IMG_8648.JPEG",
          title: "Muffin, (PUCU)",
          description:
            "The one who is always hungry just finished all the snacks. ",
        },
        {
          src: "/content/animals/IMG_8775.JPG",
          title: "Puszedli and Bejgli Cuddle",
          description: "They always sleep together.",
        },
        {
          src: "/content/animals/IMG_8936.JPEG",
          title: "Bejgli",
          description:
            "Brown-orange-black colored chess stomach cornsnake, my little baby.",
        },
        {
          src: "/content/animals/IMG_9026.JPEG",
          title: "Our little family",
          description:
            "Muffin our little dog, Csoki the black devil cat, Bubi the Mainecoon look cat and Mici the multicolored Mom cat.  ",
        },
      ],
    },

    // Add other categories with similar structure
  ];

  const handlePrevious = () => {
    if (selectedCategory) {
      setSelectedCategory((prev) => ({
        ...prev!,
        index: (prev!.index - 1 + prev!.images.length) % prev!.images.length,
      }));
    }
  };

  const handleNext = () => {
    if (selectedCategory) {
      setSelectedCategory((prev) => ({
        ...prev!,
        index: (prev!.index + 1) % prev!.images.length,
      }));
    }
  };

  return (
    <div
      id="More"
      className="min-h-screen w-screen md:mt-0 flex items-center justify-center bg-gray-50"
    >
      <section id="About" ref={sectionRef}>
        {isVisible && (
          <div className="w-full h-full">
            <div className="flex flex-col items-center">
              <motion.div
                className="w-full p-8 text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight mb-6 transform transition duration-500 hover:scale-105">
                  Lifestyle
                </h1>
                <p className="text-gray-800 mt-4 text-base sm:text-lg md:text-xl mx-auto max-w-3xl transition duration-300 ease-in-out">
                  Welcome to my world of creativity, technology, and style.
                  Check out some of my passions below! (I love collecting
                  items.)
                </p>

                {/* Categories for hobbies */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6">
                  {categories.map((category, index) => (
                    <motion.div
                      key={index}
                      className="shadow-lg cursor-pointer rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 * index }}
                      onClick={() =>
                        setSelectedCategory({
                          images: category.images,
                          index: 0,
                        })
                      }
                    >
                      <img
                        src={category.images[0].src}
                        alt={category.title}
                        className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                      />
                      <div className="p-4 bg-white rounded-b-lg shadow-lg">
                        <p className="text-gray-900 text-sm font-semibold">
                          {category.title}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Modal for category */}
            {selectedCategory && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCategory(null)}
              >
                <motion.div
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md transform transition duration-500 
                          max-h-[90vh] sm:max-h-[80vh] overflow-y-auto"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedCategory.images[selectedCategory.index].src}
                    alt={selectedCategory.images[selectedCategory.index].title}
                    className="w-full rounded-lg mb-6 max-h-[40vh] object-cover"
                  />
                  <h2 className="md:text-3xl text-xl font-bold text-gray-800 mb-4 transform transition duration-300 ease-in-out hover:text-gray-700">
                    {selectedCategory.images[selectedCategory.index].title}
                  </h2>
                  <p className="text-gray-800 whitespace-pre-wrap mb-6 p-2 overflow-auto">
                    {
                      selectedCategory.images[selectedCategory.index]
                        .description
                    }
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <motion.button
                      onClick={handlePrevious}
                      className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200 transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                    >
                      Previous
                    </motion.button>

                    {/* Page Indicator */}
                    <p className="text-gray-800 text-sm font-semibold">
                      {selectedCategory.index + 1} /{" "}
                      {selectedCategory.images.length}
                    </p>

                    <motion.button
                      onClick={handleNext}
                      className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200 transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                    >
                      Next
                    </motion.button>
                  </div>
                  <motion.button
                    onClick={() => setSelectedCategory(null)}
                    className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-200 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
