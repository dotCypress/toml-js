describe('toml.js spec', function () {
    var result;

    describe('toml construction', function () {
        it ('should exist', function () {
            expect(toml).to.be.ok;
        })
    });

    describe('when parsing a comment', function () {
        beforeEach(function () {
            result = toml.parse('# comment');
        });

        it ('should be empty object', function () {
            expect(result).to.be.empty;
        });
    });

    describe('when parsing a group', function () {
        beforeEach(function () {
            result = toml.parse('[group]');
        });

        it ('should create new group', function () {
            expect(result.group).to.be.ok;
        });
    });

});