import defaultR from './default';
import plainR from './plain';
import jsonR from './json';


const renderers = {
  default: defaultR,
  plain: plainR,
  json: jsonR,
};

const getRenderer = format => renderers[format];

const render = (ast, format = 'default') => getRenderer(format)(ast);


export default render;
