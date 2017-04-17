/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*
         * @author Luca Ricci
         * I was asked to:
         * Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each feed has a URL defined', function() {
            for(var i = 0, l = allFeeds.length; i < l; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(typeof allFeeds[i].url).toEqual("string");
                expect(allFeeds[i].url).not.toBe("");
            }
        });

        /*
         * @author Luca Ricci
         * I was asked to:
         * Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed has a NAME defined', function() {
            for(var i = 0, l = allFeeds.length; i < l; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(typeof allFeeds[i].name).toEqual("string");
                expect(allFeeds[i].name).not.toBe("");
            }
        });
    });


    /**
     * @author Luca Ricci
     * I was asked to:
     * Write a new test suite named "The menu"
     */
    describe('The menu', function() {
        /*
         * @author Luca Ricci
         * I was asked to:
         * Write a test that ensures the menu element is
         * hidden by default.
         */
        it('element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        /*
         * @author Luca Ricci
         * I was asked to:
         * Write a test that ensures the menu changes
         * visibility when the menu icon is clicked.
         * We test if the menu display when clicked
         * and it hide when clicked again.
         */
        it('should change visibility when menu icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

    });

}());
