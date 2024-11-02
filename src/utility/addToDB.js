import { toast } from "react-toastify";

const getStoreReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr) {
      const storeList = JSON.parse(storedListStr);
      return storeList;
    }
    else{
      return [];
    }
}

const addToStoreReadList = (id) => {
    const storeList = getStoreReadList();
    if(storeList.includes(id)){
        console.log(id, 'already is in')
    }
    else{
        storeList.push(id);
        const storedListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storedListStr);
        toast('This book is added to your read list.')
    }
}

export { addToStoreReadList, getStoreReadList }