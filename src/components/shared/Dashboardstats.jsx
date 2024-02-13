import React from 'react'
import { HiOutlineCube, HiOutlineDocumentText, HiOutlineShoppingCart, HiOutlineUsers } from 'react-icons/hi'

function Dashboardstats() {
  return (
    <div className='flex gap-4 w-full'>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                <HiOutlineUsers className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-neutral-200 font-light'>Customers</span>
                <div className='flex items-center'>
                    <strong className='text-sm text-neutral-400 font-semibold'>24</strong>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-500'>
                <HiOutlineShoppingCart className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-neutral-200 font-light'>Orders</span>
                <div className='flex items-center'>
                    <strong className='text-sm text-neutral-400 font-semibold'>24</strong>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-amber-400'>
                <HiOutlineCube className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-neutral-200 font-light'>Products</span>
                <div className='flex items-center'>
                    <strong className='text-sm text-neutral-400 font-semibold'>24</strong>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
                <HiOutlineDocumentText className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-neutral-200 font-light'>Transactions</span>
                <div className='flex items-center'>
                    <strong className='text-sm text-neutral-400 font-semibold'>24</strong>
                </div>
            </div>
        </BoxWrapper>
    </div>
  )
}
export default Dashboardstats

function BoxWrapper({children}){
    return(
    <div className='bg-slate-900 rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
)}
