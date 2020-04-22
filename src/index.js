import {
  doc,
  setToEnv
} from './components/utils/helpers';
import List from './components/list';
import ListItem from './components/list-item';

const rootNode = doc.getElementById('app'),
  beforeElem = doc.getElementById('add-new-list'),
  btnAddList = doc.getElementById('btn-add-list');

let listObjects = [];

setToEnv('lists', listObjects);

btnAddList.addEventListener('click', () => {
  rootNode.setAttribute('style', 'width:' + ((listObjects.length + 2) * 284) + 'px');
  if (listObjects.length === 0) {
    btnAddList.textContent = '＋ Add Another list';
  }
  let list = new List(rootNode, beforeElem);
  list.setIdx(listObjects.push(list) - 1);
});

window.addEventListener('DOMContentLoaded', () => {
  setToEnv('ic-height', window.innerHeight * 0.7);
});