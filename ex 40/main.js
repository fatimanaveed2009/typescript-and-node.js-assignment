// Write a function called make_album() that builds an object describing a music album.
/*The function should take in an artist name and an album title, and it should return an object cotaining
these two pieces of information.
 Use the function to make three dictionaries representing different albums.
Print each return value to show that objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add the value to the albums object.
Make at leastone new function call that includes the number of tracks on an album.*/
function make_album(artistname, albumtitle, tracks) {
    var album = {
        artistname: artistname,
        albumtitle: albumtitle
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('artistname 1', 'albumtitle 1');
console.log(album1);
var album2 = make_album('artistname 2', 'albumtitle 2');
console.log(album2);
var album3 = make_album('artistname 3', 'albumtitle 3', 12);
console.log(album3);
