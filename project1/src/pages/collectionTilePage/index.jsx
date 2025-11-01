import React from "react";
import ExampleOfTile from "../../components/exampleOfTile";
import shining from "../../assets/images/tileCollections/shining.png";
import ginardo from "../../assets/images/tileCollections/ginardo.png";
import rane from "../../assets/images/tileCollections/rane.png";
import rotterdam from "../../assets/images/tileCollections/rotterdam.png";
import vestanvind from "../../assets/images/tileCollections/vestanvind.png";
import './style.css';

const CollectionTilePage = () => {
    return (
        <div className="collectionTilePage">
            <h2 className="sectionHeadline"> Коллекции плиток</h2>
                <div className="collectionTile-examples">
                    <ExampleOfTile
                        style={{backgroundImage: `url(${shining})`, gridArea: "exampleTile1"}}
                        title="Сияние"
                        description="Kerama Marazzi"
                    />
                    <ExampleOfTile
                        style={{backgroundImage: `url(${vestanvind})`, gridArea: "exampleTile2"}}
                        title="Вестанвинд "
                        description="LB-Ceramics"
                    />
                    <ExampleOfTile
                        style={{backgroundImage: `url(${rotterdam})`, gridArea: "exampleTile3"}}
                        title="Rotterdam"
                        description="Gracia Ceramica"
                    />
                    <ExampleOfTile
                        style={{backgroundImage: `url(${rane})`, gridArea: "exampleTile4"}}
                        title="Rane"
                        description="Alma Ceramica"
                    />
                    <ExampleOfTile
                        style={{backgroundImage: `url(${ginardo})`, gridArea: "exampleTile5"}}
                        title="Гинардо"
                        description="Kerama Marazzi"
                    />
                </div>
        </div>);
}

export default CollectionTilePage;