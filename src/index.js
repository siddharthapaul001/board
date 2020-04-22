import {
  doc
} from './components/utils/helpers';
import List from './components/list';
import ListItem from './components/list-item';

const rootNode = doc.getElementById('app'),
  beforeElem = doc.getElementById('add-new-list'),
  btnAddList = doc.getElementById('btn-add-list');

let listObjects = [];

btnAddList.addEventListener('click', () => {
  rootNode.setAttribute('style', 'width:' + ((listObjects.length + 2) * 284) + 'px');
  // let item = new ListItem();
  // item.configure({ text: 'Hi this is Siddhartha' });
  let list = new List(rootNode, beforeElem);
  // list.addItem(item);
  listObjects.push(list);
});