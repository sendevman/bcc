import React from 'react';

interface AllowRecordParams {
  address: string;
  value: string;
}

const AllowRecord: React.FC<AllowRecordParams> = ({ address, value }: AllowRecordParams) => {

  const handleCompletd = () => {}

  return (
    <div className="w-full bg-white border border-gray-500 mt-4 flex items-center">
      <div className="w-full border-r border-gray-500">
        <div>{`地址: ${address}`}</div>
        <div>{`金额${value}`}</div>
      </div>
      <div className="min-w-[105px] text-center">
        <button
          onClick={handleCompletd}
          className="min-w-[53px] bg-white border-gray-700 text-gray-800 px-4 py-2 rounded shadow boder"
        >
          已完成
        </button>
      </div>
    </div>
  );
};

export default AllowRecord;