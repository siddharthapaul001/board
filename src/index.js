import {
  doc,
  setToEnv,
  saveToLocalStorage,
  restoreFromLocalStorage,
  resetLocalStorage
} from './components/utils/helpers';
import List from './components/list';

const rootNode = doc.getElementById('app'),
  beforeElem = doc.getElementById('add-new-list'),
  btnAddList = doc.getElementById('btn-add-list'),
  btnReset = doc.getElementById('btn-reset');

let listObjects = [], bypassStorage = false;

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
  let initData = restoreFromLocalStorage(), list;
  setToEnv('ic-height', window.innerHeight * 0.7);
  if (initData) {
    for (let lIdx = 0, ll = initData.length; lIdx < ll; lIdx++) {
      list = new List(rootNode, beforeElem, { title: initData[lIdx].title });
      for (let i = 0, l = initData[lIdx].items.length; i < l; i++) {
        list.saveNote(initData[lIdx].items[i].text);
      }
      list.setIdx(listObjects.push(list) - 1);
    }
  }
  rootNode.setAttribute('style', 'width:' + ((listObjects.length + 1) * 284) + 'px');
});

window.addEventListener('beforeunload', function () {
  if (!bypassStorage) {
    saveToLocalStorage();
  }
});

btnReset.addEventListener('click', function() {
  bypassStorage = true;
  resetLocalStorage();
  window.location.reload();
});