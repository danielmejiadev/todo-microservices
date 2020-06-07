// Controller
import { BaseController } from '../base.api.controller';

// Under testing
import { BaseControllerApi } from '../base.api.controller.decorator';

/**
 * Test file for {@link controller.decorator.ts}
 * @author Daniel Mejia
 * @File base.controller.decorator.spec.ts
 */
describe('Base Controller Decorator: Test suit', () => {
  const options = {
    exclude: ['updateResource'],
    paramTypes: {
      list: [String],
      create: [String],
    }
  };
  const decorator = BaseControllerApi(options);
  class TestController {};

  it('should create the endpoints base on decorator and options', () => {
    decorator(TestController);

    const routes = Object.getOwnPropertyNames(BaseController.prototype);
    const routesDefined = routes.every((route) => typeof TestController.prototype[route] === 'function');
    expect(routesDefined).toBeTruthy();
  });
});
