/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/

let fav_transp:Array<string> = ["Tesla", "Bently", "Rolls-Roys", "Lexus Ls", "Kawasaki Ninja", "Suzuki Hayabusa"];
for (var i = 0; i < fav_transp.length; i++) {
    console.log("I would like to own a ".concat(fav_transp[i]));
}    