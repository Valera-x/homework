// Do not change any of the function names

const makeCat = (name, age) => {
    // create a new object with a name property with the value set to the name argument
    // add an age property to the object with the value set to the age argument
    // add a method called meow that returns the string 'Meow!'
    // return the object
        let cat = {};
        cat.name = name;
        cat.age = age;
        cat.meow = function (){
            return 'Meow!';
        };
        return cat
}
console.log(makeCat('Luisa', '3'));


const addProperty = (object, property) => {
    // add the property to the object with a value of null
    // return the object
    // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
    object = null;
    return object
}
console.log(addProperty());


const invokeMethod = (object, method) => {
    // method is a string that contains the name of a method on the object
    // invoke this method
    // nothing needs to be returned
    object[method] ();
}


const multiplyMysteryNumberByFive = (mysteryNumberObject) => {
    // mysteryNumberObject has a property called mysteryNumber
    // multiply the mysteryNumber property by 5 and return the product
    return mysteryNumberObject * 5
}
console.log(multiplyMysteryNumberByFive());



const deleteProperty = (object, property) => {
    // remove the property from the object
    // return the object
    delete object[property];
    return object
}


const newUser = (name, email, password) => {
    // create a new object with properties matching the arguments passed in.
    // return the new object
    let user = {};
    user.name = name;
    user.email = email;
    user.password = password;
    return user;
}
console.log(newUser('Jason', 'jason.st@mail.ru', 'STatham67.07'));

const hasEmail = (user) => {
    // return true if the user has a value for the property 'email'
    // otherwise return false
    if (user.email){
        return true;
    } else {
        return false
    }
}
console.log(hasEmail('Jason'));



const hasProperty = (object, property) => {
    // return true if the object has the value of the property argument
    // property is a string
    // otherwise return false
    if (object.hasOwnProperty(property)){
        return true
    }else {
        return false
    }
}
console.log(hasProperty('Valera', 'Valera'));



const verifyPassword = (user, password) => {
    // check to see if the provided password matches the password property on the user object
    // return true if they match
    // otherwise return false
    if (password === user.password){
        return true
    }else {
        return  false
    }
};

const updatePassword = (user, newPassword) => {
    // replace the existing password on the user object with the value of newPassword
    // return the object
    user.password = newPassword;
    return user
};

let friends = ['John', 'Brad', 'Hurry']
const addFriend = (user, newFriend) => {
    // user has a property called friends that is an array
    // add newFriend to the end of the friends array
    // return the user object
    user.push(newFriend);
    return user;
}
console.log(addFriend(friends, 'Nik'));

let mans = ['John', 'Brad', 'Hurry']
const setUsersToPremium = (users) => {
    // users is an array of user objects.
    // each user object has the property 'isPremium'
    // set each user's isPremium property to true
    // return the users array
    for (let i = 0; i < users.length; i++)
        users[i].isPremium = true;
    return users;
}
console.log(setUsersToPremium(mans));


let numbers = [878 ]
const sumUserPostLikes = (user) => {
    // user has an array property called 'posts'
    // posts is an array of post objects
    // each post object has an integer property called 'likes'
    // sum together the likes from all the post objects
    // return the sum
    let sum = 0 ;
    user.posts.forEach(function (post){
        sum += post.likes;
    });
    return sum;
}
(sumUserPostLikes(numbers));

const addCalculateDiscountPriceMethod = (storeItem) => {
    // Add a method to the storeItem object called 'calculateDiscountPrice'
    // This method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
    // The method then subtracts the discount from the price and returns the discounted price
    // example:
    // price -> 20
    // discountPercentage -> .2
    // discountPrice = 20 - (20 * .2)
    // Make sure you return storeItem after adding the method to it
    // hint: arrow functions don't bind a this
};

// Do not modify code below this line.
// --------------------------------

// module.exports = {
//     makeCat,
//     addProperty,
//     invokeMethod,
//     multiplyMysteryNumberByFive,
//     deleteProperty,
//     newUser,
//     hasEmail,
//     hasProperty,
//     verifyPassword,
//     updatePassword,
//     addFriend,
//     setUsersToPremium,
//     sumUserPostLikes,
//     addCalculateDiscountPriceMethod
// };
