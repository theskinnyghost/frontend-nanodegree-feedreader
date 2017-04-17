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

}());
