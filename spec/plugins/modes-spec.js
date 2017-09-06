var MockBot = require('../helpers/mock-bot');
var MockTransport = require('../helpers/mock-transport');


describe('IRC modes plugin', function () {
    var mockBot;
    var mockIRC;

    beforeEach(function () {
        mockIRC = new MockTransport();
        mockIRC.irc = {
            send: jasmine.createSpy(),
        };

        mockBot = new MockBot(
            {'plugins.modes.irc': '+B'},
            {irc: mockIRC}
        );
    });

    it('should send a MODE command to an IRC transport once registered', function () {
        mockIRC.emit('registered');
        expect(mockIRC.irc.send).toHaveBeenCalledWith('MODE', '+B');
    });
});
