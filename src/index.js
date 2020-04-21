import {
  doc
} from './components/utils/helpers';
import List from './components/list';

const rootNode = doc.getElementById('app'),
  beforeElem = doc.getElementById('add-new-list'),
  btnAddList = doc.getElementById('btn-add-list');

let listObjects = [];

btnAddList.addEventListener('click', () => {
  rootNode.setAttribute('style', 'width:' + ((listObjects.length + 2) * 284) + 'px');
  let list = new List(rootNode, beforeElem);
  listObjects.push(list);
});