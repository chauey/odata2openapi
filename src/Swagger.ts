import Info from './Info';
import Paths from './Paths';
import Definitions from './Definitions';

// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swagger-object
interface Swagger {
  swagger: '2.0';
  info: Info;
  host?: string;
  basePath?: string;
  schemes?: Array<string>;
  paths: Paths;
  produces: Array<string>;
  definitions: Definitions;
}

export default Swagger;