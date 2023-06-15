"use client";
import React from 'react';
import { useState } from 'react';
let products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function ProductCategoryRow({category}){
  return (
    <tr>
      <th colSpan='2'>
        {category}
      </th>
    </tr>
  )
}

function ProductRow({product}){
  const name = product.stocked ? product.name :
  <span style={{color: 'red'}}>
    {product.name}
  </span>

  return(
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductTable({products}){
  const rows = [];
  let lastCategory = null;

  products.forEach((product) =>{
    if (product.category !== lastCategory)  {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow 
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category
  })

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}


function FilterableProductTable({products}){
  return (
    <div>
      
    </div>
  )
  const [filterText, setFilterText] = useState('');
  const [inStock, setInStock] = useState(false)
}

function SearchBar(){
  return (
    <form className='flex  gap-2 justify-center items-center w-full'>
      <input type='text' placeholder='search products' className='p-2 border border-[#000]' />
      <label className='flex gap-2'>
        <input type='checkbox' className='rounded' />
        {' '}
        <p className='text-[#91B398]'>
        Only show products in stock
        </p>
      </label>
    </form>
  )
}

export default function Home() {
  return (
    <>
   <div class="flex flex-row text-xenter mb-8 text-[#738678]">
      <div class="w-[100%] text-center text-5xl font-bold">Temms Product</div>
   </div>
   <div className='border w-[50%] mx-auto border-[#91B398] border-solid p-5'>
     <SearchBar />
   </div>
   
   
   
    </>
  )
}
