
//Arrays methods
//Push method
//1)

let fruits=["apple", "banana", "mango"];
console.log(fruits);
let newfruits=fruits.push("apple");
console.log(fruits);

//2)
let friends=['ajay','gaurav','sameer'];
console.log(friends);
let newfriends=friends.push('raj');
console.log(friends); 

//Unshift
//1
let numbers1=['10','20','30','40'];
console.log(numbers1);
let addnumbers1=numbers1.unshift('8');
console.log(numbers1);

//2
let color=["pink","red","blue","white"];
console.log(color);
let addcolor=color.unshift("red");
console.log(color);

//pop
//1
let friend=['om','kaka','omkar'];
console.log(friend);
let removefriend=friend.pop('');
console.log(friend);
//2
let friendship=['good','better','best'];
console.log(friendship);
let newfriendship=friendship.pop('');
console.log(friendship);

//shift
//1)
let colours=["red","pink","black"];
console.log(colours);
let newcolours=colours.shift();
console.log(colours); 
//2)
let colour=["black","green","yellow","white"];
console.log(color);
let newcolour=color.shift("");
console.log(color);

//modifying array method
//1)splice
//1)
let fruit=['banana','grephs','orange','corn'];
console.log(fruit);
let favfruit=fruit.splice(1,2,'mango');
console.log(fruit);
//2).
let sub=["java","php","css","html"];
console.log(sub);
let mycoursesub=sub.splice(0,4,"advancejava");
console.log(sub);

//2)slice
//1)
let totsub=["c","cpp","html","css","angularjs"];
console.log(totsub);
let mytotsub=totsub.slice(1,0);
console.log(totsub);


//3) fill
//1)
let Name=['sameer','shubham','om'];
console.log(Name);
console.log(Name.fill('sameer'));
//2)
let myName=['yash','sameer','raj'];
console.log(myName);
console.log(myName.fill('sameer'));

//4)tostring
//1)
let flower=['rose','lotus','jai','jui']
console.log(flower);
console.log(flower.toString());
//2)
let favflower=['rose','lotus','jai','jui']
console.log(favflower);
console.log(favflower.toString());

//5)join
//1)
let clg=['RBNB','SDM','CDJAIN','MPS'];
console.log(clg);
console.log(clg.join(" "));
//2)
let myclass=['A','B','C','D'];
console.log(myclass);
console.log(myclass.join(" "));

//serching and sorting method
//1) sort()
//1)
let stringValue=["sam","gaurav","sai"];
console.log(stringValue);
console.log(stringValue.sort());
//2)
let string=["gaurav","sai","om"];
console.log(string);
console.log(string.sort());

//2)reverse
//1)
let stringValues=["one","two","three","four"];
console.log(stringValues);
console.log(stringValues.sort());
//2)
let classNames=["om","monti","raju","omkar"];
console.log(classNames);
//console.log(classNames.sort());
console.log(classNames.reverse());

//3) include
//1)
let food=["noodles","pizza","sambar"];
console.log(food);
console.log(food.includes("samber"));
//2)
console.log(food.includes("orangejuce"));
console.log(" ");

//4)indexof
//1)

let Food=["dal","roti","chapati"];
console.log(Food);
console.log(Food.indexOf("roti"));

//4) Static Array method 
   //1)Array.of
   let myNames=Array.of("a","b","c");
  console.log(myNames);
  // 2
  let animals=Array.of("dog","cat","pig",);
  console.log(animals);

// 2) Array.from 
// 1)
  let favNam=("sameer");
  console.log(favNam);
  console.log(Array.from(favNam));
  
//3)Array isArray
//1)
console.log(Array.isArray(["raj","kumar","sam"]));
console.log(Array.isArray("om"));
console.log(" ");

// 5) Array Iterrator Method 
//1) every method
//1)
let rate=[10,7,6,8,45,2];
console.log(rate);
const checkrate=rate.every((value,index)=>{
      return value >30;
});
console.log(checkrate);

//2) some method
let prices=[10,7,6,8,45,2];
console.log(prices);
const oldprices=prices.some((currentvalue)=>{
    return currentvalue >78;
});
console.log(oldprices);
console.log(" ");

//3) find 
//1)
let studentMark=[45,90,78,56,59,95];
console.log(studentMark);
const checkstudMark=studentMark.find((currentvalue)=>{
     return currentvalue >70;
});
console.log(checkstudMark);
console.log(" ");

//4) filter 
//1)
let Marks=[10,7,6,8,45,2];
console.log(Marks);
const checkMarks=Marks.filter((currentvalue)=>{
     return currentvalue >72;
});
console.log(checkMarks);

const mobilephone=[
    {
        brand:"samsung",
        model:"samsung 30",
        price:"15000",
    },
    {
        brand:"mi",
        model:"8 pro",
        price:"40000",
    },
    {
        brand:"narzo",
        model:"narzo 30",
        price:"20000",
    },
    {
        brand:"redme",
        model:"6 redme",
        price:"30000",
    },
    {
        brand:"mi",
        model:"mi ",
        price:"8000",
    }
];

const samsungmobile=mobilephone.filter((mobile)=>{
    //   console.log(mobile);
         if(mobile.brand === "samsung"){
             return true ;
         }
});
console.log(samsungmobile);
console.log(" ");

// 5) map 
console.log("map");
let numArray=[3,78,56,78,48];
console.log(numArray);
const mapnum=numArray.map((currentvalue)=>{
         return currentvalue *6;
});
console.log(mapnum);
console.log(" ");

// 6) foreach 
console.log("for each");
let numArrays=[4,8,3,7,5,8,5];
console.log(numArrays);
const mapnums=numArrays.forEach((currentvalue)=>{
         console.log(currentvalue+5);   
});
console.log(" ");


