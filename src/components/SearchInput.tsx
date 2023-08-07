import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // 添加类型

  const toggleSearch = () => setActive(!active);
  const clearInput = () => setSearchValue("");

  // 處理點擊頁面其他地方時關閉搜尋框
  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      // 添加类型断言
      setActive(false);
    }
  };

  useEffect(() => {
    if (active && inputRef.current) {
      // 添加条件判断
      inputRef.current.focus();
    }
  }, [active]);

  return (
    <div
      className={`relative ${active ? "w-[200px]" : "w-[30px]"} hidden sm:flex`}
    >
      <div
        className={`flex items-center justify-center gap-1  rounded-sm  ${
          active ? "border-[1px]" : "border-0"
        } `}
      >
        <div className="p-1 cursor-pointer " onClick={toggleSearch}>
          <AiOutlineSearch />
        </div>
        <div className={`flex-grow p-1 transition-transform `}>
          <input
            ref={inputRef}
            className={`w-full bg-transparent text-sm outline-none ${
              active ? "flex" : "hidden"
            }`}
            type="text"
            placeholder="請輸入電影名稱"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setActive(true)}
            onBlur={() => {
              if (!searchValue) {
                setActive(false);
              }
            }}
          />
        </div>

        {searchValue && (
          <div className="p-2 text-lg  cursor-pointer" onClick={clearInput}>
            <AiOutlineClose />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
