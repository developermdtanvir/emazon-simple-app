import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const Data = [
        {
            "key": "B002RL8IYK",
            "category": "laptop",
            "name": "3M Gold Privacy Filter for 17\" Widescreen Laptop (16:10) (GF170W1B)",
            "seller": "3M",
            "wholePrice": "68",
            "priceFraction": "36",
            "stock": 36,
            "star": 3,
            "starCount": 3245,
            "img": "https://images-na.ssl-images-amazon.com/images/I/415oziPFA0L._AC_US218_.jpg",
            "url": "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_electronics_sr_pg1_1?ie=UTF8&adId=A03956601N6RBLKGAP4W1&url=https%3A%2F%2Fwww.amazon.com%2F3M-Privacy-Filter-Widescreen-Laptop%2Fdp%2FB002RL8IYK%2Fref%3Dsr_1_1%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124890%26sr%3D1-1-spons%26keywords%3Dlaptop%26psc%3D1&qualifier=1499124889&id=6267744216991374&widgetName=sp_atf",
            "features": [
                {
                    "description": "Display Size",
                    "value": "17 inches"
                },
                {
                    "description": "Hardware Platform",
                    "value": "PC"
                }
            ],
            "price": 68.36,
            "shipping": 7.99
        },
        {
            "key": "B01LZ2WZGH",
            "category": "laptop",
            "name": "Manfrotto MB LF-WN-BP camera & laptop backpack for DSLR Lifestyle Windsor, grey",
            "seller": "Manfrotto",
            "wholePrice": "169",
            "priceFraction": "88",
            "stock": 55,
            "star": 2,
            "starCount": 2899,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51mEVhwXGKL._AC_US218_.jpg",
            "url": "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_electronics_sr_pg1_2?ie=UTF8&adId=A04941221ULRUNSJPY1RW&url=https%3A%2F%2Fwww.amazon.com%2FManfrotto-MB-LF-WN-BP-backpack-Lifestyle%2Fdp%2FB01LZ2WZGH%2Fref%3Dsr_1_2%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124890%26sr%3D1-2-spons%26keywords%3Dlaptop%26psc%3D1&qualifier=1499124889&id=6267744216991374&widgetName=sp_atf",
            "features": [],
            "price": 169.88,
            "shipping": 3.99
        },
        {
            "key": "B01K1IO3QW",
            "category": "laptop",
            "name": "Acer Aspire E 15 E5-575-33BM 15.6-Inch Full HD Notebook (Intel Core i3-7100U Processor 7th Generation , 4GB DDR4, 1TB 5400RPM Hard Drive, Intel HD Graphics 620, Windows 10 Home), Obsidian Black",
            "seller": "Acer",
            "wholePrice": "349",
            "priceFraction": "99",
            "stock": 3,
            "star": 3,
            "starCount": 3525,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41HfDkXXyeL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Acer-E5-575-33BM-15-6-Inch-Processor-Generation/dp/B01K1IO3QW/ref=sr_1_3?s=electronics&ie=UTF8&qid=1499124890&sr=1-3&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "1000 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i3"
                }
            ],
            "price": 349.99,
            "shipping": 3.99
        },
        {
            "key": "B01LD4MGY4",
            "category": "laptop",
            "name": "Acer Aspire E 15 E5-575G-57D4 15.6-Inches Full HD Notebook (i5-7200U, 8GB DDR4 SDRAM, 256GB SSD, Windows 10 Home), Obsidian Black",
            "seller": "Acer",
            "wholePrice": "579",
            "priceFraction": "99",
            "stock": 49,
            "star": 4,
            "starCount": 4232,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41HfDkXXyeL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Acer-E5-575G-57D4-15-6-Inches-Notebook-i5-7200U/dp/B01LD4MGY4/ref=sr_1_4?s=electronics&ie=UTF8&qid=1499124890&sr=1-4&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5"
                },
                {
                    "description": "Display Technology",
                    "value": "LED-Lit"
                }
            ],
            "price": 579.99,
            "shipping": 7.99
        },
        {
            "key": "B01M18UZF5",
            "category": "laptop",
            "name": "ASUS ZenBook UX330UA-AH54 13.3-inch Ultra-Slim Laptop (Core i5 Processor, 8GB DDR3, 256GB SSD, Windows 10) With Harman Kardon Audio, Backlit keyboard, Fingerprint Reader",
            "seller": "Asus",
            "wholePrice": "699",
            "priceFraction": "00",
            "stock": 23,
            "star": 4,
            "starCount": 2457,
            "img": "https://images-na.ssl-images-amazon.com/images/I/417yCr3mvYL._AC_US218_.jpg",
            "url": "https://www.amazon.com/UX330UA-AH54-13-3-inch-Ultra-Slim-Processor-Fingerprint/dp/B01M18UZF5/ref=sr_1_5?s=electronics&ie=UTF8&qid=1499124890&sr=1-5&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "13.3 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "256 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5 7200u"
                }
            ],
            "price": 699,
            "shipping": 3.99
        },
        {
            "key": "B01DBGVB7K",
            "category": "laptop",
            "name": "ASUS Chromebook C202SA-YS02 11.6\" Ruggedized and Water Resistant Design with 180 Degree (Intel Celeron 4 GB, 16GB eMMC, Dark Blue)",
            "seller": "Asus",
            "wholePrice": 220,
            "priceFraction": 49,
            "stock": 54,
            "star": 4,
            "starCount": 2777,
            "img": "https://images-na.ssl-images-amazon.com/images/I/31inMpRxCFL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Chromebook-C202SA-YS02-Ruggedized-Resistant-Celeron/dp/B01DBGVB7K/ref=sr_1_6?s=electronics&ie=UTF8&qid=1499124890&sr=1-6&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "11.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Chrome"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "16 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "celeron"
                }
            ],
            "price": 220.49,
            "shipping": 3.99
        },
        {
            "key": "B015WXL0C6",
            "category": "laptop",
            "name": "Apple MacBook Air 13.3-Inch Laptop (Intel Core i5 1.6GHz, 128GB Flash, 8GB RAM, OS X El Capitan)",
            "seller": "Apple",
            "wholePrice": "848",
            "priceFraction": "99",
            "stock": 22,
            "star": 4,
            "starCount": 2830,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51GRACqhHbL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Apple-MacBook-13-3-Inch-Laptop-Capitan/dp/B015WXL0C6/ref=sr_1_7?s=electronics&ie=UTF8&qid=1499124890&sr=1-7&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "13.3 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8.0 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Mac OS X"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "128 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5"
                }
            ],
            "price": 848.99,
            "shipping": 7.99
        },
        {
            "key": "B06Y4GZS9C",
            "category": "laptop",
            "name": "Acer Predator Helios 300 Gaming Laptop, Intel Core i7, GeForce GTX 1 060, 15.6\" Full HD, 16GB DDR4, 256GB SSD, G3-571-77QK",
            "seller": "Acer",
            "wholePrice": "1,049",
            "priceFraction": "99",
            "stock": 22,
            "star": 3,
            "starCount": 257,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41v2oytxs9L._AC_US218_.jpg",
            "url": "https://www.amazon.com/Acer-Predator-Helios-GeForce-G3-571-77QK/dp/B06Y4GZS9C/ref=sr_1_8?s=electronics&ie=UTF8&qid=1499124890&sr=1-8&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "16 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10 Home"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i7"
                },
                {
                    "description": "Cpu Model Manufacturer",
                    "value": "Intel"
                }
            ],
            "price": 1,
            "shipping": 7.99
        },
        {
            "key": "B06XJJG4PD",
            "category": "laptop",
            "name": "ASUS P-Series P2540UA-AB51 business standard Laptop, 7th Gen Intel Core i5, 2.5GHz (3M Cache, up to 3.1GHz), FHD Display, 8GB RAM, 1TB HDD, Windows 10 Home, Fingerprint, TPM, 9hrs battery life",
            "seller": "Asus",
            "wholePrice": "499",
            "priceFraction": "00",
            "stock": 35,
            "star": 3,
            "starCount": 599,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41PUHRFGpvL._AC_US218_.jpg",
            "url": "https://www.amazon.com/P2540UA-AB51-business-standard-Display-Fingerprint/dp/B06XJJG4PD/ref=sr_1_9?s=electronics&ie=UTF8&qid=1499124890&sr=1-9&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "1000 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5 7200u"
                }
            ],
            "price": 499,
            "shipping": 7.99
        },
        {
            "key": "B01NBE6Y5D",
            "category": "laptop",
            "name": "HP 15.6\" HD WLED Backlit Display Laptop, AMD A6-7310 Quad-Core APU 2GHz, 4GB RAM, 500GB HDD WiFi, DVD+/-RW, Webcam, Windows 10, Black",
            "seller": "HP",
            "wholePrice": "247",
            "priceFraction": "98",
            "stock": 74,
            "star": 3,
            "starCount": 4293,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51-2Z4ZWimL._AC_US218_.jpg",
            "url": "https://www.amazon.com/HP-Backlit-Display-A6-7310-Quad-Core/dp/B01NBE6Y5D/ref=sr_1_10?s=electronics&ie=UTF8&qid=1499124890&sr=1-10&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4.0 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "500.0 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "amd a series"
                }
            ],
            "price": 247.98,
            "shipping": 7.99
        },
        {
            "key": "B01J42JPJG",
            "category": "laptop",
            "name": "Acer Chromebook R 11 Convertible, 11.6-Inch HD Touch, Intel Celeron N3150, 4GB DDR3L, 32GB, Chrome, CB5-132T-C1LK",
            "seller": "Acer",
            "wholePrice": "279",
            "priceFraction": "99",
            "stock": 19,
            "star": 4,
            "starCount": 4646,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51xMqkFZ+RL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Acer-Chromebook-Convertible-11-6-Inch-CB5-132T-C1LK/dp/B01J42JPJG/ref=sr_1_11?s=electronics&ie=UTF8&qid=1499124890&sr=1-11&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "11.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Chrome"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "32 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "celeron"
                }
            ],
            "price": 279.99,
            "shipping": 3.99
        },
        {
            "key": "B01F4ZG68A",
            "category": "laptop",
            "name": "HP 14-inch Laptop, AMD E2-7110, 4GB RAM, 32GB eMMC, Windows 10 (14-an013nr, Silver)",
            "seller": "HP",
            "wholePrice": "212",
            "priceFraction": "33",
            "stock": 33,
            "star": 3,
            "starCount": 2066,
            "img": "https://images-na.ssl-images-amazon.com/images/I/414egKO4O3L._AC_US218_.jpg",
            "url": "https://www.amazon.com/HP-14-inch-E2-7110-Windows-14-an013nr/dp/B01F4ZG68A/ref=sr_1_13?s=electronics&ie=UTF8&qid=1499124890&sr=1-13&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "14 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10 Home"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "32 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "e2 7110"
                }
            ],
            "price": 212.33,
            "shipping": 7.99
        },
        {
            "key": "B01D27ERMO",
            "category": "laptop",
            "name": "Dell Inspiron Flagship 15.6-Inch FHD Touchscreen Backlit Keyboard Laptop PC (Intel Core i5-6200U, 8GB RAM, 1TB HDD, RealSense 3D Camera, DVD +/- RW, Bluetooth, Windows 10), Silver",
            "seller": "Dell",
            "wholePrice": "498",
            "priceFraction": "94",
            "stock": 14,
            "star": 3,
            "starCount": 3141,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51xk4birT2L._AC_US218_.jpg",
            "url": "https://www.amazon.com/Dell-15-6-Inch-Touchscreen-RealSense-Bluetooth/dp/B01D27ERMO/ref=sr_1_14?s=electronics&ie=UTF8&qid=1499124890&sr=1-14&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8.0 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "1.0 TB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5"
                }
            ],
            "price": 498.94,
            "shipping": 3.99
        },
        {
            "key": "B06X6J2RLY",
            "category": "laptop",
            "name": "HP 15.6-Inch HD Touchscreen Laptop (Intel Quad Core Pentium N3540 2.16 GHz, 4GB DDR3L-1600 Memory, 500 GB HDD, DVD Burner, HDMI, HD Webcam, Win 10)",
            "seller": "HP",
            "wholePrice": "287",
            "priceFraction": "94",
            "stock": 85,
            "star": 4,
            "starCount": 149,
            "img": "https://images-na.ssl-images-amazon.com/images/I/416UTZJ0FbL._AC_US218_.jpg",
            "url": "https://www.amazon.com/HP-15-6-Inch-Touchscreen-Pentium-DDR3L-1600/dp/B06X6J2RLY/ref=sr_1_15?s=electronics&ie=UTF8&qid=1499124890&sr=1-15&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4.0 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "500.0 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "pentium"
                }
            ],
            "price": 287.94,
            "shipping": 7.99
        },
        {
            "key": "B01N5G5PG2",
            "category": "laptop",
            "name": "ASUS Chromebook Flip C302CA-DHM4 12.5-Inch Touchscreen Intel Core m3 with 64GB storage and 4GB RAM",
            "seller": "Asus",
            "wholePrice": "499",
            "priceFraction": "00",
            "stock": 52,
            "star": 4,
            "starCount": 1146,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41LBkDN-S3L._AC_US218_.jpg",
            "url": "https://www.amazon.com/Chromebook-C302CA-DHM4-12-5-Inch-Touchscreen-storage/dp/B01N5G5PG2/ref=sr_1_16?s=electronics&ie=UTF8&qid=1499124890&sr=1-16&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "12.5 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Chrome"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "64 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core m"
                }
            ],
            "price": 499,
            "shipping": 0
        },
        {
            "key": "B01LZ6XKS6",
            "category": "laptop",
            "name": "Samsung Chromebook Plus Convertible Touch Laptop (XE513C24-K01US)",
            "seller": "Samsung",
            "wholePrice": "408",
            "priceFraction": "45",
            "stock": 96,
            "star": 4,
            "starCount": 3742,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41Ux4186xoL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Samsung-Chromebook-Convertible-Laptop-XE513C24-K01US/dp/B01LZ6XKS6/ref=sr_1_17?s=electronics&ie=UTF8&qid=1499124890&sr=1-17&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "12.3 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Chrome"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "32 GB"
                },
                {
                    "description": "Connectivity Technology",
                    "value": "wireless"
                }
            ],
            "price": 408.45,
            "shipping": 3.99
        },
        {
            "key": "B06XFGF7SN",
            "category": "laptop",
            "name": "Dell Inspiron 15.6\" Gaming Laptop (7th Gen Intel Core i7, 8 GB RAM, 1000 GB HDD + 128GB SSD), NVIDIA GTX 1050) (i5577-7359BLK-PUS)",
            "seller": "Dell",
            "wholePrice": "899",
            "priceFraction": "99",
            "stock": 57,
            "star": 3,
            "starCount": 3972,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41zfabBnrLL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Dell-Inspiron-Gaming-Laptop-i5577-7359BLK-PUS/dp/B06XFGF7SN/ref=sr_1_18?s=electronics&ie=UTF8&qid=1499124890&sr=1-18&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10 Home 64-bit English"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "1000 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5 6300hq"
                }
            ],
            "price": 899.99,
            "shipping": 3.99
        },
        {
            "key": "B01LT692RK",
            "category": "laptop",
            "name": "ASUS E200HA Portable Lightweight 11.6-inch Intel Quad-Core Laptop, 4GB RAM, 32GB Storage, Windows 10 with 1 Year Microsoft Office 365 Subscription",
            "seller": "Asus",
            "wholePrice": "199",
            "priceFraction": "00",
            "stock": 41,
            "star": 3,
            "starCount": 4074,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51zIMkOI70L._AC_US218_.jpg",
            "url": "https://www.amazon.com/Lightweight-11-6-inch-Quad-Core-Microsoft-Subscription/dp/B01LT692RK/ref=sr_1_19?s=electronics&ie=UTF8&qid=1499124890&sr=1-19&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "11.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "32 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "intel atom"
                }
            ],
            "price": 199,
            "shipping": 3.99
        },
        {
            "key": "B071LB1GG4",
            "category": "laptop",
            "name": "Samsung XE510C24-K01US Chromebook Pro",
            "seller": "Samsung",
            "wholePrice": "549",
            "priceFraction": "99",
            "stock": 91,
            "star": 4,
            "starCount": 1157,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41QCsi3gCrL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Samsung-XE510C24-K01US-Chromebook-Pro/dp/B071LB1GG4/ref=sr_1_20?s=electronics&ie=UTF8&qid=1499124890&sr=1-20&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "12.3 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Chrome"
                },
                {
                    "description": "Connectivity Technology",
                    "value": "wireless"
                },
                {
                    "description": "Hardware Platform",
                    "value": "Chrome"
                }
            ],
            "price": 549.99,
            "shipping": 0
        },
        {
            "key": "B01CVOLVPA",
            "category": "laptop",
            "name": "Acer Chromebook 14, Aluminum, 14-inch Full HD, Intel Celeron Quad-Core N3160, 4GB LPDDR3, 32GB, Chrome, CB3-431-C5FM",
            "seller": "Acer",
            "wholePrice": "294",
            "priceFraction": "98",
            "stock": 57,
            "star": 4,
            "starCount": 678,
            "img": "https://images-na.ssl-images-amazon.com/images/I/518PvURfFsL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Acer-Chromebook-Aluminum-Quad-Core-CB3-431-C5FM/dp/B01CVOLVPA/ref=sr_1_21?s=electronics&ie=UTF8&qid=1499124890&sr=1-21&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "14 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Chrome"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "32 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "celeron"
                }
            ],
            "price": 294.98,
            "shipping": 7.99
        },
        {
            "key": "B01EIUOSRS",
            "category": "laptop",
            "name": "Apple MMGF2LL/A MacBook Air 13.3-Inch Laptop (8GB RAM 128 GB SSD) MMGF2",
            "seller": "Apple",
            "wholePrice": "799",
            "priceFraction": "99",
            "stock": 51,
            "star": 4,
            "starCount": 3295,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41AerRC5u6L._AC_US218_.jpg",
            "url": "https://www.amazon.com/Apple-MMGF2LL-MacBook-13-3-Inch-Laptop/dp/B01EIUOSRS/ref=sr_1_22?s=electronics&ie=UTF8&qid=1499124890&sr=1-22&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "13.3 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Mac OS X"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "128 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5"
                }
            ],
            "price": 799.99,
            "shipping": 7.99
        },
        {
            "key": "B01JLCKP34",
            "category": "laptop",
            "name": "HP Stream Laptop PC 14-ax010nr (Intel Celeron N3060, 4 GB RAM, 32 GB eMMC) with Office 365 Personal for one year",
            "seller": "HP",
            "wholePrice": "219",
            "priceFraction": "99",
            "stock": 62,
            "star": 3,
            "starCount": 2286,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51h+5rcpStL._AC_US218_.jpg",
            "url": "https://www.amazon.com/HP-Stream-14-ax010nr-Celeron-Personal/dp/B01JLCKP34/ref=sr_1_23?s=electronics&ie=UTF8&qid=1499124890&sr=1-23&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "14 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "32 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "celeron"
                }
            ],
            "price": 219.99,
            "shipping": 7.99
        },
        {
            "key": "B071SF41Y9",
            "category": "laptop",
            "name": "Microsoft Surface Pro (Intel Core i5, 8GB RAM, 256GB)",
            "seller": "Microsoft",
            "wholePrice": "1,294",
            "priceFraction": "99",
            "stock": 99,
            "star": 3,
            "starCount": 461,
            "img": "https://images-na.ssl-images-amazon.com/images/I/418g6Q3eTHL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Microsoft-Surface-Intel-Core-256GB/dp/B071SF41Y9/ref=sr_1_25?s=electronics&ie=UTF8&qid=1499124890&sr=1-25&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "12.3 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10 Pro"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "8032"
                },
                {
                    "description": "Display Technology",
                    "value": "LCD"
                }
            ],
            "price": 1,
            "shipping": 7.99
        },
        {
            "key": "B01N5P6TJW",
            "category": "laptop",
            "name": "Samsung Chromebook 3, 11.6\", 4GB RAM, 16GB eMMC, Chromebook (XE500C13-K04US)",
            "seller": "Samsung",
            "wholePrice": "169",
            "priceFraction": "00",
            "stock": 36,
            "star": 3,
            "starCount": 2527,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41XCWymAVaL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Samsung-Chromebook-11-6-16GB-XE500C13-K04US/dp/B01N5P6TJW/ref=sr_1_26?s=electronics&ie=UTF8&qid=1499124890&sr=1-26&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "11.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Chrome OS"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "16 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "8032"
                }
            ],
            "price": 169,
            "shipping": 7.99
        },
        {
            "key": "B01M8J68W0",
            "category": "laptop",
            "name": "Kayond Bule Rose Pattern 12-13 inch Canvas laptop sleeve with pocket 12.5inch 13.3 inch laptop case macbook air 13 case macbook pro 13 sleeve",
            "seller": "kayond",
            "wholePrice": "11",
            "priceFraction": "99",
            "stock": 86,
            "star": 4,
            "starCount": 2359,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51zDiHyaE1L._AC_US218_.jpg",
            "url": "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_electronics_sr_pg1_1?ie=UTF8&adId=A03286941HBVHVI1MCDYH&url=https%3A%2F%2Fwww.amazon.com%2FKayond-Pattern-Canvas-12-5inch-macbook%2Fdp%2FB01M8J68W0%2Fref%3Dsr_1_27%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124890%26sr%3D1-27-spons%26keywords%3Dlaptop%26psc%3D1&qualifier=1499124889&id=6267744216991374&widgetName=sp_btf",
            "features": [],
            "price": 11.99,
            "shipping": 3.99
        },
        {
            "key": "B072TY6LZL",
            "category": "laptop",
            "name": "Microsoft Surface Laptop 13.5 inch Screen Protector, Megoo Premium [Tempered Glass] Anti-scratch bubble free Screen Protector for Microsoft Surface Laptop (2017 Release)",
            "seller": "Megoo",
            "wholePrice": "17",
            "priceFraction": "77",
            "stock": 75,
            "star": 0,
            "starCount": 3019,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51YGz9inR9L._AC_US218_.jpg",
            "url": "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_electronics_sr_pg1_2?ie=UTF8&adId=A08835611S2XQ8K5PH7WW&url=https%3A%2F%2Fwww.amazon.com%2FMicrosoft-Protector-Megoo-Tempered-Anti-scratch%2Fdp%2FB072TY6LZL%2Fref%3Dsr_1_28%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124890%26sr%3D1-28-spons%26keywords%3Dlaptop%26psc%3D1&qualifier=1499124889&id=6267744216991374&widgetName=sp_btf",
            "features": [],
            "price": 17.77,
            "shipping": 3.99
        },
        {
            "key": "B00OSTKZWM",
            "category": "android",
            "name": "RCA M1 4.0 Unlocked Cell Phone, Dual SIM, 5MP Camera, Android 4.4, 1.3GHz (White)",
            "seller": "RCA",
            "wholePrice": "57",
            "priceFraction": "99",
            "stock": 96,
            "star": 3,
            "starCount": 620,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51VCP05020L._AC_US218_.jpg",
            "url": "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_electronics_sr_pg1_1?ie=UTF8&adId=A03332262DHW9SCX1W5WM&url=https%3A%2F%2Fwww.amazon.com%2FRCA-M1-Unlocked-Camera-Android%2Fdp%2FB00OSTKZWM%2Fref%3Dsr_1_1%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124826%26sr%3D1-1-spons%26keywords%3Dandroid%26psc%3D1&qualifier=1499124825&id=1141793968325395&widgetName=sp_atf",
            "features": [
                {
                    "description": "Display Size",
                    "value": "4.0 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Android"
                },
                {
                    "description": "Cpu Model Speed",
                    "value": "1.3 GHz"
                },
                {
                    "description": "Special Feature",
                    "value": "smartphone"
                }
            ],
            "price": 57.99,
            "shipping": 3.99
        },
        {
            "key": "B01H2E0J5M",
            "category": "android",
            "name": "BLU R1 HD - 16 GB - Black - Prime Exclusive - with Lockscreen Offers & Ads",
            "seller": "BLU",
            "wholePrice": "59",
            "priceFraction": "99",
            "stock": 5,
            "star": 3,
            "starCount": 2318,
            "img": "https://images-na.ssl-images-amazon.com/images/I/416TS-ODxfL._AC_US218_.jpg",
            "url": "https://www.amazon.com/BLU-R1-HD-Exclusive-Lockscreen/dp/B01H2E0J5M/ref=sr_1_2?s=electronics&ie=UTF8&qid=1499124822&sr=1-2&keywords=android",
            "features": [
                {
                    "description": "Display Size",
                    "value": "5.0 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "16 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Android 6.0 Marshmallow"
                },
                {
                    "description": "Display Type",
                    "value": "LCD"
                },
                {
                    "description": "Special Feature",
                    "value": "card slots"
                }
            ],
            "price": 59.99,
            "shipping": 7.99
        },
        {
            "key": "B0713WPJKX",
            "category": "android",
            "name": "Celltronics Micro USB Cable,10FT Nylon Braided Tangle-free Data Sync Heavy Duty Android Charging Cable Power Cord High Speed USB2.0 for Samsung HTC LG MP3 Bluetooth Speaker-3 Pack",
            "seller": "Cell-Tronics",
            "wholePrice": "10",
            "priceFraction": "99",
            "stock": 87,
            "star": 4,
            "starCount": 3392,
            "img": "https://images-na.ssl-images-amazon.com/images/I/61+-qmTKy8L._AC_US218_.jpg",
            "url": "https://www.amazon.com/Celltronics-Tangle-free-Charging-Bluetooth-Speaker-3/dp/B0713WPJKX/ref=sr_1_3?s=electronics&ie=UTF8&qid=1499124822&sr=1-3&keywords=android",
            "features": [],
            "price": 10.99,
            "shipping": 3.99
        },
        {
            "key": "B01LPZD1N6",
            "category": "android",
            "name": "ATOTO 7\"HD Touchscreen 2Din Android Car Navigation Stereo - Quadcore Car Entertainment Multimedia w/ FM/RDS Radio,WIFI,BT,Mirror Link,and more(No DVD Player)M4171 (178101/16G)",
            "seller": "ATOTO",
            "wholePrice": "164",
            "priceFraction": "90",
            "stock": 20,
            "star": 3,
            "starCount": 4029,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51xI8gJTNYL._AC_US218_.jpg",
            "url": "https://www.amazon.com/ATOTO-Touchscreen-Android-Navigation-Stereo/dp/B01LPZD1N6/ref=sr_1_4?s=electronics&ie=UTF8&qid=1499124822&sr=1-4&keywords=android",
            "features": [
                {
                    "description": "Display Size",
                    "value": "7.0 inches"
                },
                {
                    "description": "Operating System",
                    "value": "Android"
                },
                {
                    "description": "Hardware Platform",
                    "value": "Android"
                },
                {
                    "description": "Cpu Model Manufacturer",
                    "value": "MTK"
                },
                {
                    "description": "Wireless Communication Technology",
                    "value": "AM/FM"
                }
            ],
            "price": 164.9,
            "shipping": 0
        },
        {
            "key": "B01N1SE4EP",
            "category": "android",
            "name": "NeuTab 7 inch Quad Core Android 5.1 Lollipop Tablet PC, Bluetooth 4.0, Dual Camera, FCC Certified(2017 Upgraded Edition)",
            "seller": "NeuTab",
            "wholePrice": "49",
            "priceFraction": "99",
            "stock": 50,
            "star": 3,
            "starCount": 4947,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41HNbRSKpfL._AC_US218_.jpg",
            "url": "https://www.amazon.com/NeuTab-Lollipop-Bluetooth-Certified-Upgraded/dp/B01N1SE4EP/ref=sr_1_5?s=electronics&ie=UTF8&qid=1499124822&sr=1-5&keywords=android",
            "features": [
                {
                    "description": "Display Size",
                    "value": "7.0 inches"
                },
                {
                    "description": "Operating System",
                    "value": "android 5.1 (Lollipop)"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "8.0 GB"
                },
                {
                    "description": "Connectivity Technology",
                    "value": "usb"
                },
                {
                    "description": "System Ram Type",
                    "value": "ddr3 sdram"
                }
            ],
            "price": 49.99,
            "shipping": 7.99
        },
        {
            "key": "B017LDNLIG",
            "category": "android",
            "name": "Tracfone Alcatel Onetouch Pixi Glitz A463BG",
            "seller": "Tracfone",
            "wholePrice": "19",
            "priceFraction": "94",
            "stock": 85,
            "star": 3,
            "starCount": 381,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51QdgznaNTL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Tracfone-Alcatel-Onetouch-Glitz-A463BG/dp/B017LDNLIG/ref=sr_1_6?s=electronics&ie=UTF8&qid=1499124822&sr=1-6&keywords=android",
            "features": [
                {
                    "description": "Display Size",
                    "value": "3.5"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "2 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Android 4.4 KitKat"
                },
                {
                    "description": "Display Type",
                    "value": "LCD"
                },
                {
                    "description": "Special Feature",
                    "value": "smartphone"
                }
            ],
            "price": 19.94,
            "shipping": 7.99
        },
        {
            "key": "B018IZ0SWI",
            "category": "android",
            "name": "BLU Advance 5.0 - Unlocked Dual Sim Smartphone - US GSM - Black",
            "seller": "BLU",
            "wholePrice": "59",
            "priceFraction": "99",
            "stock": 10,
            "star": 3,
            "starCount": 395,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41mXjdLezRL._AC_US218_.jpg",
            "url": "https://www.amazon.com/BLU-Advance-5-0-Unlocked-Smartphone/dp/B018IZ0SWI/ref=sr_1_7?s=electronics&ie=UTF8&qid=1499124822&sr=1-7&keywords=android",
            "features": [
                {
                    "description": "Display Size",
                    "value": "5 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Android"
                },
                {
                    "description": "Wireless Communication Technology",
                    "value": "GSM, 3G, 4G"
                },
                {
                    "description": "Cpu Model Speed",
                    "value": "1 GHz"
                }
            ],
            "price": 59.99,
            "shipping": 3.99
        },
        {
            "key": "B01N4HS7B8",
            "category": "android",
            "name": "Smart tv box Wechip V5 Android 6.0 Marshmallow 2g 16g Amlogic S905X quad core 4K Dual WiFi",
            "seller": "Wechip",
            "wholePrice": "53",
            "priceFraction": "99",
            "stock": 34,
            "star": 4,
            "starCount": 4740,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41q+adG0lNL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Smart-Wechip-Android-Marshmallow-Amlogic/dp/B01N4HS7B8/ref=sr_1_8?s=electronics&ie=UTF8&qid=1499124822&sr=1-8&keywords=android",
            "features": [],
            "price": 53.99,
            "shipping": 7.99
        },
        {
            "key": "B01LX0JZUM",
            "category": "android",
            "name": "ONSON Android Charger Cable,3Pack 10FT Extra Long Nylon Braided High Speed 2.0 USB to Micro USB Charging Cord Fast Charger Cable for Samsung Galaxy S7/S6 Edge,Note 5/4,HTC,LG,Nexus(Gray White)",
            "seller": "ONSON",
            "wholePrice": "11",
            "priceFraction": "99",
            "stock": 8,
            "star": 3,
            "starCount": 2636,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51P8qI8KzNL._AC_US218_.jpg",
            "url": "https://www.amazon.com/ONSON-Android-Charger-Braided-Charging/dp/B01LX0JZUM/ref=sr_1_9?s=electronics&ie=UTF8&qid=1499124822&sr=1-9&keywords=android",
            "features": [],
            "price": 11.99,
            "shipping": 3.99
        },
        {
            "key": "B072NYXDLY",
            "category": "android",
            "name": "5.0\" Phone Unlocked Dual Sim Quad Core 8GB Android 5.1 Cellphone Gold by TIMMY",
            "seller": "Timmy",
            "wholePrice": "68",
            "priceFraction": "99",
            "stock": 14,
            "star": 5,
            "starCount": 1182,
            "img": "https://images-na.ssl-images-amazon.com/images/I/411fzxxuuFL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Phone-Unlocked-Android-Cellphone-TIMMY/dp/B072NYXDLY/ref=sr_1_10?s=electronics&ie=UTF8&qid=1499124822&sr=1-10&keywords=android",
            "features": [
                {
                    "description": "Display Size",
                    "value": "5.0 inches"
                },
                {
                    "description": "Operating System",
                    "value": "google android"
                }
            ],
            "price": 68.99,
            "shipping": 3.99
        },
        {
            "key": "B071RK857H",
            "category": "android",
            "name": "QacQoc A12 Pro Android 6.0 TV BOX Amlogic S912 Octa-Core [2G DDR3/16G eMMC] Dual Wifi 2.4G/5G AC OTA Update 4K 1000M Android TV Box",
            "seller": "QacQoc",
            "wholePrice": "65",
            "priceFraction": "99",
            "stock": 1,
            "star": 5,
            "starCount": 1836,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51+GT3mluJL._AC_US218_.jpg",
            "url": "https://www.amazon.com/QacQoc-A12-Android-Amlogic-Octa-Core/dp/B071RK857H/ref=sr_1_11?s=electronics&ie=UTF8&qid=1499124822&sr=1-11&keywords=android",
            "features": [
                {
                    "description": "Connectivity Technology",
                    "value": "wi-fi ready"
                },
                {
                    "description": "Special Feature",
                    "value": "network ready"
                }
            ],
            "price": 65.99,
            "shipping": 7.99
        },
        {
            "key": "B06XWMQRS6",
            "category": "android",
            "name": "QacQoc M9C max Android 6.0 Marshmallow TV Box New Amlogic S905X Chipset [2G DDR3/16G eMMC] 4K Smart Box Unlocked 2.4G WIFI Media Player",
            "seller": "QacQoc",
            "wholePrice": "49",
            "priceFraction": "99",
            "stock": 54,
            "star": 4,
            "starCount": 2618,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41Sx5HrzuhL._AC_US218_.jpg",
            "url": "https://www.amazon.com/QacQoc-Android-Marshmallow-Amlogic-Unlocked/dp/B06XWMQRS6/ref=sr_1_12?s=electronics&ie=UTF8&qid=1499124822&sr=1-12&keywords=android",
            "features": [],
            "price": 49.99,
            "shipping": 3.99
        },
        {
            "key": "B01N41AKT3",
            "category": "android",
            "name": "Antimi Sweatproof Smart Watch Phone for Android HTC Sony Samsung LG Google Pixel /Pixel and iPhone 5 5S 6 6 Plus 7 Smartphones Black",
            "seller": "Antimi",
            "wholePrice": "25",
            "priceFraction": "99",
            "stock": 66,
            "star": 3,
            "starCount": 3316,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41Z3XFc1-5L._AC_US218_.jpg",
            "url": "https://www.amazon.com/Antimi-Sweatproof-Android-Samsung-Smartphones/dp/B01N41AKT3/ref=sr_1_13?s=electronics&ie=UTF8&qid=1499124822&sr=1-13&keywords=android",
            "features": [
                {
                    "description": "Operating System",
                    "value": "Android/iOS"
                },
                {
                    "description": "Hardware Platform",
                    "value": "Android"
                }
            ],
            "price": 25.99,
            "shipping": 3.99
        },
        {
            "key": "B06XY8W1DC",
            "category": "android",
            "name": "SUNNZO T2 TV Box Streaming Devices for TV/Streaming Media Players Android 6.0 4K WIFI",
            "seller": "sunnzo",
            "wholePrice": "29",
            "priceFraction": "99",
            "stock": 97,
            "star": 3,
            "starCount": 4951,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51sZTRzpQjL._AC_US218_.jpg",
            "url": "https://www.amazon.com/T2-Streaming-Devices-Players-Android/dp/B06XY8W1DC/ref=sr_1_14?s=electronics&ie=UTF8&qid=1499124822&sr=1-14&keywords=android",
            "features": [],
            "price": 29.99,
            "shipping": 7.99
        },
        {
            "key": "B01N0VVQ13",
            "category": "android",
            "name": "Goodsail Micro USB Cables, 3Pack 6FT/2M durable Nylon Braided High Charging Speed USB 2.0 A Male to Micro USB Cord For Samsung, HTC, Motorola, Blackberry, Tablets and Android Smartphones Blue Black",
            "seller": "Goodsail",
            "wholePrice": "9",
            "priceFraction": "99",
            "stock": 80,
            "star": 4,
            "starCount": 4758,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51+MK7D4pLL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Goodsail-Charging-Motorola-Blackberry-Smartphones/dp/B01N0VVQ13/ref=sr_1_15?s=electronics&ie=UTF8&qid=1499124822&sr=1-15&keywords=android",
            "features": [],
            "price": 9.99,
            "shipping": 7.99
        },
        {
            "key": "B01JOT42JW",
            "category": "android",
            "name": "2017 Model GooBang Doo Android 6.0 TV Box, Abox Android TV Box Amlogic S905X 64 Bits and True 4K Playing",
            "seller": "GooBang Doo",
            "wholePrice": "39",
            "priceFraction": "99",
            "stock": 54,
            "star": 3,
            "starCount": 856,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41sPPh71RXL._AC_US218_.jpg",
            "url": "https://www.amazon.com/GooBang-Doo-Android-Amlogic-Playing/dp/B01JOT42JW/ref=sr_1_16?s=electronics&ie=UTF8&qid=1499124822&sr=1-16&keywords=android",
            "features": [],
            "price": 39.99,
            "shipping": 3.99
        }


    ]
    const first10 = Data.slice(0, 15);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([])
    const handleAddProduct = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-continer">

                {
                    products.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)
                }

            </div>
            <div className="cart-container">
              <Cart cart={cart} />
            </div>
        </div>
    )

};

export default Shop;