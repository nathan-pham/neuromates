import { useState } from "react"

const foodData = [
    {
        nutrient: "B12",
        image: "https://th.bing.com/th/id/Re804ba4af1857ab1b2ace691afad24f8?rik=pRIb3Ma9KMWvCg&riu=http%3a%2f%2fwww.wifss.ucdavis.edu%2fwp-content%2fuploads%2f2015%2f03%2fMilk-Pouring-istock-6x4.jpg&ehk=iO0ykbJLhNCc2Q49PYVqe%2fNk8rHAZGbn0LHUGWy8jjU%3d&risl=&pid=ImgRaw",
        sources: [ 
            "Milk products", 
            "Meat", 
            "Poultry", 
            "Fish", 
            "Spinach" 
        ]
    },
    {
        nutrient: "Folate",
        image: "https://i2.wp.com/www.theayurveda.org/wp-content/uploads/2015/08/Spinach-leaves.jpg",
        sources: [ 
            "Leafy vegetables (spinach)", 
            "Dry beans and peas", 
            "Fortified cereals", 
            "Grain products",
            "Tomatoes",
            "Oranges",
            "Chickpeas",
            "Beets",
            "Soybeans",
            "Fish",
            "Eggs"
        ]
    },
    {
        nutrient: "Vitamin E",
        image: "https://www.dailyharvestmarket.com/wp-content/uploads/2014/06/Avocado.jpg",
        sources: [
            "Vegetable oil",
            "Whole grain",
            "Leafy vegetabes",
            "Avocados"
        ]
    },
    {
        nutrient: "Other Antioxidants",
        image: "https://www.healthline.com/hlcmsresource/images/AN_images/blueberries-1200x628-facebook.jpg",
        sources: [
            "Blueberries",
            "Sweet potatoes",
            "Pomegranates",
            "Carrots"
        ]
    },
    {
        nutrient: "Polyunsaturated Omega 3",
        image: "https://th.bing.com/th/id/R0aba449c35c37f0f6cc6d5ad515147ab?rik=CVIsMzyZDyamgw&riu=http%3a%2f%2fhowafrica.com%2fwp-content%2fuploads%2f2016%2f02%2fwalnuts.jpg&ehk=xsKeh8cZNQcz%2b2oeeB411pPA0INNidf32A93ytuDIbI%3d&risl=&pid=ImgRaw",
        sources: [
            "Fish",
            "Walnuts",
            "Flaxseed",
            "Canola"
        ]
    }
]

const FoodItem = ({ nutrient, image, sources, active, onClick }) => {
    return (
        <div className={ `food-item ${ active ? "active" : "" }` }>
            <img src={ image } alt="Food" onClick={ onClick } />
            {
                active
                    ? (
                        <div className="description">
                            <h2>{ nutrient }</h2>
                            <p>{ sources.join(", ") }</p>
                        </div>
                    )
                    : ( 
                        <></> 
                    )
            }
        </div>
    )
}

const Health = () => {
    let [ active, setActive ] = useState("B12");

    return (
        <>
            <ul>
                <li>Eat a varied dit low in animal fat and high in fruits, whole grains, vegetables, and proteins.</li>
                <li>Omega 3 fatty acids found in water-fatty fish, leafy vegetables, grains, nuts ,and seeds are great for the brain. Other sources of essential fatty acids are found in cooking oils and cereal.</li>
                <li>Eat often; you can try a diet of 5 - 6 small meals to help maintain blood sugar levels and better nutrient absorption</li>
                <li>Properly hydrate with around 36 - 64 oz. of water</li>
                <li>Take multivitamins but be careful with supplements (herbal, natural, or alternative). Supplements are unregulated and are not scientifically supported, so discuss it with your Health Care Provider. </li>
                <li>Manage your caffeine and sugar. Overusage of either can interfere with attention and focus.</li>
            </ul>
            <div className="food-selection">
                {
                    foodData.map(v => {
                        let data = v;
                        data.active = data.nutrient === active;
                        data.onClick = () => {
                            setActive(data.nutrient);
                        }
                        return data
                    }).sort((a, b) => {
                        return a.active * 1 - b.active *1;
                    }).map((v, i) => <FoodItem { ...v } key={ i } />)
                }
            </div>
        </>
    )
}

export default Health;