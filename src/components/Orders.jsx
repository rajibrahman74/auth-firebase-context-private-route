import React from "react";

const Orders = () => {
  const products = [
    // previous 6 products data
    {
      name: "Sony WH-1000XM4",
      description:
        "Wireless noise-canceling headphones with 40mm drivers, up to 30 hours of battery life, touch controls, and support for Alexa and Google Assistant.",
      price: 349.99,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654893619853",
    },
    {
      name: "Nintendo Switch",
      description:
        'Handheld gaming console with a 6.2" touchscreen display, detachable Joy-Con controllers, up to 9 hours of battery life, and the ability to play on the TV or in tabletop mode.',
      price: 299.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SX342_.jpg",
    },
    {
      name: "Fitbit Charge 5",
      description:
        "Advanced fitness tracker with a color AMOLED display, 20+ exercise modes, GPS, 24/7 heart rate tracking, ECG app, and up to 7 days of battery life.",
      price: 179.95,
      image:
        "https://d13o3tuo14g2wf.cloudfront.net/thumbnails%2Flarge%2F_default_upload_bucket%2FWH1000XM4B_0000_001_406fdd3cc9e49e28002ad8baef9185c8_1.png.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTNvM3R1bzE0ZzJ3Zi5jbG91ZGZyb250Lm5ldC90aHVtYm5haWxzJTJGbGFyZ2UlMkZfZGVmYXVsdF91cGxvYWRfYnVja2V0JTJGV0gxMDAwWE00Ql8wMDAwXzAwMV80MDZmZGQzY2M5ZTQ5ZTI4MDAyYWQ4YmFlZjkxODVjOF8xLnBuZy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjIxNDU3NjIwMDB9fX1dfQ__&Signature=K9Dw9fhXmMEyfPonCK3vOAxZ9NDmx4mYB7ZgLwdN2RYLLwEy0Oe663JnZiuWBWo19S6~eyaYIKgTgAZ79bL63YJYJjgv5hAAvlBlGsBbT4K4PDrfygiy25haUof4UVAbHDM~dp3ZwgQOP-GraSoCY5EDfR5wy9ekhTeYXLmap1lSyb70P-eZyACBzsN5LaiGDhAGigbc3HCyBByLhbjMJz9w~~pC2PN1v4ndPQveQ2gcnqLSPBYnnZfDRbJtx1YjRR8q7tXD7sYXYDLQgZw2aJuXqT7FnvdF7lYmzWm6TAktwD0FOtvn2QHMXZimmAu5igDpFcBCfFR5btt-TV7zlA__&Key-Pair-Id=K37BLT9C6HMMJ0",
    },
    {
      name: "Bose QuietComfort Earbuds",
      description:
        "True wireless earbuds with noise-cancellation, 6 hours of battery life, and support for Alexa and Google Assistant.",
      price: 279.99,
      image:
        "https://embed.widencdn.net/img/worldkitchen/sutvvj0uvj/735x520px/Desktop-IB_EPC_Lifestyle_Instant-Pot-Duo-Nova_Dark-Kitchen-Overview_1.jpeg",
    },
    {
      name: "LG OLED CX Series",
      description:
        '55" or 65" 4K UHD Smart OLED TV with webOS, 120Hz refresh rate, Dolby Vision IQ and Dolby Atmos support, and HDMI 2.1 for next-gen gaming consoles.',
      price: 1799.99,
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401859_sd.jpg",
    },
    {
      name: "Canon EOS R5",
      description:
        "Full-frame mirrorless camera with 45MP sensor, 8K video recording, in-body image stabilization, Dual Pixel CMOS AF II, and up to 12 fps continuous shooting.",
      price: 3899.0,
      image:
        "https://res.garmin.com/transform/image/upload/c_limit,dpr_1.0,f_auto,h_822,q_auto,w_1820/c_limit,h_822,w_1820/v1/Product_Images/en/products/010-02063-00/v/cf-lg-a1e3ec70-96ed-47fd-b4a4-0f786196f17c?pgw=1&pgwact=1",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4 py-4 text-center">Our Products</h1>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => {
          return (
            <div key={product.name} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="rounded-lg overflow-hidden shadow-lg h-full">
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.name}
                />
                <div className="px-4 py-2 h-52">
                  <h2 className="text-xl font-bold mb-2 h-10">{product.name}</h2>
                  <p className="text-gray-700 text-base mb-4 h-32">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold mb-2">{`Price: $${product.price}`}</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;