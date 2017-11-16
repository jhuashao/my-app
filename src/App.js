import React, { Component } from 'react';
import './App.css';

// import HelloWorld from './HelloWorld';
// import Counter from './Counter';

import FilteredList from './FilteredList';

const majors = [
 {name: "Apparel Design", type1: "BFA", type2: "Design", image: "apparel.jpg"},
 {name: "Architecture", type1: "BFA+MFA", type2: "Design", image: "architecture.jpg"},
 {name: "Ceramics", type1: "BFA+MFA", type2: "Fine Art", image: "ceramics.jpg"},
 {name: "Digital + Media", type1: "BFA+MFA", type2: "Design", image: "digitalmedia.jpg"},
 {name: "Film / Animation / Video", type1: "BFA", type2: "Design", image: "fav.jpg"},
 {name: "Furniture Design", type1: "BFA+MFA", type2: "Design", image: "furniture.jpg"},
 {name: "Glass", type1: "BFA+MFA", type12: "Fine Art", image: "glass.jpg"},
 {name: "Graphic Design", type1: "BFA+MFA", type2: "Design", image: "graphicdesign.jpg"},
 {name: "Illustration", type1: "BFA", type2: "Fine Art", image: "illustration.jpg"},
 {name: "Industrial Design", type1: "BFA+MFA", type2: "Design", image: "id.jpg"},
 {name: "Interior Architecture", type1: "BFA+MFA", type2: "Design", image: "intar.jpg"},
 {name: "Jewelry + Metalsmithing", type1: "BFA+MFA", type2: "Fine Art", image: "jw.jpg"},
 {name: "Landscape Architecture", type1: "BFA+MFA", type2: "Design", image: "la.jpg"},
 {name: "Painting", type1: "BFA+MFA", type2: "Fine Art", image: "painting.jpg"},
 {name: "Photography", type1: "BFA+MFA", type2: "Fine Art", image: "photo.jpg"},
 {name: "Printmaking", type1: "BFA+MFA", type2: "Fine Art", image: "printmaking.jpg"},
 {name: "Sculpture", type1: "BFA+MFA", type2: "Fine Art", image: "sculpture.jpg"},
 {name: "Textiles", type1: "BFA+MFA", type2: "Fine Art", image: "textiles.jpg"},
];


class App extends Component {
   render() {
       return (
           <div className="App">
                {/*
                  The list of majors will be passed into the FilteredList
                  component the items property.
                */}
               <FilteredList items={majors} />
           </div>
       );
   }
}

export default App;
