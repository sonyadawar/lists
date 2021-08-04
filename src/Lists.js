import React,{useState} from 'react'
import './style.css'
const Lists = () => {
    const [itemA,setItemA]=useState([])
    const [itemB,setItemB]=useState([])
    const [intersection, setIntersection] = useState([])
    const [union, setUnion] = useState([])
    const [A,setA]=useState("")
    const [B,setB]=useState("")

    const AList = async(e)=>{
        setA(e.target.value)
    }

    const BList= async(e)=>{
        setB(e.target.value)
    }

    const handleListA= async(ael)=>{
        setItemA(oldel => [...oldel,ael])
    }

    const handleListB= async(bel)=>{
        setItemB(oldel => [...oldel,bel])
       
    }

    const compute = () => {
        const mySet1 = new Set()
        itemB.map((item) => mySet1.add(item));
        itemA.map((item) => mySet1.add(item));
        setUnion([...mySet1])
        setIntersection([...intersect(itemA,itemB)])
    }

    const intersect = (arr1, arr2) =>{
        let newArr = [];
        let i = 0;
        let j = 0;
    
        while(i < arr1.length && j < arr2.length){
            if(arr1[i] === arr2[j]){
            newArr.push(arr1[i]);
            i++;
            j++;
    
          }else if(arr1[i] !== arr2[j] && arr1.length > arr2.length){
    
            i++;
    
          }else{
    
            j++;
          }
        }
    
        return newArr;
      }
    
    return (
        <div>
            <h1>List A</h1>
            <input type='text' value={A} onChange={(e)=>AList(e)} className='inputField'/>
            <button onClick={()=>handleListA(A)} className='btn'>+</button>
          
            <h1>List B</h1>
            <input type='text'value={B} onChange={(e)=>{BList(e)}} className='inputField'/>
            <button onClick={()=>handleListB(B)} className='btn'>+</button>
            
            <button onClick={compute} className='btnn'>Compute</button>

            <div className='list'>Elements in List A:</div>
            {itemA.map((item,index)=><div key={index}>{item}</div>)}

            <div className='list'>Elements in List B:</div>
            {itemB.map((item,index)=><div key={index}>{item}</div>)}<br></br>

            <div className='list'>Common Elements in A and B:</div>
            {intersection.map((item,index)=><div key={index}>{item}</div>)}
            
            <div className='list'>Unique Elements in A and B:</div>
            {union.map((item,index)=><div key={index}>{item}</div>)}
        </div>
    )
}

export default Lists
