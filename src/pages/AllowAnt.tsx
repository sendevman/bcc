import React from 'react';

const AllowUpdate: React.FC = () => {
  const handleUpgrade = () => {
    alert('handleUpgrade');
  }

  const handleAnt = () => {
    alert('handleAnt');
  }

  return (
    <div className="w-full bg-gray-100 p-3 min-h-screen flex flex-col items-center gap-2">
      <button
        onClick={handleUpgrade}
        className="min-w-[105px] my-5 bg-white border-gray-700 text-gray-800 px-4 py-2 rounded shadow boder"
      >
        升3星
      </button>
      <button
        onClick={handleAnt}
        className="w-full bg-white py-5 border-gray-700 text-gray-800 px-4 py-2 rounded shadow boder"
      >
        授权ANT
      </button>
      <div className="text-right mb-5">微小力量，巨大价值</div>
      <div className="text-left">
        1-13:蚁后 雌蚁 雄蚁 工蚁 兵蚁 小黄家蚁 大头蚁 剑颚臭家蚁 伊氏臭蚁 黑蚁 洛氏路舍蚁 臭蚁 切叶蚁
      </div>
    </div>
  );
};

export default AllowUpdate;
