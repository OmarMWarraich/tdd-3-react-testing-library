import { todos } from "../makeTodos";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: jest.fn().mockImplementation((url) => {
        switch (url) {
            case "https://jsonplaceholder.typicode.com/todos":
                return Promise.resolve({ data: todos })
            default:
                throw new Error(`UNMATCHED URL: ${url}`);
        }
    }),
};