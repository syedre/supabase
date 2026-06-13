import { useState } from "react";

const ExpandFolder = ({ item, level }) => {
  const [expand, setExpand] = useState(false);
  if (item?.folders?.length === 0) {
    return <div style={{ marginLeft: `${level * 24}px` }}>📄 {item.name}</div>;
  }

  if (item?.folders?.length > 0) {
    return (
      <>
        <div
          style={{ marginLeft: `${level * 24}px` }}
          onClick={() => setExpand(!expand)}
        >
          📁 {item.name}
        </div>

        {expand &&
          item.folders.map((folder) => (
            <ExpandFolder key={folder.name} item={folder} level={level + 1} />
          ))}
      </>
    );
  }
};

export default ExpandFolder;
