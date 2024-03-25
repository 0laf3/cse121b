/* LESSON 3 - Programming Tasks */

let myProfile = {
    name: 'João Sebastião CApindissa',
    photo: {
        src: 'images/IMG_20201102_111303.jpg',
        alt: 'My Profile Picture'
    },

    favoriteFoods: [
        'Angolan Food',
        'Seafood',
        'Sushi',
        'Chines food',
        'South Afrinan Food'
    ],

    hobbies: [
        'Watching TV',
        'Running',
        'Swimming',
        'Fishing',
    ],

    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
let places = [
    
    {
        place: 'Angola',
        length: '20 years'
    },
    {
        place: 'South Africa', 
        length: '15 years'
    },

    {
        place: 'China',
        length: '2 years'
    },
];

places.forEach(place => {
    myProfile.placesLived.push(place);
});
console.log(myProfile.placesLived);




/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#favorite-foods').appendChild(li);
}
);

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#hobbies').appendChild(li);
}
);

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd')
    dt.textContent = placesLived.place;
    dd.textContent = placesLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
}
);