// Create an observer instance
var rooElm = document.querySelector('.jss77');
var observer = new MutationObserver(function( mutations ) {
    mutations.forEach(function( mutation ) {
        var newNodes = mutation.addedNodes; // DOM NodeList
        var thankYouElm = document.querySelector('h5.MuiTypography-gutterBottom');
        if( thankYouElm !== null ) { // If there are new nodes added
            console.log('mutation=',thankYouElm)
        }
    });
});

// Configuration of the observer:
var config = {
    attributes: true,
    childList: true,
    characterData: true
};

// Pass in the target node, as well as the observer options
observer.observe(rooElm, config);

// Later, you can stop observing
observer.disconnect();
