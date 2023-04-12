function createNode(value = null) {
    return {
      value,
       nextNode: null 
    }
}

function createLinkedList() {
   let list = null;

   const append = (value) => {
      newNode = createNode(value);
      if (!list) {
         list = newNode;
      } else {
         let temp = list;
         while (temp.nextNode != null) {
            temp = temp.nextNode;
         }
         temp.nextNode = newNode;
      }
   }

   const prepend = (value) => {
      newNode = createNode(value);
      if (!list) {
         list = newNode;
      } else {
         newNode.nextNode = list;
         list = newNode;
      }
   } 

   const size = () => {
      let num = 0;

      let temp = list;
      while (temp != null)
      {
         ++num;
         temp = temp.nextNode;
      }
      return num;
   }

   const head = () => list;

   const tail = () => {
      temp = list;
      while (temp.nextNode != null) {
         temp = temp.nextNode;
      }
      return temp;
   }

   const at = (index) => {
      if (index >= size() || index < 0) return "Index out of bounds";
      temp = list;
      for (let i = 1; i <= index; ++i) {
         temp = temp.nextNode;
      }
      return temp;
   }

   const pop = () => {
      if (!list) return;
      if (list.nextNode === null) list.nextNode = null;
      let temp = list;
      while (temp.nextNode.nextNode !== null) {
         temp = temp.nextNode;
      }
      temp.nextNode = null;
   }

   const contains = (value) => {
      let temp = list;
      while (temp !== null) {
         if (temp.value === value) return true;
         temp = temp.nextNode;
      }
      return false;
   }

   const find = (value) => {
      let temp = list, index = 0;
      while (temp !== null) {
         if (temp.value === value) return index;
         ++index;
         temp = temp.nextNode;
      }
      return null;
   }

   const toString = () => {
      let temp = list, valueString = '';
      while (temp != null) {
         valueString += `( ${temp.value} ) -> `;
         temp = temp.nextNode;
      }

      return valueString + ' null'
   }

   return {
      append,
      prepend,
      size,
      head,
      tail,
      at,
      pop,
      contains,
      find,
      toString,
   }
}

const myList = createLinkedList();
console.log(myList.toString());
myList.append(3);
myList.prepend(2);
myList.prepend(1);
myList.prepend('go!');
console.log(myList.toString());
console.log(myList.size());
console.log(myList.head());
console.log(myList.tail());
console.log(myList.at(2));
console.log(myList.find(2));
console.log(myList.contains(5));
console.log(myList.contains(2));
myList.pop();
myList.pop();
console.log(myList.toString());