import {
  doc,
  setToEnv,
  saveToLocalStorage,
  restoreFromLocalStorage
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

window.addEventListener('DOMContentLoaded', function() {
  let initData = restoreFromLocalStorage(), list, item;
  setToEnv('ic-height', window.innerHeight * 0.7);
  if (initData) {
    for (let lIdx = 0, ll = initData.length; lIdx < ll; lIdx++) {
      list = new List(rootNode, beforeElem, initData[lIdx].title);
      for (let i = 0, l = initData[lIdx].items.length; i < l; i++) {
        list.saveNote(initData[lIdx].items[i].text);
      }
      list.setIdx(listObjects.push(list) - 1);
    }
  }
  rootNode.setAttribute('style', 'width:' + ((listObjects.length + 1) * 284) + 'px');
});

window.addEventListener('click', function () {
  saveToLocalStorage();
  this.console.log(window.localStorage.getItem('dumpedData'));
})