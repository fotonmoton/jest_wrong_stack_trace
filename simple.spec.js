const anotherData = {
    key: 'value',
};

const [key] = anotherData;

describe('jest stack trace', () => {
    it('should point to right line', () => {
        expect(true).toBe(true);
    });
});
