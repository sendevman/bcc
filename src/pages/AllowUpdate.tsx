import React from 'react';
import AllowRecord from '../components/AllowRecord/index.tsx';

const allowList = [
  {
    address: '0x8fd8f8d8fdf90fd09f',
    value: '6u'
  },
  {
    address: '0x8fd8f8d8fdf90fd09f',
    value: '6u'
  },
  {
    address: '0x8fd8f8d8fdf90fd09f',
    value: '6u'
  },
  {
    address: '0x8fd8f8d8fdf90fd09f',
    value: '6u'
  },
  {
    address: '0x8fd8f8d8fdf90fd09f',
    value: '6u'
  },
  {
    address: '0x8fd8f8d8fdf90fd09f',
    value: '6u'
  }
];

const AllowUpdate: React.FC = () => {
  const handleAddressChange = (event) => {}

  const handleSearch = () => {
    console.log('handleSearch');
  }

  return (
    <div className="bg-gray-100 p-3 min-h-screen flex flex-col items-center">
      <div className="w-full mt-4 flex gap-2">
        <input
          onChange={handleAddressChange}
          className="w-full text-gray-800 px-4 py-2 rounded shadow"
          placeholder="请输入地址"
        />
        <button
          onClick={handleSearch}
          className="min-w-[105px] bg-gray-500 border-gray-500 text-gray-800 px-4 py-2 rounded shadow boder"
        >
          搜索
        </button>
      </div>
      {allowList.map(item => <AllowRecord address={item.address} value={item.value} />)}
    </div>
  );
};

export default AllowUpdate;
