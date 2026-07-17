const products = [
    {
        "name": "LS2 Storm Shield Rain Suit",
        "images": [
            "https://images.pexels.com/photos/33203557/pexels-photo-33203557.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5795981/pexels-photo-5795981.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31306377/pexels-photo-31306377.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 6680,
        "discount": 0,
        "description": "Premium rain suit from LS2, engineered for performance, comfort, and durability on every ride.",
        "category": "Rain Suit",
        "stock": 70,
        "isFeatured": true,
        "isTrending": true,
        "bgcolor": "#F5F5F5",
        "brand": "6a59a398b000caf7140a2045",
        "rating": 4.6,
        "reviewCount": 510
    },
    {
        "name": "Axor Endure Pro Riding Pants",
        "images": [
            "https://images.pexels.com/photos/5795981/pexels-photo-5795981.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203560/pexels-photo-33203560.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/38084649/pexels-photo-38084649.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 8790,
        "discount": 5,
        "description": "Premium riding pants from Axor, engineered for performance, comfort, and durability on every ride.",
        "category": "Riding Pants",
        "stock": 49,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFF3E0",
        "brand": "6a59a398b000caf7140a2040",
        "rating": 3.9,
        "reviewCount": 448
    },
    {
        "name": "Rynox Cool Face Balaclava",
        "images": [
            "https://images.pexels.com/photos/12000077/pexels-photo-12000077.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/13446104/pexels-photo-13446104.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2930929/pexels-photo-2930929.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 2600,
        "discount": 10,
        "description": "Premium balaclava from Rynox, engineered for performance, comfort, and durability on every ride.",
        "category": "Balaclava",
        "stock": 19,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E8F5E9",
        "brand": "6a59a398b000caf7140a2047",
        "rating": 4.9,
        "reviewCount": 720
    },
    {
        "name": "Steelbird Speed Track Riding Shoes",
        "images": [
            "https://images.pexels.com/photos/9323599/pexels-photo-9323599.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/11326180/pexels-photo-11326180.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33469801/pexels-photo-33469801.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 8800,
        "discount": 15,
        "description": "Premium riding shoes from Steelbird, engineered for performance, comfort, and durability on every ride.",
        "category": "Riding Shoes",
        "stock": 64,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E3F2FD",
        "brand": "6a59a398b000caf7140a2042",
        "rating": 5,
        "reviewCount": 210
    },
    {
        "name": "Studds Impact Shield Knee Guard",
        "images": [
            "https://images.pexels.com/photos/33238473/pexels-photo-33238473.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5542146/pexels-photo-5542146.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250422/pexels-photo-31250422.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 7060,
        "discount": 20,
        "description": "Premium knee guard from Studds, engineered for performance, comfort, and durability on every ride.",
        "category": "Knee Guard",
        "stock": 12,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#FCE4EC",
        "brand": "6a59a398b000caf7140a2043",
        "rating": 3.8,
        "reviewCount": 445
    },
    {
        "name": "Vega Apex Venom Helmet",
        "images": [
            "https://images.pexels.com/photos/7443127/pexels-photo-7443127.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/7443126/pexels-photo-7443126.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/20193494/pexels-photo-20193494.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 7760,
        "discount": 25,
        "description": "Premium helmet from Vega, engineered for performance, comfort, and durability on every ride.",
        "category": "Helmet",
        "stock": 25,
        "isFeatured": true,
        "isTrending": false,
        "bgcolor": "#F3E5F5",
        "brand": "6a59a398b000caf7140a2044",
        "rating": 4,
        "reviewCount": 534
    },
    {
        "name": "Royal Enfield Rain Guard Pro Jacket",
        "images": [
            "https://images.pexels.com/photos/5794249/pexels-photo-5794249.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4560435/pexels-photo-4560435.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 7930,
        "discount": 0,
        "description": "Premium jacket from Royal Enfield, engineered for performance, comfort, and durability on every ride.",
        "category": "Jacket",
        "stock": 55,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFFDE7",
        "brand": "6a59a398b000caf7140a204a",
        "rating": 4.7,
        "reviewCount": 688
    },
    {
        "name": "Solace Trail Grip Gloves",
        "images": [
            "https://images.pexels.com/photos/6762790/pexels-photo-6762790.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/24366245/pexels-photo-24366245.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33582592/pexels-photo-33582592.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 5660,
        "discount": 5,
        "description": "Premium gloves from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 11,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#ECEFF1",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 4.3,
        "reviewCount": 71
    },
    {
        "name": "Axor Street Grip Boots",
        "images": [
            "https://images.pexels.com/photos/9323599/pexels-photo-9323599.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/11326180/pexels-photo-11326180.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33469801/pexels-photo-33469801.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 2480,
        "discount": 10,
        "description": "Premium boots from Axor, engineered for performance, comfort, and durability on every ride.",
        "category": "Boots",
        "stock": 71,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#F5F5F5",
        "brand": "6a59a398b000caf7140a2040",
        "rating": 4.5,
        "reviewCount": 602
    },
    {
        "name": "Steelbird Apex Venom Helmet",
        "images": [
            "https://images.pexels.com/photos/19045728/pexels-photo-19045728.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/14604064/pexels-photo-14604064.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/14604072/pexels-photo-14604072.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 7310,
        "discount": 15,
        "description": "Premium helmet from Steelbird, engineered for performance, comfort, and durability on every ride.",
        "category": "Helmet",
        "stock": 78,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFF3E0",
        "brand": "6a59a398b000caf7140a2042",
        "rating": 4.4,
        "reviewCount": 622
    },
    {
        "name": "MT Helmets RoadFlex Gloves",
        "images": [
            "https://images.pexels.com/photos/33469800/pexels-photo-33469800.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4560442/pexels-photo-4560442.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 1780,
        "discount": 20,
        "description": "Premium gloves from MT Helmets, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 7,
        "isFeatured": true,
        "isTrending": false,
        "bgcolor": "#E8F5E9",
        "brand": "6a59a398b000caf7140a2046",
        "rating": 4.8,
        "reviewCount": 569
    },
    {
        "name": "Studds Street Grip Boots",
        "images": [
            "https://images.pexels.com/photos/31306377/pexels-photo-31306377.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4560435/pexels-photo-4560435.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/20706238/pexels-photo-20706238.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 3170,
        "discount": 25,
        "description": "Premium boots from Studds, engineered for performance, comfort, and durability on every ride.",
        "category": "Boots",
        "stock": 15,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E3F2FD",
        "brand": "6a59a398b000caf7140a2043",
        "rating": 4.1,
        "reviewCount": 255
    },
    {
        "name": "Steelbird Dry Rider Rain Suit",
        "images": [
            "https://images.pexels.com/photos/33203560/pexels-photo-33203560.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/38084649/pexels-photo-38084649.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203557/pexels-photo-33203557.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 6360,
        "discount": 0,
        "description": "Premium rain suit from Steelbird, engineered for performance, comfort, and durability on every ride.",
        "category": "Rain Suit",
        "stock": 63,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#FCE4EC",
        "brand": "6a59a398b000caf7140a2042",
        "rating": 4.4,
        "reviewCount": 124
    },
    {
        "name": "SMK Storm Shield Rain Suit",
        "images": [
            "https://images.pexels.com/photos/5795981/pexels-photo-5795981.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31306377/pexels-photo-31306377.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203560/pexels-photo-33203560.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 1590,
        "discount": 5,
        "description": "Premium rain suit from SMK, engineered for performance, comfort, and durability on every ride.",
        "category": "Rain Suit",
        "stock": 39,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#F3E5F5",
        "brand": "6a59a398b000caf7140a2041",
        "rating": 4.5,
        "reviewCount": 748
    },
    {
        "name": "Solace Grip Pro Gloves",
        "images": [
            "https://images.pexels.com/photos/5794249/pexels-photo-5794249.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/6762790/pexels-photo-6762790.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 8030,
        "discount": 10,
        "description": "Premium gloves from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 47,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFFDE7",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 4.7,
        "reviewCount": 173
    },
    {
        "name": "Rynox Grip Pro Gloves",
        "images": [
            "https://images.pexels.com/photos/24366245/pexels-photo-24366245.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33582592/pexels-photo-33582592.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33469800/pexels-photo-33469800.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 8730,
        "discount": 15,
        "description": "Premium gloves from Rynox, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 42,
        "isFeatured": true,
        "isTrending": false,
        "bgcolor": "#ECEFF1",
        "brand": "6a59a398b000caf7140a2047",
        "rating": 3.9,
        "reviewCount": 206
    },
    {
        "name": "Viaterra Carbon Touch Gloves",
        "images": [
            "https://images.pexels.com/photos/4560442/pexels-photo-4560442.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5794249/pexels-photo-5794249.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 1200,
        "discount": 20,
        "description": "Premium gloves from Viaterra, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 65,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#F5F5F5",
        "brand": "6a59a398b000caf7140a2048",
        "rating": 4.6,
        "reviewCount": 564
    },
    {
        "name": "Vega Storm Shield Rain Suit",
        "images": [
            "https://images.pexels.com/photos/38084649/pexels-photo-38084649.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203557/pexels-photo-33203557.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5795981/pexels-photo-5795981.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 2020,
        "discount": 25,
        "description": "Premium rain suit from Vega, engineered for performance, comfort, and durability on every ride.",
        "category": "Rain Suit",
        "stock": 21,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFF3E0",
        "brand": "6a59a398b000caf7140a2044",
        "rating": 4.6,
        "reviewCount": 623
    },
    {
        "name": "Steelbird Trail Master Boots",
        "images": [
            "https://images.pexels.com/photos/9323599/pexels-photo-9323599.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/11326180/pexels-photo-11326180.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33469801/pexels-photo-33469801.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 7180,
        "discount": 0,
        "description": "Premium boots from Steelbird, engineered for performance, comfort, and durability on every ride.",
        "category": "Boots",
        "stock": 41,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E8F5E9",
        "brand": "6a59a398b000caf7140a2042",
        "rating": 4.5,
        "reviewCount": 859
    },
    {
        "name": "LS2 Ghost Vector Helmet",
        "images": [
            "https://images.pexels.com/photos/20193482/pexels-photo-20193482.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/20193486/pexels-photo-20193486.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/20193492/pexels-photo-20193492.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 4620,
        "discount": 5,
        "description": "Premium helmet from LS2, engineered for performance, comfort, and durability on every ride.",
        "category": "Helmet",
        "stock": 49,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E3F2FD",
        "brand": "6a59a398b000caf7140a2045",
        "rating": 4.1,
        "reviewCount": 136
    },
    {
        "name": "Raida Flex Protect Knee Guard",
        "images": [
            "https://images.pexels.com/photos/33469801/pexels-photo-33469801.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/36552346/pexels-photo-36552346.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33238473/pexels-photo-33238473.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 5450,
        "discount": 10,
        "description": "Premium knee guard from Raida, engineered for performance, comfort, and durability on every ride.",
        "category": "Knee Guard",
        "stock": 62,
        "isFeatured": true,
        "isTrending": true,
        "bgcolor": "#FCE4EC",
        "brand": "6a59a398b000caf7140a2049",
        "rating": 3.9,
        "reviewCount": 701
    },
    {
        "name": "Solace Rain Guard Pro Jacket",
        "images": [
            "https://images.pexels.com/photos/36552346/pexels-photo-36552346.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250422/pexels-photo-31250422.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 4890,
        "discount": 15,
        "description": "Premium jacket from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Jacket",
        "stock": 9,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#F3E5F5",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 4.8,
        "reviewCount": 710
    },
    {
        "name": "Axor Trail Grip Gloves",
        "images": [
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/6762790/pexels-photo-6762790.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/24366245/pexels-photo-24366245.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 7370,
        "discount": 20,
        "description": "Premium gloves from Axor, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 55,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFFDE7",
        "brand": "6a59a398b000caf7140a2040",
        "rating": 4,
        "reviewCount": 242
    },
    {
        "name": "Raida Falcon Edge Helmet",
        "images": [
            "https://images.pexels.com/photos/13536762/pexels-photo-13536762.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33932127/pexels-photo-33932127.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/16139156/pexels-photo-16139156.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 2730,
        "discount": 25,
        "description": "Premium helmet from Raida, engineered for performance, comfort, and durability on every ride.",
        "category": "Helmet",
        "stock": 56,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#ECEFF1",
        "brand": "6a59a398b000caf7140a2049",
        "rating": 4.1,
        "reviewCount": 37
    },
    {
        "name": "Viaterra Core Shield Back Protector",
        "images": [
            "https://images.pexels.com/photos/28051514/pexels-photo-28051514.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33153044/pexels-photo-33153044.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5542146/pexels-photo-5542146.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 4860,
        "discount": 0,
        "description": "Premium back protector from Viaterra, engineered for performance, comfort, and durability on every ride.",
        "category": "Back Protector",
        "stock": 52,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#F5F5F5",
        "brand": "6a59a398b000caf7140a2048",
        "rating": 4.5,
        "reviewCount": 51
    },
    {
        "name": "Solace Apex Venom Helmet",
        "images": [
            "https://images.pexels.com/photos/21012193/pexels-photo-21012193.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2930929/pexels-photo-2930929.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/19385681/pexels-photo-19385681.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 5680,
        "discount": 5,
        "description": "Premium helmet from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Helmet",
        "stock": 25,
        "isFeatured": true,
        "isTrending": false,
        "bgcolor": "#FFF3E0",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 4.6,
        "reviewCount": 797
    },
    {
        "name": "MT Helmets Spine Guard Back Protector",
        "images": [
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/28051514/pexels-photo-28051514.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 7070,
        "discount": 10,
        "description": "Premium back protector from MT Helmets, engineered for performance, comfort, and durability on every ride.",
        "category": "Back Protector",
        "stock": 14,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E8F5E9",
        "brand": "6a59a398b000caf7140a2046",
        "rating": 4.9,
        "reviewCount": 663
    },
    {
        "name": "Royal Enfield Dry Rider Rain Suit",
        "images": [
            "https://images.pexels.com/photos/31306377/pexels-photo-31306377.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203560/pexels-photo-33203560.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/38084649/pexels-photo-38084649.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 1460,
        "discount": 15,
        "description": "Premium rain suit from Royal Enfield, engineered for performance, comfort, and durability on every ride.",
        "category": "Rain Suit",
        "stock": 67,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E3F2FD",
        "brand": "6a59a398b000caf7140a204a",
        "rating": 4,
        "reviewCount": 419
    },
    {
        "name": "Viaterra RoadFlex Gloves",
        "images": [
            "https://images.pexels.com/photos/33582592/pexels-photo-33582592.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33469800/pexels-photo-33469800.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4560442/pexels-photo-4560442.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 6290,
        "discount": 20,
        "description": "Premium gloves from Viaterra, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 18,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#FCE4EC",
        "brand": "6a59a398b000caf7140a2048",
        "rating": 4.7,
        "reviewCount": 437
    },
    {
        "name": "Raida Trail Master Boots",
        "images": [
            "https://images.pexels.com/photos/31306377/pexels-photo-31306377.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4560435/pexels-photo-4560435.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/20706238/pexels-photo-20706238.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 6470,
        "discount": 25,
        "description": "Premium boots from Raida, engineered for performance, comfort, and durability on every ride.",
        "category": "Boots",
        "stock": 21,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#F3E5F5",
        "brand": "6a59a398b000caf7140a2049",
        "rating": 4.7,
        "reviewCount": 241
    },
    {
        "name": "Steelbird Storm Rider Helmet",
        "images": [
            "https://images.pexels.com/photos/13446104/pexels-photo-13446104.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/6509112/pexels-photo-6509112.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 5990,
        "discount": 0,
        "description": "Premium helmet from Steelbird, engineered for performance, comfort, and durability on every ride.",
        "category": "Helmet",
        "stock": 51,
        "isFeatured": true,
        "isTrending": false,
        "bgcolor": "#FFFDE7",
        "brand": "6a59a398b000caf7140a2042",
        "rating": 4.1,
        "reviewCount": 277
    },
    {
        "name": "Solace Armor Fit Riding Pants",
        "images": [
            "https://images.pexels.com/photos/31250423/pexels-photo-31250423.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203559/pexels-photo-33203559.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/20706238/pexels-photo-20706238.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 3130,
        "discount": 5,
        "description": "Premium riding pants from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Riding Pants",
        "stock": 56,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#ECEFF1",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 3.8,
        "reviewCount": 263
    },
    {
        "name": "Axor Armor Fit Riding Pants",
        "images": [
            "https://images.pexels.com/photos/5795981/pexels-photo-5795981.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203560/pexels-photo-33203560.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/38084649/pexels-photo-38084649.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 1950,
        "discount": 10,
        "description": "Premium riding pants from Axor, engineered for performance, comfort, and durability on every ride.",
        "category": "Riding Pants",
        "stock": 77,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#F5F5F5",
        "brand": "6a59a398b000caf7140a2040",
        "rating": 3.8,
        "reviewCount": 241
    },
    {
        "name": "Vega Core Shield Back Protector",
        "images": [
            "https://images.pexels.com/photos/33153044/pexels-photo-33153044.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5542146/pexels-photo-5542146.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 7610,
        "discount": 15,
        "description": "Premium back protector from Vega, engineered for performance, comfort, and durability on every ride.",
        "category": "Back Protector",
        "stock": 15,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFF3E0",
        "brand": "6a59a398b000caf7140a2044",
        "rating": 4.9,
        "reviewCount": 116
    },
    {
        "name": "SMK Aero Shield Jacket",
        "images": [
            "https://images.pexels.com/photos/28051514/pexels-photo-28051514.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33153044/pexels-photo-33153044.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5794249/pexels-photo-5794249.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 2390,
        "discount": 20,
        "description": "Premium jacket from SMK, engineered for performance, comfort, and durability on every ride.",
        "category": "Jacket",
        "stock": 63,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E8F5E9",
        "brand": "6a59a398b000caf7140a2041",
        "rating": 4.7,
        "reviewCount": 414
    },
    {
        "name": "Steelbird Carbon Touch Gloves",
        "images": [
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5794249/pexels-photo-5794249.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 2690,
        "discount": 25,
        "description": "Premium gloves from Steelbird, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 64,
        "isFeatured": true,
        "isTrending": false,
        "bgcolor": "#E3F2FD",
        "brand": "6a59a398b000caf7140a2042",
        "rating": 4.3,
        "reviewCount": 451
    },
    {
        "name": "Rynox Core Shield Back Protector",
        "images": [
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/28051514/pexels-photo-28051514.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33153044/pexels-photo-33153044.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 5950,
        "discount": 0,
        "description": "Premium back protector from Rynox, engineered for performance, comfort, and durability on every ride.",
        "category": "Back Protector",
        "stock": 24,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#FCE4EC",
        "brand": "6a59a398b000caf7140a2047",
        "rating": 4.4,
        "reviewCount": 590
    },
    {
        "name": "Raida Storm Shield Rain Suit",
        "images": [
            "https://images.pexels.com/photos/33203557/pexels-photo-33203557.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5795981/pexels-photo-5795981.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31306377/pexels-photo-31306377.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 6490,
        "discount": 5,
        "description": "Premium rain suit from Raida, engineered for performance, comfort, and durability on every ride.",
        "category": "Rain Suit",
        "stock": 6,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#F3E5F5",
        "brand": "6a59a398b000caf7140a2049",
        "rating": 4.1,
        "reviewCount": 659
    },
    {
        "name": "Solace Carbon Touch Gloves",
        "images": [
            "https://images.pexels.com/photos/6762790/pexels-photo-6762790.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/24366245/pexels-photo-24366245.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33582592/pexels-photo-33582592.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 8630,
        "discount": 10,
        "description": "Premium gloves from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 8,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFFDE7",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 4.2,
        "reviewCount": 354
    },
    {
        "name": "Solace Blaze Core Helmet",
        "images": [
            "https://images.pexels.com/photos/12000077/pexels-photo-12000077.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/7443127/pexels-photo-7443127.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/7443126/pexels-photo-7443126.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 2050,
        "discount": 15,
        "description": "Premium helmet from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Helmet",
        "stock": 71,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#ECEFF1",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 4.1,
        "reviewCount": 807
    },
    {
        "name": "Raida Endure Pro Riding Pants",
        "images": [
            "https://images.pexels.com/photos/31250423/pexels-photo-31250423.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203559/pexels-photo-33203559.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/20706238/pexels-photo-20706238.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 7190,
        "discount": 20,
        "description": "Premium riding pants from Raida, engineered for performance, comfort, and durability on every ride.",
        "category": "Riding Pants",
        "stock": 60,
        "isFeatured": true,
        "isTrending": true,
        "bgcolor": "#F5F5F5",
        "brand": "6a59a398b000caf7140a2049",
        "rating": 4.1,
        "reviewCount": 744
    },
    {
        "name": "Solace Dry Rider Rain Suit",
        "images": [
            "https://images.pexels.com/photos/33203560/pexels-photo-33203560.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/38084649/pexels-photo-38084649.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203557/pexels-photo-33203557.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 7280,
        "discount": 25,
        "description": "Premium rain suit from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Rain Suit",
        "stock": 39,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFF3E0",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 3.9,
        "reviewCount": 190
    },
    {
        "name": "Raida Trail Grip Gloves",
        "images": [
            "https://images.pexels.com/photos/33469800/pexels-photo-33469800.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4560442/pexels-photo-4560442.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 3020,
        "discount": 0,
        "description": "Premium gloves from Raida, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 41,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E8F5E9",
        "brand": "6a59a398b000caf7140a2049",
        "rating": 4.3,
        "reviewCount": 510
    },
    {
        "name": "Studds Rain Guard Pro Jacket",
        "images": [
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4560435/pexels-photo-4560435.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/36552346/pexels-photo-36552346.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 1150,
        "discount": 5,
        "description": "Premium jacket from Studds, engineered for performance, comfort, and durability on every ride.",
        "category": "Jacket",
        "stock": 24,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E3F2FD",
        "brand": "6a59a398b000caf7140a2043",
        "rating": 4.4,
        "reviewCount": 249
    },
    {
        "name": "Vega Spine Guard Back Protector",
        "images": [
            "https://images.pexels.com/photos/5542146/pexels-photo-5542146.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 1280,
        "discount": 10,
        "description": "Premium back protector from Vega, engineered for performance, comfort, and durability on every ride.",
        "category": "Back Protector",
        "stock": 27,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#FCE4EC",
        "brand": "6a59a398b000caf7140a2044",
        "rating": 4.6,
        "reviewCount": 272
    },
    {
        "name": "Steelbird Storm Shield Rain Suit",
        "images": [
            "https://images.pexels.com/photos/5795981/pexels-photo-5795981.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31306377/pexels-photo-31306377.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203560/pexels-photo-33203560.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 8070,
        "discount": 15,
        "description": "Premium rain suit from Steelbird, engineered for performance, comfort, and durability on every ride.",
        "category": "Rain Suit",
        "stock": 26,
        "isFeatured": true,
        "isTrending": false,
        "bgcolor": "#F3E5F5",
        "brand": "6a59a398b000caf7140a2042",
        "rating": 4.7,
        "reviewCount": 450
    },
    {
        "name": "Solace Off-Road Pro Boots",
        "images": [
            "https://images.pexels.com/photos/9323599/pexels-photo-9323599.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/11326180/pexels-photo-11326180.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33469801/pexels-photo-33469801.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 6850,
        "discount": 20,
        "description": "Premium boots from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Boots",
        "stock": 24,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFFDE7",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 4.3,
        "reviewCount": 724
    },
    {
        "name": "Royal Enfield Flex Protect Knee Guard",
        "images": [
            "https://images.pexels.com/photos/5542146/pexels-photo-5542146.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250422/pexels-photo-31250422.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33469801/pexels-photo-33469801.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 4630,
        "discount": 25,
        "description": "Premium knee guard from Royal Enfield, engineered for performance, comfort, and durability on every ride.",
        "category": "Knee Guard",
        "stock": 13,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#ECEFF1",
        "brand": "6a59a398b000caf7140a204a",
        "rating": 4.9,
        "reviewCount": 656
    },
    {
        "name": "Royal Enfield Spine Guard Back Protector",
        "images": [
            "https://images.pexels.com/photos/28051514/pexels-photo-28051514.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33153044/pexels-photo-33153044.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5542146/pexels-photo-5542146.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 4790,
        "discount": 0,
        "description": "Premium back protector from Royal Enfield, engineered for performance, comfort, and durability on every ride.",
        "category": "Back Protector",
        "stock": 39,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#F5F5F5",
        "brand": "6a59a398b000caf7140a204a",
        "rating": 4.8,
        "reviewCount": 154
    },
    {
        "name": "Rynox Wind Shield Balaclava",
        "images": [
            "https://images.pexels.com/photos/19385681/pexels-photo-19385681.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/21012193/pexels-photo-21012193.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/12000077/pexels-photo-12000077.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 3010,
        "discount": 5,
        "description": "Premium balaclava from Rynox, engineered for performance, comfort, and durability on every ride.",
        "category": "Balaclava",
        "stock": 42,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFF3E0",
        "brand": "6a59a398b000caf7140a2047",
        "rating": 4,
        "reviewCount": 818
    },
    {
        "name": "Axor Core Shield Back Protector",
        "images": [
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/28051514/pexels-photo-28051514.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 3330,
        "discount": 10,
        "description": "Premium back protector from Axor, engineered for performance, comfort, and durability on every ride.",
        "category": "Back Protector",
        "stock": 54,
        "isFeatured": true,
        "isTrending": false,
        "bgcolor": "#E8F5E9",
        "brand": "6a59a398b000caf7140a2040",
        "rating": 4.5,
        "reviewCount": 501
    },
    {
        "name": "Steelbird Endure Pro Riding Pants",
        "images": [
            "https://images.pexels.com/photos/5795981/pexels-photo-5795981.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203560/pexels-photo-33203560.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/38084649/pexels-photo-38084649.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 3210,
        "discount": 15,
        "description": "Premium riding pants from Steelbird, engineered for performance, comfort, and durability on every ride.",
        "category": "Riding Pants",
        "stock": 59,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E3F2FD",
        "brand": "6a59a398b000caf7140a2042",
        "rating": 4.1,
        "reviewCount": 226
    },
    {
        "name": "Solace Shield Hand Gloves",
        "images": [
            "https://images.pexels.com/photos/5794249/pexels-photo-5794249.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/6762790/pexels-photo-6762790.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 3010,
        "discount": 20,
        "description": "Premium gloves from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 34,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#FCE4EC",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 4.1,
        "reviewCount": 267
    },
    {
        "name": "Solace Flex Protect Knee Guard",
        "images": [
            "https://images.pexels.com/photos/36552346/pexels-photo-36552346.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33238473/pexels-photo-33238473.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5542146/pexels-photo-5542146.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 1880,
        "discount": 25,
        "description": "Premium knee guard from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Knee Guard",
        "stock": 72,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#F3E5F5",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 4.4,
        "reviewCount": 493
    },
    {
        "name": "MT Helmets Thunder Jacket Jacket",
        "images": [
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250422/pexels-photo-31250422.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/28051514/pexels-photo-28051514.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 4590,
        "discount": 0,
        "description": "Premium jacket from MT Helmets, engineered for performance, comfort, and durability on every ride.",
        "category": "Jacket",
        "stock": 67,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFFDE7",
        "brand": "6a59a398b000caf7140a2046",
        "rating": 4.8,
        "reviewCount": 182
    },
    {
        "name": "Rynox Shield Hand Gloves",
        "images": [
            "https://images.pexels.com/photos/24366245/pexels-photo-24366245.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33582592/pexels-photo-33582592.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33469800/pexels-photo-33469800.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 4920,
        "discount": 5,
        "description": "Premium gloves from Rynox, engineered for performance, comfort, and durability on every ride.",
        "category": "Gloves",
        "stock": 19,
        "isFeatured": true,
        "isTrending": false,
        "bgcolor": "#ECEFF1",
        "brand": "6a59a398b000caf7140a2047",
        "rating": 4.7,
        "reviewCount": 87
    },
    {
        "name": "Studds Spine Guard Back Protector",
        "images": [
            "https://images.pexels.com/photos/33153044/pexels-photo-33153044.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5542146/pexels-photo-5542146.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/33203545/pexels-photo-33203545.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 6180,
        "discount": 10,
        "description": "Premium back protector from Studds, engineered for performance, comfort, and durability on every ride.",
        "category": "Back Protector",
        "stock": 47,
        "isFeatured": false,
        "isTrending": true,
        "bgcolor": "#F5F5F5",
        "brand": "6a59a398b000caf7140a2043",
        "rating": 4,
        "reviewCount": 197
    },
    {
        "name": "SMK Speed Track Riding Shoes",
        "images": [
            "https://images.pexels.com/photos/31306377/pexels-photo-31306377.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/9323599/pexels-photo-9323599.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/11326180/pexels-photo-11326180.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 6810,
        "discount": 15,
        "description": "Premium riding shoes from SMK, engineered for performance, comfort, and durability on every ride.",
        "category": "Riding Shoes",
        "stock": 25,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#FFF3E0",
        "brand": "6a59a398b000caf7140a2041",
        "rating": 4.9,
        "reviewCount": 710
    },
    {
        "name": "Solace Trail Blazer Jacket",
        "images": [
            "https://images.pexels.com/photos/33153044/pexels-photo-33153044.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5794249/pexels-photo-5794249.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/31250425/pexels-photo-31250425.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 4040,
        "discount": 20,
        "description": "Premium jacket from Solace, engineered for performance, comfort, and durability on every ride.",
        "category": "Jacket",
        "stock": 27,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E8F5E9",
        "brand": "6a59a398b000caf7140a204b",
        "rating": 4.5,
        "reviewCount": 789
    },
    {
        "name": "Vega Ghost Vector Helmet",
        "images": [
            "https://images.pexels.com/photos/20193494/pexels-photo-20193494.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/19045728/pexels-photo-19045728.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/14604064/pexels-photo-14604064.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        "price": 8150,
        "discount": 25,
        "description": "Premium helmet from Vega, engineered for performance, comfort, and durability on every ride.",
        "category": "Helmet",
        "stock": 42,
        "isFeatured": false,
        "isTrending": false,
        "bgcolor": "#E3F2FD",
        "brand": "6a59a398b000caf7140a2044",
        "rating": 4.1,
        "reviewCount": 120
    }
];

module.exports = products;