import * as api from './api';

describe('jest stack trace', () => {
    it('should point to right line', () => {
        return api.getData().then(data => {
            const [firstArrayElement] = data;
            expect(firstArrayElement).toBeDefined();
        });
    });
});
