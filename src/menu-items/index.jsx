// project import
import dashboard from './dashboard';
import pages from './page';
import utilities from './utilities';
import support from './support';
import test1 from './test1';
import test2 from './test2'; // Importing the new test2 menu item

// ==============================|| MENU ITEMS ||============================== //
//THIS menuItems OBJECT BELOW IS USED IN THE DRAWER CONTENT AND SIDEBAR DO NOT DELETE IT AS IT IS FROM THE ORIGINAL TEMPLATE
// const menuItems = {
//   items: [dashboard, pages, utilities, support, test1]
// };


//THIS menuItems OBJECT BELOW IS USED IN THE DRAWER CONTENT AND SIDEBAR FOR PLAYING AROUND WITH THE MENU ITEMS
const menuItems = {
  items: [dashboard, test1,test2]
};

export default menuItems;
