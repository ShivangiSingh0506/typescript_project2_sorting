import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';





// const numbersCollection = new NumbersCollection([10, 4, 9, -5 ,20]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);


// const charactersCollection = new CharactersCollection('shivangi');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);


// const linkedList= new LinkedList();
// linkedList.add(500);
// linkedList.add(10);
// linkedList.add(-6);
// linkedList.add(25);
// linkedList.add(0);
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();


// const numbersCollection = new NumbersCollection([3,1,5,2,7,5,0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);


// const charactersCollection = new CharactersCollection('shivangi');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-6);
linkedList.add(25);
linkedList.add(0);
linkedList.sort();
linkedList.print(); 