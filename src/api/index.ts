import Archives from './archives';
import Blog from './blog';
import Login from './login';
import Search from './search';
import Serial from './serial';
import Tag from './tag';
import System from './system';
import Apps from './apps';

export default [
    ...Blog,
    ...Serial,
    ...Tag,
    ...Search,
    ...Archives,
    ...Login,
    ...System,
    ...Apps,
];
